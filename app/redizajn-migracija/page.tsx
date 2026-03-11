import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/LocaleContext";
import RedesignPageClient from "./RedesignPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/redesignMigration/sr.json`);
  const title = messages.redesignMigration.page.title;
  const description = messages.redesignMigration.page.description;
  const ogImage = `https://manikamwebsolutions.com/api/og?title=${encodeURIComponent(title)}`;
  return {
    title,
    description,
    alternates: { canonical: "https://manikamwebsolutions.com/redizajn-migracija" },
    openGraph: {
      url: "https://manikamwebsolutions.com/redizajn-migracija",
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
  name: "Redizajn i Migracija Sajta",
  provider: {
    "@type": "Organization",
    name: "Manikam Web Solutions",
    url: "https://manikamwebsolutions.com",
  },
  url: "https://manikamwebsolutions.com/redizajn-migracija",
  areaServed: ["RS", "US"],
};

export default async function RedesignMigrationPage() {
  return (
    <LocaleProvider locale={"sr"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <RedesignPageClient />
    </LocaleProvider>
  );
}
