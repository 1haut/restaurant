import type {
  Hours,
  NavbarItem,
  Menu,
  Table,
  CourseNames,
  Review,
  SocialMedia,
} from "../types/types";

import FacebookIcon from "../assets/icons/facebook-icon.svg";
import InstagramIcon from "../assets/icons/instagram-icon.svg";
import TwitterIcon from "../assets/icons/twitter-icon.svg";
import TiktokIcon from "../assets/icons/tiktok-icon.svg";

export const urlPrefix = "https://www.";

export const dateFormatOptions = {
  weekday: "short",
  // year: "numeric",
  month: "long",
  day: "numeric",
} as const;

export const openingHours: Hours[] = [
  {
    day: "Mandag",
    openHour: 12,
    closeHour: 21,
    isOpen: true,
  },
  {
    day: "Tirsdag",
    openHour: 12,
    closeHour: 21,
    isOpen: true,
  },
  {
    day: "Onsdag",
    openHour: 12,
    closeHour: 21,
    isOpen: true,
  },
  {
    day: "Torsdag",
    openHour: 12,
    closeHour: 21,
    isOpen: true,
  },
  {
    day: "Fredag",
    openHour: 12,
    closeHour: 23,
    isOpen: true,
  },
  {
    day: "Lørdag",
    openHour: 14,
    closeHour: 23,
    isOpen: true,
  },
  {
    day: "Søndag",
    isOpen: false,
  },
];

export const navbarOptions: NavbarItem[] = [
  {
    id: 1,
    content: "Hjem",
    route: "/",
  },
  {
    id: 2,
    content: "Kontakt",
    route: "/contact",
  },
  {
    id: 3,
    content: "Meny",
    route: "/menu",
  },
  {
    id: 4,
    content: "Catering",
    route: "/contact",
  },
  {
    id: 5,
    content: "Bestill",
    route: "/order",
  },
  {
    id: 6,
    content: "Reserver bord!",
    route: "/booking",
  },
];

export const information = {
  email: "kontakt@havetsskatter.no",
  phone: 12345678,
  addressGoogleMaps:
    "https://www.google.com/maps/place/0150+Oslo/@59.8927133,10.6739282,13z/data=!3m1!4b1!4m6!3m5!1s0x46416bb52938958f:0x451b9d4daaf1fb40!8m2!3d59.8852007!4d10.7202977!16s%2Fm%2F02tchmd?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D",
  navbarOptions: navbarOptions,
};

export const reviews: Review[] = [
  {
    id: 1,
    content:
      "Fantastisk sjømat til en veldig hyggelig pris. Fisken var tydelig fersk og perfekt tilberedt, og smakene var rene og balanserte. Servicen var også veldig hyggelig og uformell. Et sted jeg definitivt kommer tilbake til.",
    name: "Selma Sundt (selverklært foodie)",
  },
  {
    id: 2,
    content:
      "En av de beste sjømatopplevelsene jeg har hatt på lenge. Maten holder høy kvalitet, porsjonene er gode, og prisene er overraskende moderate. Restauranten har en avslappet og koselig atmosfære som gjør det lett å trives.",
    name: "Ettermiddagsposten",
  },
  {
    id: 3,
    content:
      "En av de beste sjømatopplevelsene jeg har hatt på lenge. Maten holder høy kvalitet, porsjonene er gode, og prisene er overraskende moderate. Restauranten har en avslappet og koselig atmosfære som gjør det lett å trives.",
    name: "Odin fra TripMentor",
  },
];

