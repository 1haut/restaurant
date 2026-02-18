import { allergiesOptions, type StateOption } from "../../info";
import Select, { type MultiValue } from "react-select";

type MenuFilterProps = {
  onChange: (newValue: MultiValue<StateOption>) => void;
};

export default function Filter({ onChange }: MenuFilterProps) {
  return (
    <Select
      name="allergies"
      placeholder="Velg..."
      options={allergiesOptions}
      isMulti
      onChange={onChange}
      className="multi-select"
    />
  );
}
