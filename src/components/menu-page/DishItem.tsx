import type { Dish } from "../../types/types";

interface DishItemProps {
  dish: Dish;
}

export default function DishItem({ dish }: DishItemProps) {
  return (
    <div className="dish-container">
      <div className="dish">
        <div className="dish-top">
          <h4 className="dish-name">{dish.name}</h4>
          <p className="dish-price">
            {dish.price.toLocaleString("no-NO", {
              style: "currency",
              currency: "NOK",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </p>
        </div>
        <p className="dish-description">{dish.description}</p>
        <p className="dish-allergies">
          Allergener: {dish.allergies.join(", ")}
        </p>
      </div>
    </div>
  );
}
