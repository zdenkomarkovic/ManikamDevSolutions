import type { Metadata } from "next";
import SoftwareClient from "@/components/izrada-softvera/SoftwareClient";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/software/en.json`);
  const title = messages.software.page.title;
  const description = messages.software.page.description;
  const ogImage = `https://manikamwebsolutions.com/api/og?title=${encodeURIComponent(title)}`;
  return {
    title,
    description,
    alternates: {
      canonical: "https://manikamwebsolutions.com/en/software-development",
      languages: {
        sr: "https://manikamwebsolutions.com/izrada-softvera",
        en: "https://manikamwebsolutions.com/en/software-development",
      },
    },
    openGraph: {
      url: "https://manikamwebsolutions.com/en/software-development",
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
  name: "Custom Software Development",
  provider: {
    "@type": "Organization",
    name: "Manikam Web Solutions",
    url: "https://manikamwebsolutions.com",
  },
  url: "https://manikamwebsolutions.com/en/software-development",
  areaServed: ["RS", "US"],
};

export default async function SoftwareDevelopmentPage() {
  const mainMsgs = await import(`@/lang/en.json`);
  const softwareMsgs = await import(`@/lang/software/en.json`);
  const messages = { ...mainMsgs.default, ...softwareMsgs.default };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <SoftwareClient locale={"en"} messages={messages as any} />
    </>
  );
}
