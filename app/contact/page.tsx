import type { Metadata } from "next";
import ContactClient from "@/components/contact/ContactClient";
import { LocaleProvider } from "@/lib/LocaleContext";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/contact/sr.json`);
  const title = messages.contact.page.title;
  const description = messages.contact.page.description;
  const ogImage = `https://manikamwebsolutions.com/api/og?title=${encodeURIComponent(title)}`;
  return {
    title,
    description,
    alternates: { canonical: "https://manikamwebsolutions.com/contact" },
    openGraph: {
      url: "https://manikamwebsolutions.com/contact",
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

export default async function ContactPage() {
  const mainMsgs = await import(`@/lang/sr.json`);
  const contactMsgs = await import(`@/lang/contact/sr.json`);
  const messages = { ...mainMsgs.default, ...contactMsgs.default };
  return (
    <LocaleProvider locale={"sr"}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <ContactClient messages={messages as any} />
    </LocaleProvider>
  );
}
