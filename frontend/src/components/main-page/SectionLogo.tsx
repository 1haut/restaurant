import RestaurantLogo from "../../assets/img/logo.webp";
import "./SectionLogo.css"

export default function SectionLogo() {
  return (
    <section className="page-logo">
      <img className="page-logo-element" src={RestaurantLogo} loading="lazy" alt="Restaurantlogo"/>
      <h1>Havets Skatter</h1>
      <h2>Oslo</h2>
    </section>
  );
}