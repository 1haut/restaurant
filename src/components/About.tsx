import Slogan from "./Slogan";
import Description from "./Description";
import HeaderIcon from "./HeaderIcon";
import Logo from "../assets/icons/placeholder-logo.svg"

export default function About() {
  return (
    <section className="desc">
      <Slogan />
      <Description />
      <HeaderIcon src={Logo} />
    </section>
  );
}
