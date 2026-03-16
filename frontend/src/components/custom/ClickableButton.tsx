import {
  type ReactNode,
  type MouseEvent,
  type KeyboardEvent,
  type ComponentPropsWithoutRef,
} from "react";

interface ClickableProps {
  onClick: (
    event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>,
  ) => void;
  children: ReactNode;
  ariaLabel: string;
  className?: string;
}

export default function Clickable({
  children,
  ariaLabel,
  onClick,
  className,
  ...props
}: ClickableProps & ComponentPropsWithoutRef<"button">) {
  function handleEvent(
    event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>,
  ) {
    onClick(event);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleEvent(event);
    }
  }
  return (
    <button
      tabIndex={0}
      onClick={handleEvent}
      onKeyDown={handleKeyDown}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}
