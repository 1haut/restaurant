import { information } from "../info";

const info = {
  gMaps: information.addressGoogleMaps,
  email: information.email,
  phone: information.phone.toString().replaceAll(/(..)/g, "$1 ")
}

export default function ContactInfo() {
  return (
    <div className="contact">
      <p className="phone">
        Telefon: +47
        <span>{info.phone}</span>
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
