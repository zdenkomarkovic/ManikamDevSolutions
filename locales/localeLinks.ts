import type { Locale } from "@/i18n-config";

export function homeHref(locale: Locale): string {
  return locale === "en" ? "/en" : "/";
}

export function contactHref(locale: Locale): string {
  return locale === "en" ? "/en/contact" : "/contact";
}

export function thankYouHref(locale: Locale): string {
  return locale === "en" ? "/en/thank-you" : "/hvala";
}

export function sectionHref(locale: Locale, hash: string): string {
  return locale === "en" ? `/en${hash}` : `/${hash}`;
}
