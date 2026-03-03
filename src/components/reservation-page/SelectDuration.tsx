import { useState } from "react";
import type { BookingDetails } from "../../types/types";

interface SelectDurationProps {
  onPick: (data: Partial<BookingDetails>) => void;
}

export default function SelectDuration({ onPick }: SelectDurationProps) {
  const [duration, setDuration] = useState(60);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const durationNumber = Number(event.target.value);
    setDuration(durationNumber);
    onPick({ duration: durationNumber });
  }
  return (
    <>
      <p>Tid (i minutter):</p>
      <div className="duration">
        {[60, 120].map(value => (
          <label key={value}>
            <input
              type="radio"
              name="booking-duration2"
              value={value}
              checked={duration === value}
              onChange={handleChange}
            />
            {value}
          </label>
        ))}
      </div>
    </>
  );
}
