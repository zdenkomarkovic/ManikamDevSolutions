import type { Metadata } from "next";
import type { Locale } from "@/i18n-config";
import GoogleAdsClient from "../google-ads/GoogleAdsClient";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const messages = await import(`@/lang/googleAds/${locale}.json`);

  return {
    title: messages.googleAds.page.title,
    description: messages.googleAds.page.description,
    alternates: {
      canonical: "https://manikamwebsolutions.com/sr/google-oglasavanje",
      languages: {
        sr: "https://manikamwebsolutions.com/sr/google-oglasavanje",
        en: "https://manikamwebsolutions.com/en/google-ads",
        "x-default": "https://manikamwebsolutions.com/sr/google-oglasavanje",
      },
    },
  };
}

export default async function GoogleOglasavanjePage({ params }: Props) {
  const { locale } = await params;

  // Load translations on server side for instant rendering
  const mainMsgs = await import(`@/lang/${locale}.json`);
  const googleAdsMsgs = await import(`@/lang/googleAds/${locale}.json`);

  const messages = {
    ...mainMsgs.default,
    ...googleAdsMsgs.default,
  };

  return <GoogleAdsClient locale={locale} messages={messages} />;
}
