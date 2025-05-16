"use client";

import { I18nextProvider } from "react-i18next";
import { useEffect } from "react";
import i18n from "@/i18n/client";

export default function TranslationsProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  useEffect(() => {
    i18n.changeLanguage(locale);
    localStorage.setItem("lang", locale);
  }, [locale]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
