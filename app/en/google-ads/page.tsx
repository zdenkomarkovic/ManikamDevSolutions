import type { Metadata } from "next";
import GoogleAdsClient from "@/app/google-oglasavanje/GoogleAdsClient";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/googleAds/en.json`);
  const title = messages.googleAds.page.title;
  const description = messages.googleAds.page.description;
  const ogImage = `https://manikamwebsolutions.com/api/og?title=${encodeURIComponent(title)}`;
  return {
    title,
    description,
    alternates: {
      canonical: "https://manikamwebsolutions.com/en/google-ads",
      languages: {
        sr: "https://manikamwebsolutions.com/google-oglasavanje",
        en: "https://manikamwebsolutions.com/en/google-ads",
      },
    },
    openGraph: {
      url: "https://manikamwebsolutions.com/en/google-ads",
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
  name: "Google Ads",
  provider: {
    "@type": "Organization",
    name: "Manikam Web Solutions",
    url: "https://manikamwebsolutions.com",
  },
  url: "https://manikamwebsolutions.com/en/google-ads",
  areaServed: ["RS", "US"],
};

export default async function GoogleAdsPage() {
  const mainMsgs = await import(`@/lang/en.json`);
  const googleAdsMsgs = await import(`@/lang/googleAds/en.json`);
  const messages = { ...mainMsgs.default, ...googleAdsMsgs.default };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <GoogleAdsClient locale={"en"} messages={messages as any} />
    </>
  );
}
