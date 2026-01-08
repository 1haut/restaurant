import Headline from "./FooterSubHeadline";

export default function InfoLinks() {
  return (
    <div className="links">
      <Headline content="Linker" />
      <ul className="links-list">
        <li>Policy</li>
        <li>Katering</li>
        <li>Reservering</li>
      </ul>
    </div>
  );
}
