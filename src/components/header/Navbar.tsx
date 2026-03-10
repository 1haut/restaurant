import { useState } from "react";
import HeaderIcon from "./HeaderIcon";
import Dropdown from "./Dropdown";
import HamburgerMenu from "../../assets/icons/hamburger-menu.svg";
import MenuClose from "../../assets/icons/close-menu.svg";
import RestaurantLogo from "../../assets/img/logo.webp";
import "./Navbar.css";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleExpanded() {
    setIsExpanded(!isExpanded);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLImageElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleExpanded();
    }
  }

  return (
    <>
      <header className="navbar">
        <HeaderIcon src={RestaurantLogo} tabIndex={0} alt="Company logo." />
        <Dropdown tabbable={0} className="dropdown-header" />
        <HeaderIcon
          src={isExpanded ? MenuClose : HamburgerMenu}
          className="hamburger-menu"
          tabIndex={0}
          role="button"
          alt={isExpanded ? "Icon of close sign." : "Icon of hamburger menu."}
          aria-expanded={isExpanded}
          aria-haspopup="true"
          aria-controls="dropdown-nav"
          onKeyDown={handleKeyDown}
          onClick={handleExpanded}
        />
      </header>
      <Dropdown
        id="dropdown-nav"
        role="menu"
        tabbable={isExpanded ? 0 : -1}
        className={`dropdown ${isExpanded ? "open" : "closed"}`}
      />
    </>
  );
}
