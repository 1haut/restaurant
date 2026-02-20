import type { HTMLProps } from "react";
import { information } from "../../info";
import { Link } from "react-router";

interface DropdownProps {
  tabbable: number;
}

export default function Dropdown({
  className,
  tabbable,
  ...props
}: DropdownProps & HTMLProps<HTMLElement>) {
  return (
    <nav className={className} {...props}>
      <ul>
        {information.navbarOptions.map(item =>
          item.route ? (
            <Link tabIndex={tabbable} to={item.route} key={item.id}>
              <li>{item.content}</li>
            </Link>
          ) : (
            <a key={item.id}>
              <li>{item.content}</li>
            </a>
          ),
        )}
      </ul>
    </nav>
  );
}
