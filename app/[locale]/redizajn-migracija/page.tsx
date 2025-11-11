import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/LocaleContext";
import RedesignPageClient from "./RedesignPageClient";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const messages = await import(`@/lang/redesignMigration/${locale}.json`);

  return {
    title: messages.redesignMigration.page.title,
    description: messages.redesignMigration.page.description,
  };
}

export default async function RedesignMigrationPage({ params }: Props) {
  const { locale } = await params;

  return (
    <LocaleProvider locale={locale as "en" | "sr"}>
      <RedesignPageClient />
    </LocaleProvider>
  );
}
