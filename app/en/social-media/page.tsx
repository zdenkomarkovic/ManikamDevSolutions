import React from "react";
import type { Metadata } from "next";
import SocialMediaClient from "@/components/drustvene-mreze/SocialMediaClient";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/social-media/en.json`);
  const title = messages.socialMedia.page.title;
  const description = messages.socialMedia.page.description;
  const ogImage = `https://manikamwebsolutions.com/api/og?title=${encodeURIComponent(title)}`;
  return {
    title,
    description,
    alternates: {
      canonical: "https://manikamwebsolutions.com/en/social-media",
      languages: {
        sr: "https://manikamwebsolutions.com/drustvene-mreze",
        en: "https://manikamwebsolutions.com/en/social-media",
      },
    },
    openGraph: {
      url: "https://manikamwebsolutions.com/en/social-media",
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
  name: "Social Media Management",
  provider: {
    "@type": "Organization",
    name: "Manikam Web Solutions",
    url: "https://manikamwebsolutions.com",
  },
  url: "https://manikamwebsolutions.com/en/social-media",
  areaServed: ["RS", "US"],
};

export default async function SocialMediaPage() {
  const mainMsgs = await import(`@/lang/en.json`);
  const socialMediaMsgs = await import(`@/lang/social-media/en.json`);
  const messages = { ...mainMsgs.default, ...socialMediaMsgs.default };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <SocialMediaClient locale={"en"} messages={messages as any} />
    </>
  );
}
