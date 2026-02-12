import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ReservationOptions from "../components/ReservationOptions";
import TableArrangement from "../components/TableArrangement";


export default function ReservationPage() {
  return (
    <>
      <Navbar />
      <main className="reservation">
        <ReservationOptions />
        <TableArrangement />
      </main>
      <button type="submit" className="confirm-booking">Bekreft bestilling!</button>
      <Footer />
    </>
  );
}
