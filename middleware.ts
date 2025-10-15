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

  // WWW to non-WWW redirect (samo za obične korisnike, ne za botove)
  const hostname = request.headers.get("host") || "";
  if (hostname.startsWith("www.")) {
    const newUrl = new URL(request.url);
    newUrl.host = hostname.replace("www.", "");
    return NextResponse.redirect(newUrl, 301);
  }

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

  if (pathLocale) {
    // Jezik već postoji u putanji, samo nastavi
    nextLocale = pathLocale;
    response = NextResponse.next();
  } else {
    // Nema jezika u URL-u, automatski redirektuj na osnovu zemlje
    let locale: string;

    // Botovi uvek dobijaju englesku verziju (konzistentno)
    if (isBot) {
      locale = "en";
    } else {
      const country = request.geo?.country || "";
      // Ako je Amerika, koristi engleski
      if (country === "US") {
        locale = "en";
      }
      // Sve ostalo (uključujući Srbiju) - srpski
      else {
        locale = "sr";
      }
    }

    let newPath = `/${locale}${pathname}`;
    if (request.nextUrl.search) newPath += request.nextUrl.search;

    const url = basePath + newPath;

    response = NextResponse.redirect(new URL(url, request.url));
    nextLocale = locale;
  }

  if (nextLocale) {
    response.cookies.set("NEXT_LOCALE", nextLocale);
  }

  return response;
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|images/|favicon.ico|.*\\.svg$).*)",
};
