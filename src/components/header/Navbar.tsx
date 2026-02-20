import HeaderIcon from "./HeaderIcon";
import Dropdown from "./Dropdown";
import CompanyLogo from "../../assets/icons/placeholder-logo.svg";
import HamburgerMenu from "../../assets/icons/hamburger-menu.svg";
import MenuClose from "../../assets/icons/close-menu.svg";
import { useState } from "react";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleExpanded() {
    setIsExpanded(!isExpanded);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLImageElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      console.log(event);
      handleExpanded();
    }
  }

  return (
    <>
      <header className="navbar">
        <HeaderIcon src={CompanyLogo} tabIndex={0} alt="Company logo." />
        <Dropdown tabbable={0} className="dropdown-header" />
        <HeaderIcon
          src={isExpanded ? MenuClose : HamburgerMenu}
          className="hamburger-menu"
          tabIndex={0}
          role="button"
          alt={isExpanded ? "Icon of close sign." : "Icon of hamburger menu."}
          onKeyDown={handleKeyDown}
          onClick={handleExpanded}
        />
      </header>
      <Dropdown
        tabbable={isExpanded ? 0 : -1}
        className={`dropdown ${isExpanded ? "open" : "closed"}`}
      />
    </>
  );
}
