import type { Metadata } from "next";
import MarketingPaketClient from "./MarketingPaketClient";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/marketingPaket/sr.json`);
  return {
    title: messages.marketingPaket.page.title,
    description: messages.marketingPaket.page.description,
    alternates: {
      canonical: "https://manikamwebsolutions.com/marketing-paket",
    },
  };
}

export default async function MarketingPaketPage() {
  const mainMsgs = await import(`@/lang/sr.json`);
  const marketingPaketMsgs = await import(`@/lang/marketingPaket/sr.json`);
  const messages = { ...mainMsgs.default, ...marketingPaketMsgs.default };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <MarketingPaketClient locale={"sr"} messages={messages as any} />;
}
