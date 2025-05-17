export type Locale = "sr" | "en";

const navTitles: Record<Locale, Record<string, string>> = {
  sr: {
    home: "Naslovna",
    services: "Usluge",
    references: "Reference",
    contact: "Kontakt",
  },
  en: {
    home: "Home",
    services: "Services",
    references: "References",
    contact: "Contact",
  },
};

const routes: Record<Locale, Record<string, string>> = {
  sr: {
    home: "/sr",
    services: "/sr/services",
    references: "/sr/#reference",
    contact: "/sr/contact",
  },
  en: {
    home: "/en",
    services: "/en/services",
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
    { title: navTitles[locale].services, route: routes[locale].services },
    { title: navTitles[locale].references, route: routes[locale].references },
    { title: navTitles[locale].contact, route: routes[locale].contact },
  ];
}
