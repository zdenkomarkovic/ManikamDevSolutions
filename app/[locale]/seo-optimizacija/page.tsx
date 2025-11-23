import { Metadata } from "next";
import type { Locale } from "@/i18n-config";
import SEOPageClient from "./SEOPageClient";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const messages = await import(`@/lang/seoOptimization/${locale}.json`);

  return {
    title: messages.seoOptimization.page.title,
    description: messages.seoOptimization.page.description,
    alternates: {
      canonical: "https://manikamwebsolutions.com/sr/seo-optimizacija",
      languages: {
        sr: "https://manikamwebsolutions.com/sr/seo-optimizacija",
        en: "https://manikamwebsolutions.com/en/seo-optimization",
        "x-default": "https://manikamwebsolutions.com/sr/seo-optimizacija",
      },
    },
  };
}

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
