import ContactPage from "./pages/ContactPage";
import MainPage from "./pages/MainPage";
import MenuPage from "./pages/MenuPage";
import ReservationPage from "./pages/ReservationPage";
import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booking" element={<ReservationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
