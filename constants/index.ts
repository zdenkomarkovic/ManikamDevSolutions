export const NavList = [
  {
    title: "Naslovna",
    route: "/",
  },
  {
    title: "O nama",
    route: "/about",
  },
  {
    title: "Usluge",
    route: "/services",
    hasDropdown: true,
    dropdownItems: [
      { title: "Izrada sajtova", route: "/services/#website" },
      { title: "Izrada webshopova", route: "/services/#webshop" },
      { title: "Odrzavanje", route: "/services/#maintaince" },
      { title: "SEO Optimizacija", route: "/services/#seo" },
    ],
  },
  {
    title: "Kontakt",
    route: "/contact",
  },
];
