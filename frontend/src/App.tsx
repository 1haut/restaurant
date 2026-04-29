import Contact from "./pages/Contact";
import Contact2 from "./pages/Contact2";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Reservation from "./pages/Reservation";
import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Reservation />} />
          <Route path="/order" element={<Order />} />
          <Route path="/test" element={<Contact2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
