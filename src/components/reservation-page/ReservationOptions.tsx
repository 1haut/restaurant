import SelectDate from "./SelectDate";
import SelectTime from "./SelectTime";
import SelectPeople from "./SelectPeople";
import SelectDuration from "./SelectDuration";
import SelectTable from "./SelectTable";
import type { BookingDetails } from "../../types/types";

interface ReservationOptionsProps {
  handleChoice: (data: Partial<BookingDetails>) => void;
  bookingDetails: BookingDetails;
}

export default function ReservationOptions({
  handleChoice,
  bookingDetails,
}: ReservationOptionsProps) {
  return (
    <>
      <div className="booking-options">
        <div className="booking-schedule">
          <SelectDate onPick={handleChoice} />
          <SelectTime onPick={handleChoice} date={bookingDetails.date} />
          <SelectPeople onPick={handleChoice} />
          <SelectDuration onPick={handleChoice} />
        </div>
        <div className="booking-table">
          <SelectTable onPick={handleChoice} people={bookingDetails.people}/>
        </div>
      </div>
    </>
  );
}
