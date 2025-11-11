import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/LocaleContext";
import SocialMediaClient from "../drustvene-mreze/DrustveneМrezeClient";

type Props = {
  params: Promise<{ locale: string }>;
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

  return (
    <LocaleProvider locale={locale as "en" | "sr"}>
      <SocialMediaClient />
    </LocaleProvider>
  );
}
