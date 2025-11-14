import { Metadata } from "next";
import type { Locale } from "@/i18n-config";
import SEOPageClient from "./SEOPageClient";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export const metadata: Metadata = {
  title:
    "SEO Optimizacija - Poboljšajte Vidljivost Vašeg Sajta | Manikam Dev Solutions",
  description:
    "Profesionalna SEO optimizacija koja donosi organsku posećenost. Povećajte rangiranje na Google-u, privucite ciljanu publiku i razvijte svoj biznis. Više od 10 godina iskustva.",
  keywords: [
    "seo optimizacija",
    "seo srbija",
    "optimizacija sajta",
    "google seo",
    "seo usluge",
    "organski seo",
    "lokalni seo",
    "tehnički seo",
    "seo konsultacije",
    "povećanje rangiranja",
  ],
  alternates: {
    canonical: "https://manikamwebsolutions.com/sr/seo-optimizacija",
    languages: {
      sr: "https://manikamwebsolutions.com/sr/seo-optimizacija",
      en: "https://manikamwebsolutions.com/en/seo-optimization",
    },
  },
  openGraph: {
    title:
      "SEO Optimizacija - Poboljšajte Vidljivost Vašeg Sajta | Manikam Dev Solutions",
    description:
      "Profesionalna SEO optimizacija koja donosi organsku posećenost. Povećajte rangiranje na Google-u i razvijte svoj biznis.",
    type: "website",
  },
};

export default async function SEOOptimizacijaPage({ params }: Props) {
  const { locale } = await params;

  // Load translations on server side for instant rendering
  const mainMsgs = await import(`@/lang/${locale}.json`);
  const seoOptMsgs = await import(`@/lang/seoOptimization/${locale}.json`);

  const messages = {
    ...mainMsgs.default,
    ...seoOptMsgs.default,
  };

  return <SEOPageClient locale={locale} messages={messages} />;
}
