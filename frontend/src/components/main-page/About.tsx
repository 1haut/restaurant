import RestaurantLogo from "../../assets/img/logo.webp";
import HeaderIcon from "../header/HeaderIcon";
import Description from "./Description";
import Slogan from "./Slogan";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="desc">
      <Slogan />
      <Description />
      <aside>
        <HeaderIcon src={RestaurantLogo} alt="Resturant logo." />
      </aside>
    </section>
  );
}