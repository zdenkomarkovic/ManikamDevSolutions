import type { Metadata } from "next";
import type { Locale } from "@/i18n-config";
import SoftwareClient from "@/components/izrada-softvera/SoftwareClient";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const messages = await import(`@/lang/software/${locale}.json`);

  return {
    title: messages.software.page.title,
    description: messages.software.page.description,
    alternates: {
      canonical: `https://manikamwebsolutions.com/${locale}/izrada-softvera`,
      languages: {
        sr: "https://manikamwebsolutions.com/sr/izrada-softvera",
        en: "https://manikamwebsolutions.com/en/software-development",
      },
    },
  };
}

export default async function IzradaSoftveraPage({ params }: Props) {
  const { locale } = await params;

  // Load translations on server side for instant rendering
  const mainMsgs = await import(`@/lang/${locale}.json`);
  const softwareMsgs = await import(`@/lang/software/${locale}.json`);

  const messages = {
    ...mainMsgs.default,
    ...softwareMsgs.default,
  };

  return <SoftwareClient locale={locale} messages={messages} />;
}