export const menu: Menu = {
  starters: [
    {
      id: 1,
      name: "Blåskjell i hvitvinssaus",
      description:
        "Dampende blåskjell i en kremet hvitvinssaus, servert med ferskt brød",
      price: 129,
      allergies: ["bløtdyr", "melk", "hvete"],
    },
    {
      id: 2,
      name: "Røkt laks på rugbrød",
      description:
        "Fersk røkt laks på sprøtt rugbrød, servert med dill, sitron og kapers.",
      price: 115,
      allergies: ["fisk", "hvete"],
    },
    {
      id: 3,
      name: "Scampi med hvitløk og chili",
      description:
        "Grillet scampi i en blanding av hvitløk og chili, servert med lime og koriander.",
      price: 139,
      allergies: ["skalldyr"],
    },
  ],
  mains: [
    {
      id: 1,
      name: "Grillet laks med urtesmør",
      description:
        "Saftig grillet laks servert med potetpuré, asparges og en smørsaus med friske urter.",
      price: 245,
      allergies: ["fisk", "melk"],
    },
    {
      id: 2,
      name: "Hummer Thermidor",
      description:
        "Gratinerte hummerhaler med en kremet sopp- og sennepssaus, servert med grønnsaker og ris.",
      price: 379,
      allergies: ["skalldyr", "melk", "egg", "sennep"],
    },
    {
      id: 3,
      name: "Stekt torsk med ertepuré",
      description:
        "Panert torsk servert med smørdampede grønnsaker, ertepuré og mandelpoteter.",
      price: 265,
      allergies: ["fisk", "melk", "hvete"],
    },
    {
      id: 4,
      name: "Fiskesuppe med safran",
      description:
        "Kremet fiskesuppe med fersk torsk, laks, blåskjell og safran, servert med brød.",
      price: 210,
      allergies: ["fisk", "melk", "bløtdyr", "hvete"],
    },
  ],
  desserts: [
    {
      id: 1,
      name: "Sitronterte med marengs",
      description: "Syrlig sitronterte med sprø bunn og fløyelsmyk marengs.",
      price: 95,
      allergies: ["egg", "hvete", "melk"],
    },
    {
      id: 2,
      name: "Sjokolademousse med havsalt",
      description:
        "Fyldig sjokolademousse toppet med et hint av havsalt og friske bær.",
      price: 105,
      allergies: ["melk", "egg"],
    },
    {
      id: 3,
      name: "Crème Brûlée med vanilje",
      description:
        "Klassisk crème brûlée med en knasende karamellisert topp og ekte vaniljesmak.",
      price: 115,
      allergies: ["egg", "melk"],
    },
  ],
};

export const tables: Table[] = [
  {
    label: "B1",
    location: "window-row",
    maxSeats: 4,
  },
  {
    label: "B2",
    location: "window-row",
    maxSeats: 4,
  },
  {
    label: "B3",
    location: "window-row",
    maxSeats: 4,
  },
  {
    label: "B4",
    location: "mid-row",
    maxSeats: 4,
  },
  {
    label: "B5",
    location: "mid-row",
    maxSeats: 4,
  },
  {
    label: "B6",
    location: "mid-row",
    maxSeats: 4,
  },
  {
    label: "T1",
    location: "two-seater",
    maxSeats: 2,
  },
  {
    label: "T2",
    location: "two-seater",
    maxSeats: 2,
  },
  {
    label: "T3",
    location: "two-seater",
    maxSeats: 2,
  },
  {
    label: "T4",
    location: "two-seater",
    maxSeats: 2,
  },
  {
    label: "T5",
    location: "two-seater",
    maxSeats: 2,
  },
  {
    label: "T6",
    location: "two-seater",
    maxSeats: 2,
  },
  {
    label: "B7",
    location: "big-table",
    maxSeats: 8,
  },
];

export const coursesNames: CourseNames[] = [
  { name: "starters", nameNo: "Forrretter" },
  { name: "mains", nameNo: "Hovedretter" },
  { name: "desserts", nameNo: "Desserter" },
];

export const socialMedia: SocialMedia = {
  facebook: {
    url: "facebook.com",
    iconPath: FacebookIcon,
  },
  instagram: {
    url: "instagram.com",
    iconPath: InstagramIcon,
  },
  twitter: {
    url: "twitter.com",
    iconPath: TwitterIcon,
  },
  tiktok: {
    url: "tiktok.com",
    iconPath: TiktokIcon,
  },
};

export const aboutText: string = `En sjømatrestaurant skal først og fremst levere smaker fra havet som er friske, rene og ekte. Hos oss står kvalitet i sentrum i alt vi gjør. Vi velger råvarer med omhu, samarbeider med pålitelige leverandører og tilbereder maten med respekt for både tradisjon og gode håndverksteknikker. Resultatet er retter der den naturlige smaken av sjømat får stå i fokus – fra saftige fiskefileter til delikate skalldyr.

Vår filosofi er enkel: ekte råvarer, gode smaker og en opplevelse som føles både kvalitetsrik og tilgjengelig. Vi ønsker å være et sted der gjestene alltid kan stole på at de får fersk sjømat, gode porsjoner og ekte verdi for pengene. Velkommen til oss – vi gleder oss til å servere deg det beste havet har å by på.`;
