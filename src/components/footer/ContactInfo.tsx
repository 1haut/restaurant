import { information } from "../../info";


export default function ContactInfo() {
  return (
    <div className="contact">
      <p className="phone">
        Telefon:{" "}
        <a href={"tel:+47" + information.phone.toString()}>
          +47 <span>{information.phone.toString().replaceAll(/(..)/g, "$1 ")}</span>
        </a>
      </p>
      <p className="email">
        Epost: <a href={"mailto:" + information.email}> {information.email}</a>
      </p>
      <p className="address">
        Adresse: <a href={information.addressGoogleMaps}>Fiskebryggen 12, 0150 Oslo</a>
      </p>
    </div>
  );
}
