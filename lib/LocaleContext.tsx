"use client";
import { createContext, useContext, ReactNode } from "react";
import type { Locale } from "@/i18n-config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Translations = any;
type LocaleContextType = { locale: Locale; t: Translations };

const LocaleContext = createContext<LocaleContextType | null>(null);

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within LocaleProvider");
  return context;
}

export function LocaleProvider({
  children,
  locale = "sr",
  translations,
}: {
  children: ReactNode;
  locale?: Locale;
  translations: Translations;
}) {
  return (
    <LocaleContext.Provider value={{ locale, t: translations }}>
      {children}
    </LocaleContext.Provider>
  );
}
