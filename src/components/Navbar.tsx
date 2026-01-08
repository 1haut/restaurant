import HeaderIcon from "./HeaderIcon";
import CompanyLogo from "../assets/icons/placeholder-logo.svg";
import HamburgerMenu from "../assets/icons/hamburger-menu.svg";

export default function Navbar() {
  return (
    <header className="navbar">
      <HeaderIcon src={CompanyLogo} />
      <HeaderIcon src={HamburgerMenu} className="hamburger-menu" />
    </header>
  );
}
