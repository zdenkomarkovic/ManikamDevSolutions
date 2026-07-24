import React from "react";
import type { Metadata } from "next";
import IzradaWebShopaClient from "@/app/izrada-web-shopa/IzradaWebShopaClient";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/webshopDevelopment/en.json`);
  const title = messages.webshopDevelopment.page.title;
  const description = messages.webshopDevelopment.page.description;
  const ogImage = `https://manikamwebsolutions.com/api/og?title=${encodeURIComponent(title)}`;
  return {
    title,
    description,
    alternates: {
      canonical: "https://manikamwebsolutions.com/en/webshop-development",
      languages: {
        sr: "https://manikamwebsolutions.com/izrada-web-shopa",
        en: "https://manikamwebsolutions.com/en/webshop-development",
      },
    },
    openGraph: {
      url: "https://manikamwebsolutions.com/en/webshop-development",
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
  name: "Webshop Development",
  provider: {
    "@type": "Organization",
    name: "Manikam Web Solutions",
    url: "https://manikamwebsolutions.com",
  },
  url: "https://manikamwebsolutions.com/en/webshop-development",
  areaServed: ["RS", "US"],
};

export default async function Page() {
  const mainMsgs = await import(`@/lang/en.json`);
  const webshopDevMsgs = await import(`@/lang/webshopDevelopment/en.json`);
  const messages = { ...mainMsgs.default, ...webshopDevMsgs.default };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <IzradaWebShopaClient locale={"en"} messages={messages as any} />
    </>
  );
}
