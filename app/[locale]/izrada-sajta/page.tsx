import React from "react";
import type { Metadata } from "next";
import HeroSajt from "@/components/izrada-sajta/HeroSajt";
import IntroSajt from "@/components/izrada-sajta/IntroSajt";
import PaketiSajt from "@/components/izrada-sajta/PaketiSajt";
import PrednostiSajt from "@/components/izrada-sajta/PrednostiSajt";
import CTASajt from "@/components/izrada-sajta/CTASajt";
import ProcesSajt from "@/components/izrada-sajta/ProcesSajt";
import FAQSajt from "@/components/izrada-sajta/FAQSajt";
import IndustrijeSajt from "@/components/izrada-sajta/IndustrijeSajt";
import DodatneUslugeSajt from "@/components/izrada-sajta/DodatneUslugeSajt";

export const metadata: Metadata = {
  title: "Izrada Sajta - Profesionalna Web Rešenja | Manikam Web Solutions",
  description:
    "Profesionalna izrada sajtova u Next.js tehnologiji. Brži, sigurniji i SEO optimizovani sajtovi za vaš biznis. Modernizacija WordPress sajtova i migracija na napredne tehnologije.",
  keywords: [
    "izrada sajta",
    "web sajt",
    "web dizajn",
    "Next.js",
    "React.js",
    "SEO optimizacija",
    "responzivni dizajn",
    "brzi sajt",
    "modernizacija sajta",
    "WordPress migracija",
    "web development",
    "profesionalni sajt",
  ],
  alternates: {
    canonical: "https://manikamwebsolutions.com/sr/izrada-sajta",
    languages: {
      sr: "https://manikamwebsolutions.com/sr/izrada-sajta",
      en: "https://manikamwebsolutions.com/en/website-development",
    },
  },
};

const page = () => {
  return (
    <div className=" bg-gray-900/90 ">
      {/* Hero sekcija */}
      <div className="pt-24 pb-6 md:pb-16 px-4">
        <HeroSajt />
      </div>

      {/* Glavna sekcija sa sadržajem */}
      <div className="container mx-auto px-3 md:px-16 pb-16">
        <div className="space-y-8 mb-8">
          <IntroSajt />
          <PaketiSajt />
          <PrednostiSajt />
          <CTASajt />
        </div>

        <ProcesSajt />
        <FAQSajt />
        <IndustrijeSajt />
        <DodatneUslugeSajt />
      </div>
    </div>
  );
};

export default page;
