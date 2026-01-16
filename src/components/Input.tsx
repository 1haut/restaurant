
import Label from "./Label";
import InputTextbox from "./InputTextbox";
import type { ChangeEvent } from "react";

type InputProps = {
    type: string,
    name: string,
    value: string,
    label: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}


export default function Input({type, name, value, label, onChange}: InputProps) {
  return (
    <div className="input-field">
      <Label labelFor={name} content={label} />
      <InputTextbox type={type} name={name} value={value} onChange={onChange}/>
    </div>
  );
}
