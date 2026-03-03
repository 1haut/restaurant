import RestaurantLogo from "../../assets/img/test4.webp";

export default function LogoTest() {
  return (
    <section className="page-logo">
      <img className="page-logo-element" src={RestaurantLogo} loading="lazy" alt="Restaurantlogo"/>
      <h1>Havets Skatter</h1>
      <h2>Oslo</h2>
    </section>
  );
}
