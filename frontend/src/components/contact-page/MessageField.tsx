import { useState, type ChangeEvent } from "react";
import Label from "./Label";
import MessageTextbox from "./MessageTextbox";
import ErrorIcon from "./ErrorIcon";
import { toKebabCase } from "../../utils/utils";


interface MessageFieldProps {
  name: string;
  labelName: string;
  value: string;
  hasError: boolean;
  errorMessage: string | null;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function MessageField({
  name,
  labelName,
  value,
  hasError,
  errorMessage,
  onChange,
}: MessageFieldProps) {
  const [moved, setMoved] = useState(false);

  return (
    <div className={`input-field ${toKebabCase(name) + "-field"}`}>
      <Label labelFor={name} content={labelName} />
      <MessageTextbox
        content={value}
        name={name}
        onBlur={() => setMoved(true)}
        className={hasError && moved ? "error" : ""}
        onChange={onChange}
      />
      {hasError && moved && (
        <p className="error-message">
          <ErrorIcon height="1.5rem" fill="#b22222" />
          {errorMessage}
        </p>
      )}
    </div>
  );
}
