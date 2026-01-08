import { information } from "../info";

const addressGMaps = information.addressGoogleMaps;
const addressEmail = information.email;
const phoneNumber = "12345678".replaceAll(/(..)/g, "$1 ");
const num = information.phone.toString().replaceAll(/(..)/g, "$1 ");

export default function ContactInfo() {
  return (
    <div className="contact">
      <p className="phone">
        Telefon: +47 <span>{phoneNumber}</span>
      </p>
      <p className="email">
        Epost: <a href={"mailto:" + addressEmail}> {addressEmail}</a>
      </p>
      <p className="address">
        Adresse: <a href={addressGMaps}>Fiskebryggen 12, 0150 Oslo</a>
      </p>
    </div>
  );
}
