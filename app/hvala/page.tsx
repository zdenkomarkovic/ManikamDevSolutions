import type { Metadata } from "next";
import ThankYouClient from "@/components/thank-you/ThankYouClient";
import { LocaleProvider } from "@/lib/LocaleContext";
import GoogleAdsConversion from "@/components/GoogleAdsConversion";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/thank-you/sr.json`);
  return {
    title: messages.thankYou.page.title,
    robots: "noindex, nofollow",
    alternates: {
      canonical: "https://manikamwebsolutions.com/hvala",
    },
  };
}

export default async function ThankYouPage() {
  const mainMsgs = await import(`@/lang/sr.json`);
  const thankYouMsgs = await import(`@/lang/thank-you/sr.json`);
  const messages = { ...mainMsgs.default, ...thankYouMsgs.default };
  return (
    <LocaleProvider locale={"sr"}>
      <GoogleAdsConversion />
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <ThankYouClient messages={messages as any} />
    </LocaleProvider>
  );
}
