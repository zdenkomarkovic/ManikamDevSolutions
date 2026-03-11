import type { Metadata } from "next";
import SoftwareClient from "@/components/izrada-softvera/SoftwareClient";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/software/sr.json`);
  const title = messages.software.page.title;
  const description = messages.software.page.description;
  const ogImage = `https://manikamwebsolutions.com/api/og?title=${encodeURIComponent(title)}`;
  return {
    title,
    description,
    alternates: { canonical: "https://manikamwebsolutions.com/izrada-softvera" },
    openGraph: {
      url: "https://manikamwebsolutions.com/izrada-softvera",
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
  name: "Izrada Softvera",
  provider: {
    "@type": "Organization",
    name: "Manikam Web Solutions",
    url: "https://manikamwebsolutions.com",
  },
  url: "https://manikamwebsolutions.com/izrada-softvera",
  areaServed: ["RS", "US"],
};

export default async function IzradaSoftveraPage() {
  const mainMsgs = await import(`@/lang/sr.json`);
  const softwareMsgs = await import(`@/lang/software/sr.json`);
  const messages = { ...mainMsgs.default, ...softwareMsgs.default };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <SoftwareClient locale={"sr"} messages={messages as any} />
    </>
  );
}
