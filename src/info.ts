interface NavbarItem {
  id: number;
  content: string;
  isButton: Boolean;
}

const navbarOptions: NavbarItem[] = [
  {
    id: 1,
    content: "Om",
    isButton: false,
  },
  {
    id: 2,
    content: "Kontakt",
    isButton: false,
  },
  {
    id: 3,
    content: "Meny",
    isButton: false,
  },
  {
    id: 4,
    content: "Catering",
    isButton: false,
  },
  {
    id: 5,
    content: "Reserver bord!",
    isButton: true,
  },
];

export const information = {
  urlPrefix: "https://www.",
  email: "kontakt@havetsskatter.no",
  phone: 12345678,
  addressGoogleMaps:
    "https://www.google.com/maps/place/0150+Oslo/@59.8927133,10.6739282,13z/data=!3m1!4b1!4m6!3m5!1s0x46416bb52938958f:0x451b9d4daaf1fb40!8m2!3d59.8852007!4d10.7202977!16s%2Fm%2F02tchmd?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D",
  navbarOptions: navbarOptions,
};

export const reviews = [
  {
    id: 1,
    content:
      "Slike tekster hjelper med å teste flyt, linjebruk og inntrykk. Et design uten tekst føles ofte tomt – dette fyller det rommet. Slike tekster hjelper med å teste flyt linjebruk og inntrykk.",
    name: "Review 1",
  },
  {
    id: 2,
    content:
      "Ingen setning her har en klar betydning, men det ser ut som ekte språk. Innholdet skal fylle plass, men ikke distrahere. Vi setter ord på skjermen, men ikke innhold i tankene.",
    name: "Review 2",
  },
  {
    id: 3,
    content:
      "Vi setter ord på skjermen, men ikke innhold i tankene. Ingen setning her har en klar betydning, men det ser ut som ekte språk. Slike tekster hjelper med å teste flyt, linjebruk og inntrykk.",
    name: "Review 3",
  },
];