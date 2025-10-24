import RedesignHero from "@/components/redesign/RedesignHero";
import RedesignIntro from "@/components/redesign/RedesignIntro";
import RedesignBenefits from "@/components/redesign/RedesignBenefits";
import RedesignProcess from "@/components/redesign/RedesignProcess";
import RedesignPlatforms from "@/components/redesign/RedesignPlatforms";
import RedesignWhyNextJS from "@/components/redesign/RedesignWhyNextJS";
import RedesignPerformance from "@/components/redesign/RedesignPerformance";
import RedesignFAQ from "@/components/redesign/RedesignFAQ";
import RedesignCTA from "@/components/redesign/RedesignCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redizajn i Migracija Sajtova na Next.js | WordPress → Next.js",
  description: "Profesionalna migracija i redizajn sajtova sa WordPresa, Wix, Joomla i drugih platformi na Next.js. Poboljšajte performanse, SEO i korisničko iskustvo. Brže učitavanje, bolja sigurnost i moderne funkcionalnosti.",
  keywords: "migracija sajta, WordPress na Next.js, redizajn sajta, migracija WordPress, Next.js migracija, modernizacija sajta, Wix migracija, Joomla migracija, poboljšanje performansi sajta",
  openGraph: {
    title: "Redizajn i Migracija Sajtova na Next.js",
    description: "Migrirajte svoj sajt na modernu Next.js platformu. Bolje performanse, SEO i korisničko iskustvo.",
  },
};

export default function RedesignMigrationPage() {
  return (
    <main className="min-h-screen">
      <RedesignHero />
      <RedesignIntro />
      <RedesignBenefits />
      <RedesignWhyNextJS />
      <RedesignPlatforms />
      <RedesignProcess />
      <RedesignPerformance />
      <RedesignFAQ />
      <RedesignCTA />
    </main>
  );
}
