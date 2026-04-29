import express, { type Request, type Response } from "express";
import { createClient, type RedisArgument } from "redis";
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import "dotenv/config";
import Stripe from "stripe";

const port = 5151;
const app = express();

type OrderType = { name: string; amount: number; price: number };

if (!process.env.STRIPE_SK) {
  throw new Error("Your stripe API key is not set");
}

const stripe = new Stripe(process.env.STRIPE_SK, {
  typescript: true,
});

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  limit: 20,
  message:
    "You've sent too many requests lately. You may try again at a later point.",
  standardHeaders: true,
  legacyHeaders: false,
  ipv6Subnet: 56,
});

app.use(cors());
app.use(express.json());
app.use(limiter);

const client = createClient({
  url: process.env.REDIS_URL,
});

client.on("error", err => console.log("Redis Error", err));
await client.connect();

app.get("/get-data/date/:date", async (req: Request, res: Response) => {
  try {
    const { date } = req.params;
    const value = await client.HGET("booking", date as RedisArgument);

    if (value === null) {
      return res.status(404).json({ message: "No bookings for this date" });
    }

    res.status(200).json(value);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
});

app.post("/save-booking", async (req: Request, res: Response) => {
  try {
    const { date, time } = req.body;
    const response = await client.HGET("booking", date);

    if (typeof response === "string") {
      let prevArray = Object.values(JSON.parse(response)).flat(2);
      await client.HSET(
        "booking",
        date,
        JSON.stringify({ time: [...prevArray, ...time].flat(3) }),
      );
    } else {
      await client.HSET("booking", date, JSON.stringify({ time }));
    }

    res.status(201).json({ success: "Created." });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.post("/save-contact-form", async (req: Request, res: Response) => {
  try {
    const response = await client.HSET(
      "contact-form",
      req.body.id,
      JSON.stringify(req.body),
    );

    res.status(201).json({ success: "Created." });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.get("/get-all-contact-messages", async (req: Request, res: Response) => {
  try {
    const messages = await client.HGETALL("contact-form");

    if (Object.keys(messages).length === 0) {
      return res.status(404).json({ message: "No messages found" });
    }
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.post("/checkout", async (req: Request, res: Response) => {
  try {
    const { orderList } = req.body;

    const lineItems = orderList.map((item: OrderType) => ({
      quantity: item.amount,
      price_data: {
        currency: "nok",
        unit_amount: item.amount * item.price * 100,
        product_data: {
          name: item.name,
        },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: "http://localhost:5173/",
    });

    if (!session.url) {
      return res
        .status(500)
        .json({ error: "Failed to create checkout session" });
    }

    console.log(session.amount_total);

    res.status(200).json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
