import { Metadata } from "next";
import RedesignPageClient from "./RedesignPageClient";

export const metadata: Metadata = {
  title: "Redizajn i Migracija Sajtova na Next.js | WordPress → Next.js",
  description:
    "Profesionalna migracija i redizajn sajtova sa WordPresa, Wix, Joomla i drugih platformi na Next.js. Poboljšajte performanse, SEO i korisničko iskustvo. Brže učitavanje, bolja sigurnost i moderne funkcionalnosti.",
  keywords:
    "migracija sajta, WordPress na Next.js, redizajn sajta, migracija WordPress, Next.js migracija, modernizacija sajta, Wix migracija, Joomla migracija, poboljšanje performansi sajta",
  openGraph: {
    title: "Redizajn i Migracija Sajtova na Next.js",
    description:
      "Migrirajte svoj sajt na modernu Next.js platformu. Bolje performanse, SEO i korisničko iskustvo.",
  },
};

export default function RedesignMigrationPage() {
  return <RedesignPageClient />;
}
