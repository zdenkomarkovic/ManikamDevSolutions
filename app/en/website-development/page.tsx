import React from "react";
import type { Metadata } from "next";
import IzradaSajtaClient from "@/app/izrada-sajta/IzradaSajtaClient";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/websiteDevelopment/en.json`);
  const title = messages.websiteDevelopment.page.title;
  const description = messages.websiteDevelopment.page.description;
  const ogImage = `https://manikamwebsolutions.com/api/og?title=${encodeURIComponent(title)}`;
  return {
    title,
    description,
    alternates: {
      canonical: "https://manikamwebsolutions.com/en/website-development",
      languages: {
        sr: "https://manikamwebsolutions.com/izrada-sajta",
        en: "https://manikamwebsolutions.com/en/website-development",
      },
    },
    openGraph: {
      url: "https://manikamwebsolutions.com/en/website-development",
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
  name: "Website Development",
  provider: {
    "@type": "Organization",
    name: "Manikam Web Solutions",
    url: "https://manikamwebsolutions.com",
  },
  url: "https://manikamwebsolutions.com/en/website-development",
  areaServed: ["RS", "US"],
};

export default async function Page() {
  const mainMsgs = await import(`@/lang/en.json`);
  const websiteDevMsgs = await import(`@/lang/websiteDevelopment/en.json`);
  const contactMsgs = await import(`@/lang/contact/en.json`);
  const messages = { ...mainMsgs.default, ...websiteDevMsgs.default, ...contactMsgs.default };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <IzradaSajtaClient locale={"en"} messages={messages as any} />
    </>
  );
}
