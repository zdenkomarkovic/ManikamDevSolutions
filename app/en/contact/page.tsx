import type { Metadata } from "next";
import ContactClient from "@/components/contact/ContactClient";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/contact/en.json`);
  const title = messages.contact.page.title;
  const description = messages.contact.page.description;
  const ogImage = `https://manikamwebsolutions.com/api/og?title=${encodeURIComponent(title)}`;
  return {
    title,
    description,
    alternates: {
      canonical: "https://manikamwebsolutions.com/en/contact",
      languages: {
        sr: "https://manikamwebsolutions.com/contact",
        en: "https://manikamwebsolutions.com/en/contact",
      },
    },
    openGraph: {
      url: "https://manikamwebsolutions.com/en/contact",
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

export default async function ContactPageEn() {
  const mainMsgs = await import(`@/lang/en.json`);
  const contactMsgs = await import(`@/lang/contact/en.json`);
  const messages = { ...mainMsgs.default, ...contactMsgs.default };
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <ContactClient locale="en" messages={messages as any} />
  );
}
