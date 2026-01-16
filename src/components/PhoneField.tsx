import type { ChangeEvent } from "react";
import InputTextbox from "./InputTextbox";
import Label from "./Label";
import PhoneNumberSelect from "./PhoneNumberSelect";
import countryCodes from "../countryCode.json"

type PhoneFieldProps = {
  name: string;
  inputBoxName: string;
  countryCode: string;
  phoneNumber: string;
  labelContent: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

export default function PhoneField({
  name,
  inputBoxName,
  phoneNumber,
  onChange,
  labelContent,
  countryCode,
}: PhoneFieldProps) {
  return (
    <div className="input-field tel-field">
      <Label labelFor={name} content={labelContent} />
      <PhoneNumberSelect
      name={name}
      countryCode={countryCode}
      onChange={onChange}
      list={countryCodes}
      />
      <InputTextbox
        type="tel"
        name={inputBoxName}
        value={phoneNumber}
        onChange={onChange}
      />
    </div>
  );
}
