import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import { i18n } from "./i18n-config";
import type { I18nConfig } from "./i18n-config";

// Proširenje NextRequest tipa za Vercel geo podatke
interface VercelRequest extends NextRequest {
  geo?: {
    city?: string;
    country?: string;
    region?: string;
    latitude?: string;
    longitude?: string;
  };
}

function getLocale(request: NextRequest, i18nConfig: I18nConfig): string {
  const { locales, defaultLocale } = i18nConfig;

  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales.slice() // ← kopija kao `string[]`
  );

  return match(languages, locales, defaultLocale);
}

// Funkcija za detekciju SEO botova
function isCrawlerBot(userAgent: string): boolean {
  const botPatterns = [
    'googlebot',
    'bingbot',
    'slurp', // Yahoo
    'duckduckbot',
    'baiduspider',
    'yandexbot',
    'facebookexternalhit',
    'twitterbot',
    'rogerbot',
    'linkedinbot',
    'embedly',
    'quora link preview',
    'showyoubot',
    'outbrain',
    'pinterest',
    'slackbot',
    'vkshare',
    'w3c_validator',
    'redditbot',
    'applebot',
    'whatsapp',
    'flipboard',
    'tumblr',
    'bitlybot',
    'skypeuripreview',
    'nuzzel',
    'discordbot',
    'qwantify',
    'pinterestbot',
    'bitrix',
    'seobility', // SEO alat
    'screaming frog', // SEO alat
    'semrush', // SEO alat
    'ahrefs', // SEO alat
    'moz', // SEO alat
  ];

  const lowerUA = userAgent.toLowerCase();
  return botPatterns.some(pattern => lowerUA.includes(pattern));
}

export function middleware(request: VercelRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const isBot = isCrawlerBot(userAgent);

  // Geo-blocking: PRIVREMENO DEAKTIVIRANO ZA TESTIRANJE
  // const country = request.geo?.country || "";
  const { pathname } = request.nextUrl;

  // Debug - ispisuje geo podatke
  // console.log("GEO:", request.geo, "Country:", country, "Pathname:", pathname);

  // Blokira samo /sr/izrada-sajta i /sr/izrada-web-shopa
  // const blockedPagesForUS = ["/sr/izrada-sajta", "/sr/izrada-web-shopa"];
  // const isBlockedPage = blockedPagesForUS.some(page => pathname.startsWith(page));

  // if (country === "US" && isBlockedPage) {
  //   // Redirektuj na englesku verziju iste stranice
  //   const pageMapping: Record<string, string> = {
  //     "/sr/izrada-sajta": "/en/website-development",
  //     "/sr/izrada-web-shopa": "/en/webshop-development",
  //   };

  //   const redirectUrl = pageMapping[pathname] || "/en";
  //   return NextResponse.redirect(new URL(redirectUrl, request.url));
  // }

  let response: NextResponse | undefined;
  let nextLocale: string | undefined;

  const { locales, defaultLocale } = i18n;

  const { basePath } = request.nextUrl;

  const pathLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Geo detekcija
  const country = request.geo?.country || "";
  const serbianSpeakingCountries = ["RS", "BA", "ME", "MK"];

  // DEBUG
  console.log("🌍 GEO DEBUG:", {
    country,
    pathname,
    pathLocale,
  });

  // FORSIRAJ SRPSKI za balkanske zemlje - bez obzira na cookie ili browser
  const shouldForceSerbianLocale = !isBot && country && serbianSpeakingCountries.includes(country);

  if (shouldForceSerbianLocale) {
    console.log("🇷🇸 FORSIRAM SRPSKI za region:", country);

    // Ako već ima /sr u putanji, pusti ga
    if (pathLocale === "sr") {
      nextLocale = "sr";
      response = NextResponse.next();
    }
    // Ako ima /en ili bilo koji drugi jezik, redirektuj na /sr
    else if (pathLocale === "en") {
      const newPath = pathname.replace(/^\/en(\/|$)/, "/sr$1");
      console.log("🔄 Redirekcija:", pathname, "→", newPath);
      response = NextResponse.redirect(new URL(newPath, request.url));
      nextLocale = "sr";
    }
    // Ako nema jezika u putanji, dodaj /sr
    else {
      const newPath = `/sr${pathname}`;
      response = NextResponse.redirect(new URL(newPath, request.url));
      nextLocale = "sr";
    }
  }
  // Ostali korisnici (ne balkanski) - koristi browser ili default
  else {
    if (pathLocale) {
      nextLocale = pathLocale;
      response = NextResponse.next();
    } else {
      // Nema jezika u URL-u - koristi browser ili default
      let locale: string;

      if (isBot) {
        locale = "en";
      } else if (!country) {
        locale = getLocale(request, i18n);
        console.log("⚠️ Geo N/A, koristim browser:", locale);
      } else {
        locale = "en";
        console.log("🌐 Region van Balkana:", country);
      }

      const newPath = `/${locale}${pathname}`;
      response = NextResponse.redirect(new URL(newPath, request.url));
      nextLocale = locale;
    }
  }

  if (nextLocale) {
    response.cookies.set("NEXT_LOCALE", nextLocale);
  }

  return response;
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|images/|favicon.ico|.*\\.svg$|.*\\.webmanifest$|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.ico$|.*\\.xml$|.*\\.txt$).*)",
};
