import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Mapiranje engleskih slugova na srpske (za redirect starih /en/ linkova)
const enToSrSlugMap: Record<string, string> = {
  "website-redesign": "redizajn-migracija",
  "google-ads": "google-oglasavanje",
  "website-development": "izrada-sajta",
  "webshop-development": "izrada-web-shopa",
  "seo-optimization": "seo-optimizacija",
  "social-media": "drustvene-mreze",
  "software-development": "izrada-softvera",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect sve /en/* putanje na /sr/* (sa mapiranjem slugova)
  if (pathname.startsWith("/en")) {
    const afterEn = pathname.slice(3); // npr. "/website-development" ili ""
    const slug = afterEn.replace(/^\//, ""); // ukloni leading slash
    const srSlug = enToSrSlugMap[slug] ?? slug;
    const newPath = srSlug ? `/sr/${srSlug}` : "/sr";
    return NextResponse.redirect(new URL(newPath, request.url), 301);
  }

  // Ako nema locale-a u URL-u, redirektuj na /sr
  const hasLocale = pathname.startsWith("/sr/") || pathname === "/sr";
  if (!hasLocale) {
    const newPath = `/sr${pathname}`;
    const response = NextResponse.redirect(new URL(newPath, request.url));
    response.cookies.set("NEXT_LOCALE", "sr", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
    return response;
  }

  // Srpska putanja - nastavi normalno
  const response = NextResponse.next();
  response.cookies.set("NEXT_LOCALE", "sr", {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
  return response;
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|images/|favicon.ico|.*\\.svg$|.*\\.webmanifest$|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.ico$|.*\\.xml$|.*\\.txt$).*)",
};
