import { dateFormatOptions } from "../../utils/constants";
import { useMemo } from "react";
import type { BookingDetails } from "../../types/types";

interface SelectDateProps {
  onPick: (data: Partial<BookingDetails>) => void;
}

export default function SelectDate({ onPick }: SelectDateProps) {
  const fourWeeksAhead = useMemo(
    () =>
      Array.from({ length: 28 }, (_, idx) => {
        const today = new Date();
        today.setDate(today.getDate() + idx);
        return today;
      }),
    [new Date().getDate()],
  );
  return (
    <>
      <label htmlFor="date">Dato: </label>
      <select
        name="date"
        id="date"
        onChange={event => onPick({ date: new Date(event.target.value) })}
      >
        {fourWeeksAhead.map((day: Date, idx) => (
          <option key={idx} value={day.toISOString().split("T")[0]}>
            {day.toLocaleString("no-NO", dateFormatOptions)}
          </option>
        ))}
      </select>
    </>
  );
}
