import type { ChangeEvent, ComponentPropsWithoutRef } from "react";

interface InputTextboxProps {
  type: string;
  name: string;
  id: string;
  value: string;
  autoComplete: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function InputTextbox({
  type,
  name,
  id,
  value,
  autoComplete,
  onChange,
  ...props
}: InputTextboxProps & ComponentPropsWithoutRef<"input">) {
  return (
    <input
      type={type}
      name={name}
      autoComplete={autoComplete}
      id={id}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}
