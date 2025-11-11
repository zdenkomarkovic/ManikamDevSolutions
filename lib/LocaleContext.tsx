"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Locale } from "@/i18n-config";

// Define a flexible type for translations that allows deep nesting
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Translations = any;

type LocaleContextType = {
  locale: Locale;
  t: Translations;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}

export function LocaleProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadTranslations() {
      try {
        const mainMsgs = await import(`../lang/${locale}.json`);
        const redesignMsgs = await import(`../lang/redesignMigration/${locale}.json`);

        setTranslations({
          ...mainMsgs.default,
          ...redesignMsgs.default,
        });
      } catch (error) {
        console.error("Failed to load translations:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadTranslations();
  }, [locale]);

  if (isLoading) {
    return null;
  }

  return (
    <LocaleContext.Provider value={{ locale, t: translations }}>
      {children}
    </LocaleContext.Provider>
  );
}
