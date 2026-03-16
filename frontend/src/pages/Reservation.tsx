import { useState } from "react";
import type { BookingDetails } from "../types/types.ts";
import { weekdayIndexMondayBased } from "../utils/utils.ts";
import Footer from "../components/footer/Footer.tsx";
import Navbar from "../components/header/Navbar.tsx";
import ReservationOptions from "../components/reservation-page/ReservationOptions.tsx";
import ConfirmationModal from "../components/reservation-page/ConfirmationModal.tsx";
import "./Reservation.css";

export default function Reservation() {
  const today = new Date();
  const [confModal, setConfModal] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    time: "",
    date: today,
    people: 1,
    duration: 60,
    table: "",
  });

  function handleChoice(data: Partial<BookingDetails>) {
    setBookingDetails(prev => {
      const newDetails: BookingDetails = { ...prev, ...data };
      return newDetails;
    });
  }

  return (
    <>
      <ConfirmationModal
        stateModal={confModal}
        toggleModal={setConfModal}
        bookingDetails={bookingDetails}
      />
      <Navbar />
      <main className="reservation">
        <ReservationOptions
          handleChoice={handleChoice}
          bookingDetails={bookingDetails}
        />
      </main>
      <button
        disabled={weekdayIndexMondayBased(bookingDetails.date) === 6}
        type="submit"
        className="confirm-booking"
        onClick={() => setConfModal(true)}
      >
        Bekreft bestilling!
      </button>
      <Footer />
    </>
  );
}
