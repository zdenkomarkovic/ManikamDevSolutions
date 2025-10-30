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

export function middleware(request: VercelRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const isBot = isCrawlerBot(userAgent);

  const { pathname } = request.nextUrl;

  // Prvo detektuj zemlju
  const country = request.geo?.country || "";

  // DEBUG: Log za proveru geo detekcije
  console.log('🌍 Middleware Debug:', {
    pathname,
    country: country || 'NO GEO DATA',
    isBot,
    userAgent: userAgent.substring(0, 50)
  });

  // Geo-ograničenje za srpske stranice van Srbije, Bosne, Crne Gore i Makedonije
  // Dozvoljene zemlje za srpski puni sadržaj
  const allowedCountriesForSerbianContent = ["RS", "BA", "ME", "MK"];

  // Proveri da li je BILO KOJA srpska stranica (uključujući početnu)
  const isSerbianPage = pathname.startsWith("/sr/") || pathname === "/sr";

  // Blokiraj pristup CELOJ srpskoj verziji ako geo detektuje drugu zemlju
  // Botovi nisu blokirani (za SEO)
  const isFromOtherCountry = country && !allowedCountriesForSerbianContent.includes(country);

  if (!isBot && isSerbianPage && isFromOtherCountry) {
    console.log('🚫 Blocking ALL Serbian pages for country:', country);
    // Redirektuj na englesku verziju
    return NextResponse.redirect(new URL("/en", request.url));
  }

  let response: NextResponse | undefined;
  let nextLocale: string | undefined;

  const { locales, defaultLocale } = i18n;

  const { basePath } = request.nextUrl;

  const pathLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathLocale) {
    // Jezik već postoji u putanji
    nextLocale = pathLocale;

    // GEO ZAŠTITA: Samo ako geo RADI i detektuje drugu zemlju → blokiraj /sr
    const isFromOtherCountry = country && !allowedCountriesForSerbianContent.includes(country);

    if (pathLocale === "sr" && !isBot && isFromOtherCountry) {
      console.log('🚫 Blocking Serbian for country:', country, '→ Redirecting to /en');

      // Zameni /sr sa /en u putanji
      const newPath = pathname.replace(/^\/sr(\/|$)/, '/en$1') + (request.nextUrl.search || '');
      response = NextResponse.redirect(new URL(newPath, request.url));
      nextLocale = "en";
    } else {
      response = NextResponse.next();
    }
  } else {
    // Nema jezika u URL-u, automatski redirektuj na osnovu zemlje
    let locale: string;

    // Botovi uvek engleski
    if (isBot) {
      locale = "en";
    }
    // Ako geo RADI (country postoji)
    else if (country) {
      // Proveri da li je iz dozvoljenog regiona
      if (["RS", "BA", "ME", "MK"].includes(country)) {
        locale = "sr"; // Region → srpski
      } else {
        locale = "en"; // Ostale zemlje → engleski (ignoriše browser!)
      }
    }
    // Ako geo NE radi (development) - SRPSKI kao default
    else {
      locale = "sr";
    }

    console.log('🎯 Selected locale:', locale, 'for country:', country || 'NO GEO');

    let newPath = `/${locale}${pathname}`;
    if (request.nextUrl.search) newPath += request.nextUrl.search;

    const url = basePath + newPath;

    response = NextResponse.redirect(new URL(url, request.url));
    nextLocale = locale;
  }

  if (nextLocale && response) {
    // Proveri da li treba obrisati srpski cookie samo ako geo RADI i detektuje drugu zemlju
    const currentCookie = request.cookies.get("NEXT_LOCALE")?.value;
    const isFromOtherCountry = country && !allowedCountriesForSerbianContent.includes(country);

    // Ako korisnik ima srpski cookie ALI geo detektuje drugu zemlju → obriši ga i postavi engleski
    if (currentCookie === "sr" && !isBot && isFromOtherCountry) {
      console.log('🍪 Deleting Serbian cookie for country:', country);
      response.cookies.delete("NEXT_LOCALE");
      nextLocale = "en"; // Forsira engleski
    }

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
