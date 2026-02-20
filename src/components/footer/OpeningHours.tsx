import { openingHours } from "../../utils";
// import Headline from "./FooterSubHeadline";
// import { openingHours } from "../utils";

export default function Hours() {
  return (
    <>
      <div className="hours">
        {/* <Headline title="Åpningstider" className="headline" /> */}
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
