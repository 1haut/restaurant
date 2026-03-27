import type { ComponentPropsWithoutRef } from "react";

interface LabelProps {
  labelFor: string;
  content: string | number;
}

export default function Label({
  labelFor,
  content,
  ...props
}: LabelProps & ComponentPropsWithoutRef<"label">) {
  return (
    <label htmlFor={labelFor} {...props}>
      {content}
    </label>
  );
}
