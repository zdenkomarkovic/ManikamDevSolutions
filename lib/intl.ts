import "server-only";

import { createIntl } from "@formatjs/intl";
import { Locale } from "@/i18n-config";

export async function getIntl(locale: Locale) {
  let messages;
  try {
    messages = (await import(`../lang/${locale}.json`)).default;
  } catch {
    // fallback na srpski
    messages = (await import(`../lang/sr.json`)).default;
    locale = "sr";
  }
  return createIntl({ locale, messages: messages as Record<string, string> });
}

export function getDirection() {
  return "ltr";
}
