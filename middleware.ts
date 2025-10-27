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

  console.log("USER-AGENT:", userAgent);
  console.log("IS BOT:", isBot);

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

  // Prvo detektuj zemlju
  const country = request.geo?.country || "";

  console.log("🔍 MIDDLEWARE DEBUG:", {
    pathname,
    pathLocale,
    country: country || "NEMA GEO",
    cookie: request.cookies.get("NEXT_LOCALE")?.value,
  });

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
      console.log("→ BOT detektovan, engleski");
    }
    // Ako je Srbija, Bosna, Crna Gora, Makedonija - srpski
    else if (["RS", "BA", "ME", "MK"].includes(country)) {
      locale = "sr";
      console.log("→ BALKAN detektovan:", country);
    }
    // Ako je Amerika, UK, Nemačka, Francuska... - engleski
    else if (["US", "GB", "DE", "FR", "IT", "ES", "CA", "AU"].includes(country)) {
      locale = "en";
      console.log("→ ZAPAD detektovan:", country);
    }
    // Sve ostale zemlje ili ako geo ne radi - SRPSKI (default)
    else {
      locale = "sr";
      console.log("→ NEMA GEO ili nepoznata zemlja - koristim SRPSKI");
    }

    let newPath = `/${locale}${pathname}`;
    if (request.nextUrl.search) newPath += request.nextUrl.search;

    const url = basePath + newPath;

    console.log("→ REDIREKCIJA:", pathname, "→", newPath);
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
