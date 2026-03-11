import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/LocaleContext";
import RedesignPageClient from "./RedesignPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/redesignMigration/sr.json`);
  return {
    title: messages.redesignMigration.page.title,
    description: messages.redesignMigration.page.description,
    alternates: {
      canonical: "https://manikamwebsolutions.com/redizajn-migracija",
    },
  };
}

export default async function RedesignMigrationPage() {
  return (
    <LocaleProvider locale={"sr"}>
      <RedesignPageClient />
    </LocaleProvider>
  );
}
