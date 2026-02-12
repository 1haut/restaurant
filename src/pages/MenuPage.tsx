import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Course from "../components/menu-page/Course";
import Filter from "../components/menu-page/Filter";
import { menu, type StateOption, type MenyType, filterAllergies5 } from "../info";
import { type MultiValue } from "react-select";

export default function MenuPage() {
  const [allergies, setAllergies] = useState<MultiValue<StateOption>>([]);
  const [newMenu, setNewMenu] = useState<MenyType>(menu);

  function handleChange(newValue: MultiValue<StateOption>) {
    setAllergies(newValue);
    const filterMenu = filterAllergies5(menu, newValue);
    setNewMenu(filterMenu);
  }

  return (
    <>
      <Navbar />
      <hr />
      <Filter onChange={handleChange} />
      <Course menuDisplay={newMenu}/>
      <hr />
      <Footer />
    </>
  );
}
