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

  // Geo-ograničenje za srpske stranice van Srbije, Bosne, Crne Gore i Makedonije
  // Dozvoljene zemlje za srpski puni sadržaj
  const allowedCountriesForSerbianContent = ["RS", "BA", "ME", "MK"];

  // Proveri da li je srpska podstranica (ali ne i početna)
  // Početna je: /sr ili /sr/
  // Podstranica je: /sr/bilo-sta (izrada-sajta, contact, itd.)
  const isSerbianHomepage = pathname === "/sr" || pathname === "/sr/";
  const isSerbianPage = pathname.startsWith("/sr/") || pathname === "/sr";
  const isSerbianSubpage = isSerbianPage && !isSerbianHomepage;

  // Blokiraj pristup srpskim podstranicama van dozvoljenih zemalja
  // Ali samo ako geo radi (country postoji)
  // Botovi nisu blokirani (za SEO)
  if (!isBot && country && isSerbianSubpage && !allowedCountriesForSerbianContent.includes(country)) {
    // Redirektuj na početnu srpsku stranicu
    return NextResponse.redirect(new URL("/sr", request.url));
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

    // Botovi uvek engleski
    if (isBot) {
      locale = "en";
    }
    // Ako geo radi I ako je Srbija, Bosna, Crna Gora, Makedonija - srpski
    else if (country && ["RS", "BA", "ME", "MK"].includes(country)) {
      locale = "sr";
    }
    // Svi ostali (poznata druga zemlja ILI geo ne radi) - koristi browser language kao fallback
    else {
      // Prvo probaj browser language
      const browserLocale = getLocale(request, i18n);

      // Ako je browser srpski ALI geo detektuje drugu zemlju → forsira engleski
      // Ako geo NE radi (country je prazan) → dozvoli browser language
      if (browserLocale === "sr" && country && !["RS", "BA", "ME", "MK"].includes(country)) {
        locale = "en"; // Forsira engleski za srpski browser van regiona
      } else {
        locale = browserLocale;
      }
    }

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
