import { useEffect, useState } from "react";
import Logo from "../../assets/icons/placeholder-logo.svg";
import HeaderIcon from "../header/HeaderIcon";
import Description from "./Description";
import Slogan from "./Slogan";

export default function About() {
  const [trigger, setTrigger] = useState(false);
  // useEffect(() => {
  //   // async () => {
  //   //   try {
  //   //     const response = await fetch(
  //   //       "http://localhost:5000/get-data/27-02-26/15",
  //   //     );
  //   //     if (!response.ok) {
  //   //       throw new Error(`HTTP error! status: ${response.status}`);
  //   //     }
  //   //     const res = await response.json();
  //   //     setTabl(res)
  //   //     console.log(tabl)
  //   //   } catch (err) {
  //   //     console.log("PING");
  //   //     console.error(err);
  //   //   }
  //   // };
  //   fetch("http://localhost:5000/get-data/27-02-26/15")
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // }, [trigger]);
  return (
    <section className="desc">
      <Slogan />
      <Description />
      <HeaderIcon src={Logo} alt="Resturant logo." />
      <button
        onClick={() => {
          setTrigger(!trigger);
        }}
      >
        Test API
      </button>
    </section>
  );
}
