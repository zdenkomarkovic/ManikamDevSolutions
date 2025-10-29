import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/LocaleContext";
import GoogleAdsClient from "./GoogleAdsClient";

type Props = {
  params: Promise<{ locale: string }>;
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

  return (
    <LocaleProvider locale={locale as "en" | "sr"}>
      <GoogleAdsClient />
    </LocaleProvider>
  );
}
