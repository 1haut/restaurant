import type { ChangeEvent } from "react";

type MessageTextboxProps = {
  content: string;
  name: string;
  rows?: number;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function MessageTextbox({
  content,
  name,
  rows = 5,
  onChange,
}: MessageTextboxProps) {
  return (
    <textarea
      name={name}
      id={name}
      value={content}
      rows={rows}
      onChange={onChange}
    />
  );
}
