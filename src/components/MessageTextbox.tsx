import type { ChangeEvent } from "react";

type MessageTextboxProps = {
  content: string;
  rows?: number
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function MessageTextbox({ content, rows = 5, onChange }: MessageTextboxProps) {
  return (
    <textarea
      name="textContent"
      value={content}
      rows={rows}
      onChange={onChange}
    />
  );
}
