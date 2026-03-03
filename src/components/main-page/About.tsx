import RestaurantLogo from "../../assets/img/logo.webp"
import HeaderIcon from "../header/HeaderIcon";
import Description from "./Description";
import Slogan from "./Slogan";

export default function About() {

  return (
    <section className="desc">
      <Slogan />
      <Description />
      <HeaderIcon src={RestaurantLogo} alt="Resturant logo." />
    </section>
  );
}
