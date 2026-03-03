import { useState, useEffect } from "react";
import { openingHours } from "../../utils/constants";
import { range } from "../../utils/utils";
import type { BookingDetails } from "../../types/types";

interface SelectTimeProps {
  date: Date;
  onPick: (data: Partial<BookingDetails>) => void;
}

export default function SelectTime({ date, onPick }: SelectTimeProps) {
  const [time, setTime] = useState("");

  const weekdayIndex = (date.getDay() + 6) % 7; // First Day: Monday
  let openingHoursDay = openingHours[weekdayIndex];

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setTime(event.target.value);
    onPick({ time: event.target.value + ":00" });
  }

  useEffect(() => {
    if (weekdayIndex === 6) {
      setTime("");
      onPick({ time: "" });
    }
  }, [weekdayIndex]);
  return (
    <>
      <label htmlFor="time">Klokkeslett: </label>
      <select
        name="time"
        id="time"
        disabled={!openingHoursDay.isOpen}
        value={time}
        onChange={handleChange}
      >
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
    </>
  );
}
