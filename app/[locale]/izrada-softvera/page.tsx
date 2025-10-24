import { Metadata } from "next";
import SoftwareHero from "@/components/izrada-softvera/SoftwareHero";
import SoftwareIntro from "@/components/izrada-softvera/SoftwareIntro";
import SoftwareTypes from "@/components/izrada-softvera/SoftwareTypes";
import SoftwareTechnologies from "@/components/izrada-softvera/SoftwareTechnologies";
import SoftwareProcess from "@/components/izrada-softvera/SoftwareProcess";
import SoftwareFeatures from "@/components/izrada-softvera/SoftwareFeatures";
import SoftwareIndustries from "@/components/izrada-softvera/SoftwareIndustries";
import SoftwareBenefits from "@/components/izrada-softvera/SoftwareBenefits";
import SoftwareFAQ from "@/components/izrada-softvera/SoftwareFAQ";
import SoftwareCTA from "@/components/izrada-softvera/SoftwareCTA";

export const metadata: Metadata = {
  title: "Izrada Softvera i Custom Aplikacija po Meri | Manikam Dev Solutions",
  description:
    "Profesionalna izrada custom softvera, web aplikacija, desktop i mobilnih aplikacija po vašim potrebama. Automatizacija poslovnih procesa, ERP, CRM i integracioni sistemi. Skalabilna rešenja sa najnovijim tehnologijama.",
  keywords: [
    "izrada softvera",
    "custom software development",
    "web aplikacije",
    "desktop aplikacije",
    "mobilne aplikacije",
    "automatizacija procesa",
    "erp sistem",
    "crm sistem",
    "business software",
    "enterprise software",
    "software po meri",
    "custom aplikacije",
    "fullstack development",
    "backend development",
    "frontend development",
  ],
  alternates: {
    canonical: "https://manikamwebsolutions.com/sr/izrada-softvera",
    languages: {
      sr: "https://manikamwebsolutions.com/sr/izrada-softvera",
    },
  },
  openGraph: {
    title: "Izrada Softvera i Custom Aplikacija po Meri | Manikam Dev Solutions",
    description:
      "Profesionalna izrada custom softvera i aplikacija po vašim potrebama. Automatizacija, ERP, CRM i integracioni sistemi.",
    type: "website",
  },
};

export default function IzradaSoftveraPage() {
  return (
    <div className="bg-gradient-to-br from-gray-300 via-gray-50 to-white">
      <section className="pt-24 pb-6 md:pb-16 px-4">
        <SoftwareHero />
      </section>

      <section className="container mx-auto px-2 md:px-4 pb-16">
        <div className="space-y-8">
          <SoftwareIntro />
          <SoftwareTypes />
          <SoftwareTechnologies />
          <SoftwareProcess />
          <SoftwareFeatures />
          <SoftwareIndustries />
          <SoftwareBenefits />
          <SoftwareFAQ />
          <SoftwareCTA />
        </div>
      </section>
    </div>
  );
}
