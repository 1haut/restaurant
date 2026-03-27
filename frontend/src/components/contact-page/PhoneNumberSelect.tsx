import type { ChangeEvent } from "react";
import type { CountryCode } from "../../types/types";

interface OptionsSelectProps {
  name: string;
  countryCode: string;
  list: CountryCode[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export default function PhoneNumberSelect({
  name,
  countryCode,
  onChange,
  list,
}: OptionsSelectProps) {
  return (
    <select
      name={name}
      value={countryCode}
      onChange={onChange}
      autoComplete="tel-country-code"
    >
      {list.map(item => (
        <option key={item.code} value={item.dial_code}>
          {item.dial_code} {item.name_no}
        </option>
      ))}
    </select>
  );
}
