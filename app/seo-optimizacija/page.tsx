import { Metadata } from "next";
import SEOPageClient from "./SEOPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/seoOptimization/sr.json`);
  const title = messages.seoOptimization.page.title;
  const description = messages.seoOptimization.page.description;
  const ogImage = `https://manikamwebsolutions.com/api/og?title=${encodeURIComponent(title)}`;
  return {
    title,
    description,
    alternates: { canonical: "https://manikamwebsolutions.com/seo-optimizacija" },
    openGraph: {
      url: "https://manikamwebsolutions.com/seo-optimizacija",
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
  name: "SEO Optimizacija",
  provider: {
    "@type": "Organization",
    name: "Manikam Web Solutions",
    url: "https://manikamwebsolutions.com",
  },
  url: "https://manikamwebsolutions.com/seo-optimizacija",
  areaServed: ["RS", "US"],
};

export default async function SEOOptimizacijaPage() {
  const mainMsgs = await import(`@/lang/sr.json`);
  const seoOptMsgs = await import(`@/lang/seoOptimization/sr.json`);
  const messages = { ...mainMsgs.default, ...seoOptMsgs.default };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <SEOPageClient locale={"sr"} messages={messages as any} />
    </>
  );
}
