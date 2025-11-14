import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import { i18n } from "./i18n-config";
import type { I18nConfig } from "./i18n-config";

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
  const lowerUA = userAgent.toLowerCase();

  // Prvo proveri da li je normalan browser
  const browserPatterns = ['mozilla', 'chrome', 'safari', 'firefox', 'edge', 'opera'];
  const isBrowser = browserPatterns.some(pattern => lowerUA.includes(pattern));

  // Ako je browser, NIJE bot (čak i ako sadrži "bot" negde)
  if (isBrowser) {
    return false;
  }

  // Samo ako nije browser, proveri da li je bot
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
    'seobility', // SEO alat
    'screaming frog', // SEO alat
    'semrush', // SEO alat
    'ahrefs', // SEO alat
    'moz', // SEO alat
  ];

  return botPatterns.some(pattern => lowerUA.includes(pattern));
}

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const isBot = isCrawlerBot(userAgent);

  const { pathname } = request.nextUrl;

  // Prvo detektuj zemlju - Next.js 15 koristi headers
  const country = request.headers.get('x-vercel-ip-country') || "";

  // DEBUG: Log za proveru geo detekcije
  console.log('🌍 Middleware Debug:', {
    pathname,
    country: country || 'NO GEO DATA',
    'x-vercel-ip-country': request.headers.get('x-vercel-ip-country') || 'NO HEADER',
    isBot,
    userAgent: userAgent.substring(0, 50)
  });

  // Dozvoljene zemlje za srpski sadržaj
  const allowedCountriesForSerbianContent = ["RS", "BA", "ME", "MK"];

  // PRIORITET 1: Blokiranje srpskog jezika za korisnike van regiona
  // Proveri da li je korisnik iz druge zemlje ILI nema geo podataka (bezbedonosni fallback)
  const isFromAllowedCountry = country && allowedCountriesForSerbianContent.includes(country);
  const shouldBlockSerbian = !isBot && !isFromAllowedCountry;

  if (shouldBlockSerbian) {
    const reason = country ? `from ${country}` : 'no geo data (blocking Serbian for safety)';
    console.log('⚠️ User', reason, '- forcing English only!');

    // Proveri da li ima srpski cookie i obriši ga
    const currentCookie = request.cookies.get("NEXT_LOCALE")?.value;
    if (currentCookie === "sr") {
      console.log('🍪 Deleting Serbian cookie:', reason);
    }

    // Proveri da li je BILO KOJA srpska stranica (uključujući početnu)
    const isSerbianPage = pathname.startsWith("/sr/") || pathname === "/sr" || pathname.startsWith("/sr?");

    if (isSerbianPage) {
      console.log('🚫 Blocking Serbian page → Redirecting to /en');
      // Zameni /sr sa /en
      const newPath = pathname.replace(/^\/sr(\/|$|\?)/, '/en$1') + (request.nextUrl.search || '');
      const response = NextResponse.redirect(new URL(newPath, request.url));

      // Obriši srpski cookie i postavi engleski
      response.cookies.delete("NEXT_LOCALE");
      response.cookies.set("NEXT_LOCALE", "en", {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });

      return response;
    }
  }

  let response: NextResponse | undefined;
  let nextLocale: string | undefined;

  const { locales, defaultLocale } = i18n;

  const { basePath } = request.nextUrl;

  const pathLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathLocale) {
    // Jezik već postoji u putanji, samo nastavi
    nextLocale = pathLocale;
    response = NextResponse.next();
  } else {
    // Nema jezika u URL-u, automatski redirektuj na osnovu zemlje
    let locale: string;

    // Botovi vide srpsku verziju kao default (za SEO)
    if (isBot) {
      locale = "sr";
    }
    // Ako geo RADI (country postoji)
    else if (country) {
      // Proveri da li je iz dozvoljenog regiona
      if (allowedCountriesForSerbianContent.includes(country)) {
        locale = "sr"; // Region (RS, BA, ME, MK) → srpski
      } else {
        locale = "en"; // Ostale zemlje → engleski (ignoriše browser!)
      }
    }
    // BEZBEDONOSNI FALLBACK: Ako geo NE radi → Engleski za sve korisnike
    // (Samo korisnici iz RS/BA/ME/MK treba da vide srpski)
    else {
      locale = "en";
      console.log('⚠️ No geo data available - defaulting to English for safety');
    }

    console.log('🎯 Selected locale:', locale, 'for country:', country || 'NO GEO');

    let newPath = `/${locale}${pathname}`;
    if (request.nextUrl.search) newPath += request.nextUrl.search;

    const url = basePath + newPath;

    response = NextResponse.redirect(new URL(url, request.url));
    nextLocale = locale;
  }

  if (nextLocale && response) {
    response.cookies.set("NEXT_LOCALE", nextLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 godina
    });
  }

  return response;
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|images/|favicon.ico|.*\\.svg$|.*\\.webmanifest$|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.ico$|.*\\.xml$|.*\\.txt$).*)",
};
