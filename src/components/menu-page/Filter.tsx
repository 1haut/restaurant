import { useState } from "react";
import { allergiesOptions, type StateOption } from "../../info";
import Select, { type MultiValue } from "react-select";

export default function Filter() {
  const [allergies, setAllergies] = useState<MultiValue<StateOption>>([]);

  function handleChange(newValue: MultiValue<StateOption>) {
    setAllergies(newValue);
  }

  return (
    <Select
      name="allergies"
      placeholder="Velg..."
      options={allergiesOptions}
      isMulti
      onChange={handleChange}
      className="multi-select"
    />
  );
}
