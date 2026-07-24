import { Metadata } from "next";
import SEOPageClient from "@/app/seo-optimizacija/SEOPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/seoOptimization/en.json`);
  const title = messages.seoOptimization.page.title;
  const description = messages.seoOptimization.page.description;
  const ogImage = `https://manikamwebsolutions.com/api/og?title=${encodeURIComponent(title)}`;
  return {
    title,
    description,
    alternates: {
      canonical: "https://manikamwebsolutions.com/en/seo-optimization",
      languages: {
        sr: "https://manikamwebsolutions.com/seo-optimizacija",
        en: "https://manikamwebsolutions.com/en/seo-optimization",
      },
    },
    openGraph: {
      url: "https://manikamwebsolutions.com/en/seo-optimization",
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
  name: "SEO Optimization",
  provider: {
    "@type": "Organization",
    name: "Manikam Web Solutions",
    url: "https://manikamwebsolutions.com",
  },
  url: "https://manikamwebsolutions.com/en/seo-optimization",
  areaServed: ["RS", "US"],
};

export default async function SEOOptimizationPage() {
  const mainMsgs = await import(`@/lang/en.json`);
  const seoOptMsgs = await import(`@/lang/seoOptimization/en.json`);
  const messages = { ...mainMsgs.default, ...seoOptMsgs.default };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <SEOPageClient locale={"en"} messages={messages as any} />
    </>
  );
}
