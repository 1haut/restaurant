import { type MouseEvent, type ComponentPropsWithoutRef } from "react";

type ImageSourceProps = {
  className?: string;
  onClick?: (event: MouseEvent<HTMLImageElement>) => void;
};

export default function HeaderIcon({
  className,
  onClick,
  ...props
}: ImageSourceProps & ComponentPropsWithoutRef<"img">) {
  return (
    <img
      loading="lazy"
      className={className}
      onClick={onClick}
      {...props}
    />
  );
}
