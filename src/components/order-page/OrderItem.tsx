import { useState } from "react";
import "./OrderItem.css";

interface OrderItemProps {
  name: string;
  price: number;
  calculateTotal: (dishPrice: number) => void;
  changeOrder: (order: { name: string; amount: number; price: number }) => void;
}

export default function OrderItem({
  name,
  price,
  calculateTotal,
  changeOrder,
}: OrderItemProps) {
  const [amount, setAmount] = useState(0);
  function handleIncrement() {
    if (amount < 10) {
      setAmount(amount + 1);
      calculateTotal(price);
    }
    changeOrder({
      name: name,
      price: price,
      amount: amount + 1,
    });
  }

  function handleDecrement() {
    if (amount > 0) {
      setAmount(amount - 1);
      calculateTotal(-price);
    }

    changeOrder({
      name: name,
      price: price,
      amount: amount - 1,
    });
  }

  return (
    <div className="order-item">
      <h5 className="item-info">
        {name}, <i>{price} kr</i>
      </h5>
      <div className="counter-container">
        <button onClick={handleIncrement}>+</button>
        <p>{amount}</p>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}
