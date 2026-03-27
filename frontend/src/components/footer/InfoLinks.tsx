import { linksArray } from "../../utils/constants";
import { capitalize } from "../../utils/utils";

export default function InfoLinks() {
  return (
    <div className="links">
      <h3>Linker</h3>
      <ul className="links-list">
        {linksArray.map((item, idx) => (
          <li key={idx}>
            <a href={item.href}>{capitalize(item.value)}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
