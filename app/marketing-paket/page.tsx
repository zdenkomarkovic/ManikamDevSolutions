import type { Metadata } from "next";
import MarketingPaketClient from "./MarketingPaketClient";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/marketingPaket/sr.json`);
  const title = messages.marketingPaket.page.title;
  const description = messages.marketingPaket.page.description;
  const ogImage = `https://manikamwebsolutions.com/api/og?title=${encodeURIComponent(title)}`;
  return {
    title,
    description,
    alternates: { canonical: "https://manikamwebsolutions.com/marketing-paket" },
    openGraph: {
      url: "https://manikamwebsolutions.com/marketing-paket",
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Marketing Paket",
  provider: {
    "@type": "Organization",
    name: "Manikam Web Solutions",
    url: "https://manikamwebsolutions.com",
  },
  url: "https://manikamwebsolutions.com/marketing-paket",
  areaServed: ["RS", "US"],
};

export default async function MarketingPaketPage() {
  const mainMsgs = await import(`@/lang/sr.json`);
  const marketingPaketMsgs = await import(`@/lang/marketingPaket/sr.json`);
  const messages = { ...mainMsgs.default, ...marketingPaketMsgs.default };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <MarketingPaketClient locale={"sr"} messages={messages as any} />
    </>
  );
}
