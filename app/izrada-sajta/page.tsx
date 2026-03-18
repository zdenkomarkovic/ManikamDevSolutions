import React from "react";
import type { Metadata } from "next";
import IzradaSajtaClient from "./IzradaSajtaClient";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/websiteDevelopment/sr.json`);
  const title = messages.websiteDevelopment.page.title;
  const description = messages.websiteDevelopment.page.description;
  const ogImage = `https://manikamwebsolutions.com/api/og?title=${encodeURIComponent(title)}`;
  return {
    title,
    description,
    alternates: { canonical: "https://manikamwebsolutions.com/izrada-sajta" },
    openGraph: {
      url: "https://manikamwebsolutions.com/izrada-sajta",
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
  name: "Izrada Sajta",
  provider: {
    "@type": "Organization",
    name: "Manikam Web Solutions",
    url: "https://manikamwebsolutions.com",
  },
  url: "https://manikamwebsolutions.com/izrada-sajta",
  areaServed: ["RS", "US"],
};

export default async function Page() {
  const mainMsgs = await import(`@/lang/sr.json`);
  const websiteDevMsgs = await import(`@/lang/websiteDevelopment/sr.json`);
  const contactMsgs = await import(`@/lang/contact/sr.json`);
  const messages = { ...mainMsgs.default, ...websiteDevMsgs.default, ...contactMsgs.default };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <IzradaSajtaClient locale={"sr"} messages={messages as any} />
    </>
  );
}
