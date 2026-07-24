import type { Metadata } from "next";
import ThankYouClient from "@/components/thank-you/ThankYouClient";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/thank-you/en.json`);
  return {
    title: messages.thankYou.page.title,
    robots: "noindex, nofollow",
    alternates: {
      canonical: "https://manikamwebsolutions.com/en/thank-you",
    },
  };
}

export default async function ThankYouPageEn() {
  const mainMsgs = await import(`@/lang/en.json`);
  const thankYouMsgs = await import(`@/lang/thank-you/en.json`);
  const messages = { ...mainMsgs.default, ...thankYouMsgs.default };
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <ThankYouClient locale="en" messages={messages as any} />
  );
}
