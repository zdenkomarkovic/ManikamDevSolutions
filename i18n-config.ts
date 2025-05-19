export const i18n = {
  locales: ["en", "sr"],
  defaultLocale: "sr",
} as const;

export type I18nConfig = typeof i18n;
export type Locale = I18nConfig["locales"][number];
