import { type MouseEvent, type ComponentPropsWithoutRef } from "react";

interface ImageSourceProps {
  onClick?: (event: MouseEvent<HTMLImageElement>) => void;
};

export default function HeaderIcon({
  onClick,
  ...props
}: ImageSourceProps & ComponentPropsWithoutRef<"img">) {
  return (
    <img
      loading="lazy"
      onClick={onClick}
      {...props}
    />
  );
}
