export interface NavItem {
  title: string;
  route?: string;
  submenu?: Array<{ title: string; route: string }>;
}

const navTitles = {
  home: "Naslovna",
  services: "Usluge",
  izrada: "Izrada sajta",
  webshop: "Izrada web shopa",
  software: "Izrada softvera",
  seo: "SEO optimizacija",
  googleAds: "Google oglašavanje",
  socialMedia: "Društvene mreže",
  redesign: "Redizajn i Migracija",
  references: "Reference",
  contact: "Kontakt",
};

const routes = {
  home: "/",
  izrada: "/izrada-sajta",
  webshop: "/izrada-web-shopa",
  software: "/izrada-softvera",
  seo: "/seo-optimizacija",
  googleAds: "/google-oglasavanje",
  socialMedia: "/drustvene-mreze",
  redesign: "/redizajn-migracija",
  references: "/#reference",
  contact: "/contact",
};

export function getNavList(): NavItem[] {
  return [
    { title: navTitles.home, route: routes.home },
    {
      title: navTitles.services,
      submenu: [
        { title: navTitles.izrada, route: routes.izrada },
        { title: navTitles.webshop, route: routes.webshop },
        { title: navTitles.seo, route: routes.seo },
        { title: navTitles.googleAds, route: routes.googleAds },
        { title: navTitles.socialMedia, route: routes.socialMedia },
        { title: navTitles.software, route: routes.software },
        { title: navTitles.redesign, route: routes.redesign },
      ],
    },
    { title: navTitles.references, route: routes.references },
    { title: navTitles.contact, route: routes.contact },
  ];
}
