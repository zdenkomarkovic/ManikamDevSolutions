import React from "react";
import type { Metadata } from "next";
import IzradaSajtaClient from "./IzradaSajtaClient";
import type { Locale } from "@/i18n-config";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const messages = await import(`@/lang/websiteDevelopment/${locale}.json`);

  return {
    title: messages.websiteDevelopment.page.title,
    description: messages.websiteDevelopment.page.description,
    alternates: {
      canonical: "https://manikamwebsolutions.com/sr/izrada-sajta",
      languages: {
        sr: "https://manikamwebsolutions.com/sr/izrada-sajta",
        en: "https://manikamwebsolutions.com/en/website-development",
        "x-default": "https://manikamwebsolutions.com/sr/izrada-sajta",
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  // Load translations on server side for instant rendering
  const mainMsgs = await import(`@/lang/${locale}.json`);
  const websiteDevMsgs = await import(`@/lang/websiteDevelopment/${locale}.json`);

  const messages = {
    ...mainMsgs.default,
    ...websiteDevMsgs.default,
  };

  return <IzradaSajtaClient locale={locale} messages={messages} />;
}

