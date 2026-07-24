import type { Metadata } from "next";
import MarketingPaketClient from "@/app/marketing-paket/MarketingPaketClient";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/marketingPaket/en.json`);
  const title = messages.marketingPaket.page.title;
  const description = messages.marketingPaket.page.description;
  const ogImage = `https://manikamwebsolutions.com/api/og?title=${encodeURIComponent(title)}`;
  return {
    title,
    description,
    alternates: {
      canonical: "https://manikamwebsolutions.com/en/marketing-package",
      languages: {
        sr: "https://manikamwebsolutions.com/marketing-paket",
        en: "https://manikamwebsolutions.com/en/marketing-package",
      },
    },
    openGraph: {
      url: "https://manikamwebsolutions.com/en/marketing-package",
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
  name: "Marketing Package",
  provider: {
    "@type": "Organization",
    name: "Manikam Web Solutions",
    url: "https://manikamwebsolutions.com",
  },
  url: "https://manikamwebsolutions.com/en/marketing-package",
  areaServed: ["RS", "US"],
};

export default async function MarketingPackagePage() {
  const mainMsgs = await import(`@/lang/en.json`);
  const marketingPaketMsgs = await import(`@/lang/marketingPaket/en.json`);
  const messages = { ...mainMsgs.default, ...marketingPaketMsgs.default };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <MarketingPaketClient locale={"en"} messages={messages as any} />
    </>
  );
}
