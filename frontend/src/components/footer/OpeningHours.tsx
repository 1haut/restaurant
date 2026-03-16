import { openingHours } from "../../utils/constants";

export default function Hours() {
  return (
    <>
      <div className="hours">
        <h3 className="headline">Åpningstider</h3>
        <ul>
          {openingHours.map((opening, index) =>
            opening.isOpen ? (
              <li key={index}>
                {opening.day}: {opening.openHour} - {opening.closeHour}
              </li>
            ) : (
              <li key={index}>{opening.day}: Stengt</li>
            ),
          )}
        </ul>
      </div>
    </>
  );
}
