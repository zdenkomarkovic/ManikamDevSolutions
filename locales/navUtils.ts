export type Locale = "sr" | "en";

const navTitles: Record<Locale, Record<string, string>> = {
  sr: {
    home: "Naslovna",
    izrada: "Izrada sajta",
    webshop: "Izrada web shopa",
    webshop: "Izrada web shopa",
    references: "Reference",
    contact: "Kontakt",
  },
  en: {
    home: "Home",
    izrada: "Website development",
    webshop: "Webshop development",
    webshop: "Webshop development",
    references: "References",
    contact: "Contact",
  },
};

const routes: Record<Locale, Record<string, string>> = {
  sr: {
    home: "/sr",
    izrada: "/sr/izrada-sajta",
    webshop: "/sr/izrada-web-shopa",
    webshop: "/sr/izrada-web-shopa",
    references: "/sr/#reference",
    contact: "/sr/contact",
  },
  en: {
    home: "/en",
    izrada: "/en/website-development",
    webshop: "/en/webshop-development",
    webshop: "/en/webshop-development",
    references: "/en/#reference",
    contact: "/en/contact",
  },
};

export function getNavList(locale: Locale) {
  if (!navTitles[locale] || !routes[locale]) {
    throw new Error(`Nepodržan locale: ${locale}`);
  }

  return [
    { title: navTitles[locale].home, route: routes[locale].home },
    { title: navTitles[locale].izrada, route: routes[locale].izrada },
    { title: navTitles[locale].webshop, route: routes[locale].webshop },
    { title: navTitles[locale].webshop, route: routes[locale].webshop },
    { title: navTitles[locale].references, route: routes[locale].references },
    { title: navTitles[locale].contact, route: routes[locale].contact },
  ];
}
