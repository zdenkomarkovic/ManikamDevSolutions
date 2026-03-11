"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Translations = any;
type LocaleContextType = { locale: "sr"; t: Translations };

const LocaleContext = createContext<LocaleContextType | null>(null);

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within LocaleProvider");
  return context;
}

export function LocaleProvider({ children, locale: _locale }: { children: ReactNode; locale?: string }) {
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadTranslations() {
      try {
        const mainMsgs = await import(`../lang/sr.json`);
        const redesignMsgs = await import(`../lang/redesignMigration/sr.json`);
        setTranslations({ ...mainMsgs.default, ...redesignMsgs.default });
      } catch (error) {
        console.error("Failed to load translations:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadTranslations();
  }, []);

  if (isLoading) return null;

  return (
    <LocaleContext.Provider value={{ locale: "sr", t: translations }}>
      {children}
    </LocaleContext.Provider>
  );
}
