import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Legacy /sr/* bookmarks -> bare Serbian routes (Serbian has no prefix)
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
