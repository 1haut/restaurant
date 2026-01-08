
import { information } from "../info";

export default function Dropdown() {
  return (
    <nav className="dropdown">
      <ul>
        {information.navbarOptions.map(item => (
          <li key={item.key}>{item.content}</li>
        ))}
      </ul>
    </nav>
  );
}
