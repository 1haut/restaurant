
import Logo from "../../assets/icons/placeholder-logo.svg";
import HeaderIcon from "../header/HeaderIcon";
import Description from "./Description";
import Slogan from "./Slogan";

export default function About() {
  return (
    <section className="desc">
      <Slogan />
      <Description />
      <HeaderIcon src={Logo} alt="Resturant logo." />
    </section>
  );
}
