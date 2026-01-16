import type { ChangeEvent } from "react";

type InputTextboxProps = {
  type: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string
};

export default function InputTextbox({
  type,
  name,
  value,
  onChange,
}: InputTextboxProps) {
  return (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
  );
}