import { useState } from "react";
import { menu } from "../utils/constants.ts";
import { filterAllergies } from "../utils/utils.ts";
import type { MultiValue } from "react-select";
import type { Menu, StateOption } from "../types/types.ts";
import Footer from "../components/footer/Footer.tsx";
import Navbar from "../components/header/Navbar.tsx";
import Course from "../components/menu-page/Course.tsx";
import Filter from "../components/menu-page/Filter.tsx";
import "./Menu.css"

export default function Menu() {
  const [newMenu, setNewMenu] = useState<Menu>(menu);

  function handleChange(newValue: MultiValue<StateOption>) {
    const filterMenu = filterAllergies(menu, newValue);
    setNewMenu(filterMenu);
  }

  return (
    <>
      <Navbar />
      <hr />
      <Filter onChange={handleChange} />
      <Course menuDisplay={newMenu} />
      <hr />
      <Footer />
    </>
  );
}
