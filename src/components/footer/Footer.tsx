import Copyright from "./Copyright.tsx";
import InfoLinks from "./InfoLinks";
import OpeningHours from "./OpeningHours";
import ContactInfo from "./ContactInfo";
import FooterSocials from "./FooterSocial.tsx";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="info">
          <div className="socials">
            <h3 className="call-to-action">Følg oss gjerne!</h3>
            <FooterSocials />
          </div>
          <div className="footer-info-container">
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
