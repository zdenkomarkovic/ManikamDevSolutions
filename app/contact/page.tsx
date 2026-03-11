import type { Metadata } from "next";
import ContactClient from "@/components/contact/ContactClient";
import { LocaleProvider } from "@/lib/LocaleContext";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/contact/sr.json`);
  return {
    title: messages.contact.page.title,
    alternates: {
      canonical: "https://manikamwebsolutions.com/contact",
    },
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
