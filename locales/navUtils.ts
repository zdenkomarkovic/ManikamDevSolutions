export type Locale = "sr" | "en";

export interface NavItem {
  title: string;
  route?: string;
  submenu?: Array<{ title: string; route: string }>;
}

const navTitles: Record<Locale, Record<string, string>> = {
  sr: {
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
  },
  en: {
    home: "Home",
    services: "Services",
    izrada: "Website development",
    webshop: "Webshop development",
    software: "Software development",
    seo: "SEO optimization",
    googleAds: "Google Ads",
    socialMedia: "Social Media",
    redesign: "Website Redesign",
    references: "References",
    contact: "Contact",
  },
};

const routes: Record<Locale, Record<string, string>> = {
  sr: {
    home: "/sr",
    izrada: "/sr/izrada-sajta",
    webshop: "/sr/izrada-web-shopa",
    software: "/sr/izrada-softvera",
    seo: "/sr/seo-optimizacija",
    googleAds: "/sr/google-oglasavanje",
    socialMedia: "/sr/drustvene-mreze",
    redesign: "/sr/redizajn-migracija",
    references: "/sr/#reference",
    contact: "/sr/contact",
  },
  en: {
    home: "/en",
    izrada: "/en/website-development",
    webshop: "/en/webshop-development",
    software: "/en/software-development",
    seo: "/en/seo-optimization",
    googleAds: "/en/google-ads",
    socialMedia: "/en/social-media",
    redesign: "/en/website-redesign",
    references: "/en/#reference",
    contact: "/en/contact",
  },
};

export function getNavList(locale: Locale): NavItem[] {
  if (!navTitles[locale] || !routes[locale]) {
    throw new Error(`Nepodržan locale: ${locale}`);
  }

  return [
    {
      title: navTitles[locale].home,
      route: routes[locale].home
    },
    {
      title: navTitles[locale].services,
      submenu: [
        { title: navTitles[locale].izrada, route: routes[locale].izrada },
        { title: navTitles[locale].webshop, route: routes[locale].webshop },
        { title: navTitles[locale].seo, route: routes[locale].seo },
        { title: navTitles[locale].googleAds, route: routes[locale].googleAds },
        { title: navTitles[locale].socialMedia, route: routes[locale].socialMedia },
        { title: navTitles[locale].software, route: routes[locale].software },
        { title: navTitles[locale].redesign, route: routes[locale].redesign },
      ],
    },
    {
      title: navTitles[locale].references,
      route: routes[locale].references
    },
    {
      title: navTitles[locale].contact,
      route: routes[locale].contact
    },
  ];
}
