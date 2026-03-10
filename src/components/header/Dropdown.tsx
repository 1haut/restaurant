import { type ComponentPropsWithoutRef } from "react";
import { Link } from "react-router";
import { information } from "../../utils/constants";

interface DropdownProps {
  tabbable: number;
}

export default function Dropdown({
  className,
  tabbable,
  ...props
}: DropdownProps & ComponentPropsWithoutRef<"nav">) {
  return (
    <nav className={className} {...props}>
      <ul>
        {information.navbarOptions.map(item =>
          item.route ? (
            <li key={item.id}>
              <Link tabIndex={tabbable} to={item.route} role="menuitem">
                {item.content}
              </Link>
            </li>
          ) : (
            <li key={item.id} role="menuitem">
              <a>{item.content}</a>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
