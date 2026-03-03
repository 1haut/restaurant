import type { HTMLProps } from "react";
import { Link } from "react-router";
import { information } from "../../utils/constants";

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
            <li key={item.id}>
              <Link tabIndex={tabbable} to={item.route}>
                {item.content}
              </Link>
            </li>
          ) : (
            <li key={item.id}>
              <a>{item.content}</a>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
