import type { Metadata } from "next";
import ThankYouClient from "@/components/thank-you/ThankYouClient";
import { LocaleProvider } from "@/lib/LocaleContext";
import GoogleAdsConversion from "@/components/GoogleAdsConversion";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const messages = await import(`@/lang/thank-you/${locale}.json`);

  return {
    title: messages.thankYou.page.title,
    robots: "noindex, nofollow", // Ne želimo da Google indexira thank you stranicu
    alternates: {
      canonical: `https://manikamwebsolutions.com/${locale}/hvala`,
    },
  };
}

export default async function ThankYouPage({ params }: Props) {
  const { locale } = await params;

  // Load translations on server side for instant rendering
  const mainMsgs = await import(`@/lang/${locale}.json`);
  const thankYouMsgs = await import(`@/lang/thank-you/${locale}.json`);

  // Merge messages
  const messages = {
    ...mainMsgs.default,
    ...thankYouMsgs.default,
  };

  return (
    <LocaleProvider locale={locale as "en" | "sr"}>
      <GoogleAdsConversion />
      <ThankYouClient messages={messages} />
    </LocaleProvider>
  );
}
