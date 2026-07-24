import type { Locale } from "@/i18n-config";

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
    references: "/en#reference",
    contact: "/en/contact",
  },
};

export function getNavList(locale: Locale = "sr"): NavItem[] {
  const titles = navTitles[locale];
  const r = routes[locale];

  return [
    { title: titles.home, route: r.home },
    {
      title: titles.services,
      submenu: [
        { title: titles.izrada, route: r.izrada },
        { title: titles.webshop, route: r.webshop },
        { title: titles.seo, route: r.seo },
        { title: titles.googleAds, route: r.googleAds },
        { title: titles.socialMedia, route: r.socialMedia },
        { title: titles.software, route: r.software },
        { title: titles.redesign, route: r.redesign },
      ],
    },
    { title: titles.references, route: r.references },
    { title: titles.contact, route: r.contact },
  ];
}

// SR slug -> EN slug, used by the language switcher to jump to the
// equivalent page instead of always falling back to the homepage.
const srToEnSlug: Record<string, string> = {
  "izrada-sajta": "website-development",
  "izrada-web-shopa": "webshop-development",
  "izrada-softvera": "software-development",
  "seo-optimizacija": "seo-optimization",
  "google-oglasavanje": "google-ads",
  "drustvene-mreze": "social-media",
  "redizajn-migracija": "website-redesign",
  "marketing-paket": "marketing-package",
  contact: "contact",
};

const enToSrSlug: Record<string, string> = Object.fromEntries(
  Object.entries(srToEnSlug).map(([sr, en]) => [en, sr])
);

export function getLocalizedPath(pathname: string, targetLocale: Locale): string {
  const isEn = pathname === "/en" || pathname.startsWith("/en/");

  if (targetLocale === "en") {
    if (isEn) return pathname;
    if (pathname === "/") return "/en";
    const slug = pathname.replace(/^\//, "").split("#")[0];
    const enSlug = srToEnSlug[slug];
    return enSlug ? `/en/${enSlug}` : "/en";
  }

  if (!isEn) return pathname;
  if (pathname === "/en") return "/";
  const slug = pathname.replace(/^\/en\//, "").split("#")[0];
  const srSlug = enToSrSlug[slug];
  return srSlug ? `/${srSlug}` : "/";
}
