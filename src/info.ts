interface NavbarItem {
  key: number;
  content: string;
  isButton: Boolean;
}

const navbarOptions: NavbarItem[] = [
  {
    key: 1,
    content: "Om",
    isButton: false,
  },
  {
    key: 2,
    content: "Kontakt",
    isButton: false,
  },
  {
    key: 3,
    content: "Meny",
    isButton: false,
  },
  {
    key: 4,
    content: "Catering",
    isButton: false,
  },
  {
    key: 5,
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
