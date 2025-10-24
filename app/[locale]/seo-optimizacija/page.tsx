import { Metadata } from "next";
import SEOHero from "@/components/seo/SEOHero";
import SEOIntro from "@/components/seo/SEOIntro";
import SEOFeatures from "@/components/seo/SEOFeatures";
import SEOServices from "@/components/seo/SEOServices";
import SEOProcess from "@/components/seo/SEOProcess";
import SEOResults from "@/components/seo/SEOResults";
import SEOWhy from "@/components/seo/SEOWhy";
import SEOIndustries from "@/components/seo/SEOIndustries";
import SEOFAQ from "@/components/seo/SEOFAQ";
import SEOCTA from "@/components/seo/SEOCTA";

export const metadata: Metadata = {
  title: "SEO Optimizacija - Poboljšajte Vidljivost Vašeg Sajta | Manikam Dev Solutions",
  description:
    "Profesionalna SEO optimizacija koja donosi organsku posećenost. Povećajte rangiranje na Google-u, privucite ciljanu publiku i razvijte svoj biznis. Više od 10 godina iskustva.",
  keywords: [
    "seo optimizacija",
    "seo srbija",
    "optimizacija sajta",
    "google seo",
    "seo usluge",
    "organski seo",
    "lokalni seo",
    "tehnički seo",
    "seo konsultacije",
    "povećanje rangiranja",
  ],
  alternates: {
    canonical: "https://manikamwebsolutions.com/sr/seo-optimizacija",
    languages: {
      sr: "https://manikamwebsolutions.com/sr/seo-optimizacija",
      en: "https://manikamwebsolutions.com/en/seo-optimization",
    },
  },
  openGraph: {
    title: "SEO Optimizacija - Poboljšajte Vidljivost Vašeg Sajta | Manikam Dev Solutions",
    description:
      "Profesionalna SEO optimizacija koja donosi organsku posećenost. Povećajte rangiranje na Google-u i razvijte svoj biznis.",
    type: "website",
  },
};

export default function SEOOptimizacijaPage() {
  return (
    <div className=" bg-gray-900/90 ">
      <section className="pt-24 pb-6 md:pb-16 px-4">
        <SEOHero />
      </section>

      <section className="container mx-auto px-3 md:px-16 pb-16">
        <div className="space-y-8 mb-8">
          <SEOIntro />
          <SEOFeatures />
          <SEOServices />
        </div>

        <SEOProcess />
        <SEOResults />
        <SEOWhy />
        <SEOIndustries />
        <SEOFAQ />
        <SEOCTA />
      </section>
    </div>
  );
}
