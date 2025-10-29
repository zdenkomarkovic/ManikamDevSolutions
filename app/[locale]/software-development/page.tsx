import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/LocaleContext";
import SoftwareClient from "@/components/izrada-softvera/SoftwareClient";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const messages = await import(`@/lang/software/${locale}.json`);

  return {
    title: messages.software.page.title,
    description: messages.software.page.description,
  };
}

export default async function SoftwareDevelopmentPage({ params }: Props) {
  const { locale } = await params;

  return (
    <LocaleProvider locale={locale as "en" | "sr"}>
      <SoftwareClient />
    </LocaleProvider>
  );
}
