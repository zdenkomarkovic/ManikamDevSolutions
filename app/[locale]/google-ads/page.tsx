import type { Metadata } from "next";
import type { Locale } from "@/i18n-config";
import GoogleAdsClient from "./GoogleAdsClient";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const messages = await import(`@/lang/googleAds/${locale}.json`);

  return {
    title: messages.googleAds.page.title,
    description: messages.googleAds.page.description,
  };
}

export default async function GoogleAdsPage({ params }: Props) {
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
