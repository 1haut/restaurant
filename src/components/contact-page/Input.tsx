import type { ChangeEvent } from "react";
import InputTextbox from "./InputTextbox";
import Label from "./Label";

type InputProps = {
  type: string;
  name: string;
  value: string;
  label: string;
  autoComplete: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  type,
  name,
  value,
  label,
  autoComplete,
  onChange,
}: InputProps) {
  return (
    <div className={`input-field ${name + "-field"}`}>
      <Label labelFor={name} content={label} />
      <InputTextbox
        type={type}
        name={name}
        id={name}
        value={value}
        autoComplete={autoComplete}
        onChange={onChange}
      />
    </div>
  );
}
