import React from "react";
import type { Metadata } from "next";
import HeroWebshop from "@/components/web-shop/HeroWebshop";
import IntroWebshop from "@/components/web-shop/IntroWebshop";
import PaketeWebshop from "@/components/web-shop/PaketeWebshop";
import FeaturesWebshop from "@/components/web-shop/FeaturesWebshop";
import ProcesWebshop from "@/components/web-shop/ProcesWebshop";
import FAQWebshop from "@/components/web-shop/FAQWebshop";
import ResultsWebShop from "@/components/web-shop/ResultsWebShop";
import CtaWebShop from "@/components/web-shop/CtaWebShop";

export const metadata: Metadata = {
  title:
    "Izrada Web Shopa - Profesionalne Online Prodavnice | Manikam Web Solutions",
  description:
    "Profesionalna izrada web shopova i e-commerce rešenja. Kompletne online prodavnice sa integrisanim plaćanjem, upravljanjem zalihama, SEO optimizacijom i mobilnom prilagodbom za maksimalne rezultate.",
  keywords: [
    "izrada web shopa",
    "online prodavnica",
    "e-commerce",
    "web shop",
    "internet prodavnica",
    "online trgovina",
    "e-commerce rešenja",
    "web shop development",
    "online store",
    "digitalna prodavnica",
  ],
  alternates: {
    canonical: "https://manikamwebsolutions.com/sr/izrada-web-shopa",
    languages: {
      sr: "https://manikamwebsolutions.com/sr/izrada-web-shopa",
      en: "https://manikamwebsolutions.com/en/webshop-development",
    },
  },
};

const page = () => {
  return (
    <div className=" bg-gray-900/90 ">
      {/* Hero sekcija */}
      <div className="pt-24 pb-6 md:pb-16 px-4">
        <HeroWebshop />
      </div>

      {/* Glavna sekcija sa sadržajem */}
      <div className="container mx-auto px-3 md:px-16 pb-16">
        <IntroWebshop />
        <PaketeWebshop />
        <ResultsWebShop />
        <CtaWebShop />
        <FeaturesWebshop />
        {/* Proces izrade */}
        <ProcesWebshop />
        {/* FAQ */}
        <FAQWebshop />
      </div>
    </div>
  );
};

export default page;
