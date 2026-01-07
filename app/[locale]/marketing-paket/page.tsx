import type { Metadata } from "next";
import type { Locale } from "@/i18n-config";
import MarketingPaketClient from "./MarketingPaketClient";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const messages = await import(`@/lang/marketingPaket/${locale}.json`);

  return {
    title: messages.marketingPaket.page.title,
    description: messages.marketingPaket.page.description,
    alternates: {
      canonical: "https://manikamwebsolutions.com/sr/marketing-paket",
      languages: {
        sr: "https://manikamwebsolutions.com/sr/marketing-paket",
        en: "https://manikamwebsolutions.com/en/marketing-package",
        "x-default": "https://manikamwebsolutions.com/sr/marketing-paket",
      },
    },
  };
}

export default async function MarketingPaketPage({ params }: Props) {
  const { locale } = await params;

  // Load translations on server side for instant rendering
  const mainMsgs = await import(`@/lang/${locale}.json`);
  const marketingPaketMsgs = await import(`@/lang/marketingPaket/${locale}.json`);

  const messages = {
    ...mainMsgs.default,
    ...marketingPaketMsgs.default,
  };

  return <MarketingPaketClient locale={locale} messages={messages} />;
}
