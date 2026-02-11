import { useState } from "react";
import { openingHours, range } from "../utils";
import { dateFormatOptions } from "../info";

const fourWeeksAhead = Array.from({ length: 28 }, (_, idx) => {
  const today = new Date();
  today.setDate(today.getDate() - 1 + idx);
  return today;
});

export default function ReservationOptions() {
  const today = new Date();
  const [bookingDate, setbookingDate] = useState(today);
  const [duration, setDuration] = useState(60);

  const weekdayIndex = (bookingDate.getDate() + 6) % 7; // First Day: Monday
  let openingHoursDay = openingHours[weekdayIndex];

  return (
    <>
      <div className="booking-options">
        <label htmlFor="time">Klokkeslett: </label>
        <select name="time" id="time" disabled={!openingHoursDay.isOpen}>
          <option value="">Velg klokkeslett</option>
          {openingHoursDay.isOpen &&
            range(openingHoursDay.openHour!, openingHoursDay.closeHour!).map(
              hour => (
                <option key={hour} value={hour}>
                  {hour}:00
                </option>
              ),
            )}
        </select>
        <label htmlFor="date">Dato: </label>
        <select
          name="date"
          id="date"
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            setbookingDate(new Date(event.target.value))
          }
        >
          {fourWeeksAhead.map((day: Date, idx) => {
            return (
              <option key={idx} value={day.toISOString().split("T")[0]}>
                {day.toLocaleString("no-NO", dateFormatOptions)}
              </option>
            );
          })}
        </select>
        <label htmlFor="people">Antall:</label>
        <select name="people" id="people">
          {range(1, 9).map((persons, idx) => (
            <option key={idx} value={persons}>
              {persons} {persons === 1 ? "person" : "personer"}
            </option>
          ))}
        </select>
        <p>Tid (i minutter):</p>
        <div className="duration">
          {[60, 120].map(value => (
            <label key={value}>
              <input
                type="radio"
                name="booking-duration"
                value={value}
                checked={duration === value}
                onChange={() => setDuration(value)}
              />
              {value}
            </label>
          ))}
        </div>
      </div>
    </>
  );
}
