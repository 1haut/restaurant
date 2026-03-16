import { useState, type ChangeEvent } from "react";
import InputTextbox from "./InputTextbox";
import Label from "./Label";
import ErrorIcon from "./ErrorIcon";

interface InputProps {
  type: string;
  name: string;
  value: string;
  label: string;
  autoComplete: string;
  hasError: boolean;
  errorMessage: string | null;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  type,
  name,
  value,
  label,
  hasError,
  errorMessage,
  autoComplete,
  onChange,
}: InputProps) {
  const [moved, setMoved] = useState(false);

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
        onBlur={() => setMoved(true)}
        className={hasError && moved ? "error" : ""}
      />
      {hasError && moved && (
        <p className="error-message">
          <ErrorIcon height="1.5rem" fill="red" />
          {errorMessage}
        </p>
      )}
    </div>
  );
}
