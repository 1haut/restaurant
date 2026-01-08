import Headline from "./FooterSubHeadline";

export default function Hours() {
  return (
    <>
      <div className="hours">
        <Headline content="Åpningstider" className="headline" />
        <ul>
          <li>Mandag: 12-21</li>
          <li>Tirsdag: 12-21</li>
          <li>Onsdag: 12-21</li>
          <li>Torsdag: 12-21</li>
          <li>Fredag: 12-23</li>
          <li>Lørdag: 14-23</li>
          <li>Søndag: Stengt</li>
        </ul>
      </div>
    </>
  );
}