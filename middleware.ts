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

export function middleware(request: VercelRequest) {
  // Geo-blocking: Blokira korisnike iz Amerike samo sa 2 srpske stranice
  const country = request.geo?.country || "";
  const { pathname } = request.nextUrl;

  // Debug - ispisuje geo podatke
  console.log("GEO:", request.geo, "Country:", country, "Pathname:", pathname);

  const blockedPagesForUS = ["/izrada-sajta", "/izrada-web-shopa"];
  const isBlockedPage = blockedPagesForUS.some(page => pathname.includes(page));

  if (country === "US" && isBlockedPage) {
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
    // Jezik već postoji u putanji, samo nastavi
    nextLocale = pathLocale;
    response = NextResponse.next();
  } else {
    // Nema jezika u URL-u, automatski redirektuj na osnovu zemlje
    const country = request.geo?.country || "";

    let locale: string;
    // Ako je Srbija, koristi srpski
    if (country === "RS") {
      locale = "sr";
    }
    // Ako je Amerika, koristi engleski
    else if (country === "US") {
      locale = "en";
    }
    // Sve ostale zemlje - default
    else {
      locale = defaultLocale;
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
