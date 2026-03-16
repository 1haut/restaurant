import { getAllergiesOptions } from "../../utils/utils";
import { menu } from "../../utils/constants";
import type { StateOption } from "../../types/types";
import Select, { type MultiValue } from "react-select";

interface MenuFilterProps {
  onChange: (newValue: MultiValue<StateOption>) => void;
};

export default function Filter({ onChange }: MenuFilterProps) {
  return (
    <Select
      name="allergies"
      placeholder="Velg allergier..."
      options={getAllergiesOptions(menu)}
      isMulti
      onChange={onChange}
      className="multi-select"
    />
  );
}