import type { ChangeEvent } from "react";
import Label from "./Label";
import MessageTextbox from "./MessageTextbox";

type MessageFieldProps = {
  name: string;
  labelName: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function MessageField({
  name,
  labelName,
  value,
  onChange,
}: MessageFieldProps) {
  return (
    <div className="input-field">
      <Label labelFor={name} content={labelName} />
      <MessageTextbox content={value} onChange={onChange}/>
    </div>
  );
}
