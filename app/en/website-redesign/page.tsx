import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/LocaleContext";
import RedesignPageClient from "@/app/redizajn-migracija/RedesignPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/redesignMigration/en.json`);
  const title = messages.redesignMigration.page.title;
  const description = messages.redesignMigration.page.description;
  const ogImage = `https://manikamwebsolutions.com/api/og?title=${encodeURIComponent(title)}`;
  return {
    title,
    description,
    alternates: {
      canonical: "https://manikamwebsolutions.com/en/website-redesign",
      languages: {
        sr: "https://manikamwebsolutions.com/redizajn-migracija",
        en: "https://manikamwebsolutions.com/en/website-redesign",
      },
    },
    openGraph: {
      url: "https://manikamwebsolutions.com/en/website-redesign",
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
  name: "Website Redesign and Migration",
  provider: {
    "@type": "Organization",
    name: "Manikam Web Solutions",
    url: "https://manikamwebsolutions.com",
  },
  url: "https://manikamwebsolutions.com/en/website-redesign",
  areaServed: ["RS", "US"],
};

export default async function WebsiteRedesignPage() {
  const mainMsgs = await import(`@/lang/en.json`);
  const redesignMsgs = await import(`@/lang/redesignMigration/en.json`);
  const translations = { ...mainMsgs.default, ...redesignMsgs.default };
  return (
    <LocaleProvider locale="en" translations={translations}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <RedesignPageClient />
    </LocaleProvider>
  );
}
