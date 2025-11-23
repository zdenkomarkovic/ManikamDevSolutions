import React from "react";
import type { Metadata } from "next";
import type { Locale } from "@/i18n-config";
import WebshopDevelopmentClient from "./WebshopDevelopmentClient";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const messages = await import(`@/lang/webshopDevelopment/${locale}.json`);

  return {
    title: messages.webshopDevelopment.page.title,
    description: messages.webshopDevelopment.page.description,
    alternates: {
      canonical: "https://manikamwebsolutions.com/en/webshop-development",
      languages: {
        sr: "https://manikamwebsolutions.com/sr/izrada-web-shopa",
        en: "https://manikamwebsolutions.com/en/webshop-development",
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  // Load translations on server side for instant rendering
  const mainMsgs = await import(`@/lang/${locale}.json`);
  const webshopDevMsgs = await import(`@/lang/webshopDevelopment/${locale}.json`);

  const messages = {
    ...mainMsgs.default,
    ...webshopDevMsgs.default,
  };

  return <WebshopDevelopmentClient locale={locale} messages={messages} />;
}