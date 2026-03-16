import type { ChangeEvent } from "react";
import countryCodes from "../../utils/country_code_list.json"
import InputTextbox from "./InputTextbox";
import Label from "./Label";
import PhoneNumberSelect from "./PhoneNumberSelect";
import { toKebabCase } from "../../utils/utils";

interface PhoneFieldProps {
  name: string;
  inputBoxName: string;
  countryCode: string;
  phoneNumber: string;
  autoComplete: string;
  labelContent: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

export default function PhoneField({
  name,
  inputBoxName,
  phoneNumber,
  onChange,
  autoComplete,
  labelContent,
  countryCode,
}: PhoneFieldProps) {
  return (
    <div className="input-field tel-field">
      <Label labelFor={name} content={labelContent} />
      <div className="tel-input-container">
        <PhoneNumberSelect
          name={name}
          countryCode={countryCode}
          onChange={onChange}
          list={countryCodes}
        />
        <InputTextbox
          type="tel"
          id={toKebabCase(name)}
          name={inputBoxName}
          value={phoneNumber}
          onChange={onChange}
          autoComplete={autoComplete}
        />
      </div>
    </div>
  );
}
