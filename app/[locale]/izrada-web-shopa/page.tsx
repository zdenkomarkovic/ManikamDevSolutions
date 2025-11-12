import React from "react";
import type { Metadata } from "next";
import type { Locale } from "@/i18n-config";
import IzradaWebShopaClient from "./IzradaWebShopaClient";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export const metadata: Metadata = {
  title:
    "Izrada Web Shopa - Profesionalne Online Prodavnice | Manikam Web Solutions",
  description:
    "Profesionalna izrada web shopova i e-commerce rešenja. Kompletne online prodavnice sa integrisanim plaćanjem, upravljanjem zalihama, SEO optimizacijom i mobilnom prilagodbom za maksimalne rezultate.",
  keywords: [
    "izrada web shopa",
    "online prodavnica",
    "e-commerce",
    "web shop",
    "internet prodavnica",
    "online trgovina",
    "e-commerce rešenja",
    "web shop development",
    "online store",
    "digitalna prodavnica",
  ],
  alternates: {
    canonical: "https://manikamwebsolutions.com/sr/izrada-web-shopa",
    languages: {
      sr: "https://manikamwebsolutions.com/sr/izrada-web-shopa",
      en: "https://manikamwebsolutions.com/en/webshop-development",
    },
  },
};

export default async function Page({ params }: Props) {
  const { locale } = await params;

  // Load translations on server side for instant rendering
  const mainMsgs = await import(`@/lang/${locale}.json`);
  const webshopDevMsgs = await import(`@/lang/webshopDevelopment/${locale}.json`);

  const messages = {
    ...mainMsgs.default,
    ...webshopDevMsgs.default,
  };

  return <IzradaWebShopaClient locale={locale} messages={messages} />;
}
