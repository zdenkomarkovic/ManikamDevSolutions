import type { Metadata } from "next";
import type { Locale } from "@/i18n-config";
import SocialMediaClient from "@/components/drustvene-mreze/SocialMediaClient";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = await import(`@/lang/social-media/${locale}.json`);

  return {
    title: messages.socialMedia.page.title,
    description: messages.socialMedia.page.description,
    alternates: {
      canonical: `https://manikamwebsolutions.com/${locale}/social-media`,
      languages: {
        sr: "https://manikamwebsolutions.com/sr/drustvene-mreze",
        en: "https://manikamwebsolutions.com/en/social-media",
      },
    },
  };
}

export default async function SocialMediaPage({ params }: Props) {
  const { locale } = await params;

  // Load translations on server side for instant rendering
  const mainMsgs = await import(`@/lang/${locale}.json`);
  const socialMediaMsgs = await import(`@/lang/social-media/${locale}.json`);

  const messages = {
    ...mainMsgs.default,
    ...socialMediaMsgs.default,
  };

  return <SocialMediaClient locale={locale} messages={messages} />;
}
