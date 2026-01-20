import HeaderIcon from "./HeaderIcon";
import CompanyLogo from "../assets/icons/placeholder-logo.svg";
import HamburgerMenu from "../assets/icons/hamburger-menu.svg";
import MenuClose from "../assets/icons/close-menu.svg";
import Dropdown from "./Dropdown";
import { useState } from "react";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <header className="navbar">
        <HeaderIcon src={CompanyLogo} />
        <Dropdown className="dropdown-header" />
        <HeaderIcon
          src={isExpanded ? MenuClose : HamburgerMenu}
          className="hamburger-menu"
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        />
      </header>
      <Dropdown className={`dropdown ${isExpanded ? "open" : "closed"}`} />
    </>
  );
}
