import React from "react";
import type { Metadata } from "next";
import IzradaSajtaClient from "./IzradaSajtaClient";
import type { Locale } from "@/i18n-config";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export const metadata: Metadata = {
  title: "Izrada Sajta - Profesionalna Web Rešenja | Manikam Web Solutions",
  description:
    "Profesionalna izrada sajtova u Next.js tehnologiji. Brži, sigurniji i SEO optimizovani sajtovi za vaš biznis. Modernizacija WordPress sajtova i migracija na napredne tehnologije.",
  keywords: [
    "izrada sajta",
    "web sajt",
    "web dizajn",
    "Next.js",
    "React.js",
    "SEO optimizacija",
    "responzivni dizajn",
    "brzi sajt",
    "modernizacija sajta",
    "WordPress migracija",
    "web development",
    "profesionalni sajt",
  ],
  alternates: {
    canonical: "https://manikamwebsolutions.com/sr/izrada-sajta",
    languages: {
      sr: "https://manikamwebsolutions.com/sr/izrada-sajta",
      en: "https://manikamwebsolutions.com/en/website-development",
    },
  },
};

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

