"use client";
import { createContext, useContext, ReactNode } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Translations = any;
type LocaleContextType = { locale: "sr"; t: Translations };

const LocaleContext = createContext<LocaleContextType | null>(null);

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within LocaleProvider");
  return context;
}

export function LocaleProvider({
  children,
  translations,
}: {
  children: ReactNode;
  locale?: string;
  translations: Translations;
}) {
  return (
    <LocaleContext.Provider value={{ locale: "sr", t: translations }}>
      {children}
    </LocaleContext.Provider>
  );
}
