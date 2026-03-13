import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import { menu } from "../utils/constants";
import OrderItem from "../components/order-page/OrderItem";
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
      {Object.entries(menu).map(([course, dishes]) => (
        <div key={course}>
          <h3 className="order-course">{course}</h3>
          {dishes.map(dish => (
            <div key={course + "-" + dish.id}>
              <OrderItem
                name={dish.name}
                price={dish.price}
                calculateTotal={calculateTotal}
                changeOrder={addDish}
              />
            </div>
          ))}
        </div>
      ))}
      <h2
        className="total-sum"
        style={{ margin: "2rem 10px 0 0", textAlign: "right" }}
      >
        Total: {total} kr
      </h2>
      <button
        className="confirmation-button"
        onClick={() => {
          setOrderConfirmed(true);
        }}
      >
        Gå til betaling!
      </button>
      <Footer />
    </>
  );
}
