export const i18n = {
  locales: ["sr", "en"] as const,
  defaultLocale: "sr" as const,
} as const;

export type I18nConfig = typeof i18n;
export type Locale = "sr" | "en";
