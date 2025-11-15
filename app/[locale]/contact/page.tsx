import type { Metadata } from "next";
import ContactClient from "@/components/contact/ContactClient";
import { LocaleProvider } from "@/lib/LocaleContext";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const messages = await import(`@/lang/contact/${locale}.json`);

  return {
    title: messages.contact.page.title,
    alternates: {
      canonical: `https://manikamwebsolutions.com/${locale}/contact`,
      languages: {
        sr: "https://manikamwebsolutions.com/sr/contact",
        en: "https://manikamwebsolutions.com/en/contact",
      },
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;

  // Load translations on server side for instant rendering
  const mainMsgs = await import(`@/lang/${locale}.json`);
  const contactMsgs = await import(`@/lang/contact/${locale}.json`);

  // Merge messages
  const messages = {
    ...mainMsgs.default,
    ...contactMsgs.default,
  };

  return (
    <LocaleProvider locale={locale as "en" | "sr"}>
      <ContactClient messages={messages} />
    </LocaleProvider>
  );
}
