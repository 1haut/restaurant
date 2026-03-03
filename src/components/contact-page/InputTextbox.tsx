import type { ChangeEvent } from "react";

type InputTextboxProps = {
  type: string;
  name: string;
  id: string;
  value: string;
  autoComplete: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export default function InputTextbox({
  type,
  name,
  id,
  value,
  autoComplete,
  onChange,
}: InputTextboxProps) {
  return (
    <input
      type={type}
      name={name}
      autoComplete={autoComplete}
      id={id}
      value={value}
      onChange={onChange}
    />
  );
}
