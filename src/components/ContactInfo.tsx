import { information } from "../info";

const info = {
  gMaps: information.addressGoogleMaps,
  email: information.email,
  phone: information.phone.toString(),
};

export default function ContactInfo() {
  return (
    <div className="contact">
      <p className="phone">
        Telefon:{" "}
        <a href={"tel:+47" + info.phone}>
          +47 <span>{info.phone.replaceAll(/(..)/g, "$1 ")}</span>
        </a>
      </p>
      <p className="email">
        Epost: <a href={"mailto:" + info.email}> {info.email}</a>
      </p>
      <p className="address">
        Adresse: <a href={info.gMaps}>Fiskebryggen 12, 0150 Oslo</a>
      </p>
    </div>
  );
}
