import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Mapiranje engleskih slugova na srpske
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

  // Redirect /en/* na srpske ekvivalente (bez /sr/ prefiksa)
  if (pathname.startsWith("/en")) {
    const afterEn = pathname.slice(3);
    const slug = afterEn.replace(/^\//, "");
    const srSlug = enToSrSlugMap[slug] ?? slug;
    const newPath = srSlug ? `/${srSlug}` : "/";
    return NextResponse.redirect(new URL(newPath, request.url), 301);
  }

  // Redirect /sr/* na iste rute bez /sr/ prefiksa
  if (pathname.startsWith("/sr")) {
    const afterSr = pathname.slice(3) || "/";
    return NextResponse.redirect(new URL(afterSr, request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|images/|favicon.ico|.*\\.svg$|.*\\.webmanifest$|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.ico$|.*\\.xml$|.*\\.txt$).*)",
};
