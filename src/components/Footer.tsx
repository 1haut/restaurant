import Copyright from "./Copyright";
import FooterSocials from "./FooterSocial";
import InfoLinks from "./InfoLinks";
import OpeningHours from "./OpeningHours"
import ContactInfo from "./ContactInfo";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="info">
          <FooterSocials />
          <div className="container">
            <OpeningHours />
            <ContactInfo />
          </div>
          <InfoLinks />
        </div>
        <Copyright />
      </footer>
    </>
  );
}
