import { type MouseEvent } from "react";

type ImageSourceProps = {
  src: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLImageElement>) => void;
};

export default function HeaderIcon({
  src,
  className,
  onClick,
  ...props
}: ImageSourceProps & React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      loading="lazy"
      src={src}
      className={className}
      onClick={onClick}
      {...props}
    />
  );
}
