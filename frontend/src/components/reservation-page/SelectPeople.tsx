import type { BookingDetails } from "../../types/types";
import { range } from "../../utils/utils";

interface SelectPeopleProps {
  onPick: (data: Partial<BookingDetails>) => void;
}

export default function SelectPeople({ onPick }: SelectPeopleProps) {
  return (
    <>
      <label htmlFor="people">Antall:</label>
      <select
        name="people"
        id="people"
        onChange={event => onPick({ people: Number(event.target.value) })}
      >
        {range(1, 9).map((persons, idx) => (
          <option key={idx} value={persons}>
            {persons} {persons === 1 ? "person" : "personer"}
          </option>
        ))}
      </select>
    </>
  );
}
