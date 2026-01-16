import type { ChangeEvent } from "react";

interface CountryCodeFormat {
  name: string;
  code: string;
  emoji: string;
  unicode: string;
  image: string;
  dial_code: string;
}

type OptionsSelectProps = {
  name: string;
  countryCode: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  list: CountryCodeFormat[];
};

export default function PhoneNumberSelect({
  name,
  countryCode,
  onChange,
  list,
}: OptionsSelectProps) {
  return (
    <select name={name} value={countryCode} onChange={onChange}>
      {list.map(item => (
        <option key={item.code} value={item.dial_code}>
          ({item.dial_code}) {item.name}
        </option>
      ))}
    </select>
  );
}
