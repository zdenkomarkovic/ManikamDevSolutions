import React from "react";
import type { Metadata } from "next";
import IzradaSajtaClient from "../izrada-sajta/IzradaSajtaClient";
import type { Locale } from "@/i18n-config";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export const metadata: Metadata = {
  title: "Website Development - Professional Web Solutions | Manikam Web Solutions",
  description:
    "Professional website development using Next.js technology. Faster, more secure, and SEO-optimized websites for your business. WordPress modernization and migration to advanced technologies.",
  keywords: [
    "website development",
    "web development",
    "web design",
    "Next.js",
    "React.js",
    "SEO optimization",
    "responsive design",
    "fast website",
    "website modernization",
    "WordPress migration",
    "professional website",
  ],
  alternates: {
    canonical: "https://manikamwebsolutions.com/en/website-development",
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
