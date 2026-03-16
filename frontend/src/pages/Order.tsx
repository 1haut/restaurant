import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import OrderItem from "../components/order-page/OrderItem";
import { menu, coursesNames } from "../utils/constants";
import "./Order.css";

export default function Order() {
  const [total, setTotal] = useState(0);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderList, setOrderList] = useState<
    { name: string; amount: number; price: number }[]
  >([]);

  function calculateTotal(dishPrice: number) {
    const newTotal = total + dishPrice;
    setTotal(newTotal);
  }

  function addDish(order: { name: string; amount: number; price: number }) {
    const existingOrderIndex = orderList.findIndex(o => o.name === order.name);
    if (existingOrderIndex !== -1) {
      const updatedOrderList = [...orderList];
      updatedOrderList[existingOrderIndex] = order;
      setOrderList(updatedOrderList);
    } else {
      setOrderList([...orderList, order]);
    }
  }

  useEffect(() => {
    if (!orderConfirmed) {
      return;
    }
    async function sendOrder() {
      const fetchUrl = "http://localhost:5151/checkout";
      const fetchOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderList, total }),
      };
      try {
        const resp = await fetch(fetchUrl, fetchOptions);
        if (!resp.ok) {
          throw new Error("Request failed!");
        }

        const data = await resp.json();

        if (data.url) {
          window.location.assign(data.url);
        }
      } catch (err) {
        console.error(err);
      }
    }
    sendOrder();
  }, [orderConfirmed]);

  return (
    <>
      <Navbar />
      <h2 className="header">Bestill mat</h2>
      {Object.entries(menu).map(([course, dishes], idx) => (
        <div key={course}>
          <h3 className="order-course">{coursesNames[idx].nameNo}</h3>
          {dishes.map((dish, idx) => (
            <article
              className={`order-item-container ${idx === 0 ? "first-order-item" : ""}`}
              key={course + "-" + dish.id}
            >
              <OrderItem
                name={dish.name}
                price={dish.price}
                calculateTotal={calculateTotal}
                changeOrder={addDish}
              />
            </article>
          ))}
        </div>
      ))}
      <h2 className="total-sum">
        Total: <span>{total} kr</span>
      </h2>
      <button
        className="confirmation-button"
        onClick={() => {
          setOrderConfirmed(true);
        }}
      >
        Gå til betaling!
      </button>
      <hr />
      <Footer />
    </>
  );
}
