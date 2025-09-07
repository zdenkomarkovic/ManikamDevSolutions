import React from "react";
import type { Metadata } from "next";
import WebShopComponent from "@/components/WebShopComponent";

export const metadata: Metadata = {
  title: "Izrada web shopa - Online prodavnica | Manikam Web Solutions",
  description: "Profesionalna izrada web shopova i online prodavnica. E-commerce rešenja prilagođena vašem biznisu.",
  alternates: {
    canonical: "https://manikamwebsolutions.com/sr/izrada-web-shopa",
    languages: {
      sr: "https://manikamwebsolutions.com/sr/izrada-web-shopa",
      en: "https://manikamwebsolutions.com/en/webshop-development",
    },
  },
};

const IzradaWebShopa = () => {
  return (
    <div className="pt-20 md:py-20 space-y-10">
      <div className="container px-2 md:px-4 mx-auto space-y-5 md:space-y-20">
        <div className="md:px-32 py-4 text-base md:text-[22px] mx-auto space-y-8">
          <h2 className="text-center text-3xl md:text-6xl md:pb-20">
            Izrada web shopa
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="md:hidden">
              <p className="first-letter:pl-6">
                Tehnologije u kojima radimo su{" "}
                <span className="font-bold">React.js Node.js Next.js</span>. Ne
                koristimo WordPress ili druge popularne graditelje sajtova. Web shop
                koji razvijamo za vas biće tehnički superiorniji, brži i bolje
                optimizovan, što je ključni faktor za SEO, što osigurava bolju
                poziciju na pretraživačima i veću vidljivost, čemu svi težimo.
              </p>
            </div>
            
            <WebShopComponent />

            <div className="md:space-y-20">
              <p className="first-letter:pl-6 hidden md:block">
                Tehnologije u kojima radimo su{" "}
                <span className="font-bold">React.js Node.js Next.js</span>. Ne
                koristimo WordPress ili druge popularne graditelje sajtova. Web shop
                koji razvijamo za vas biće tehnički superiorniji, brži i bolje
                optimizovan, što je ključni faktor za SEO, što osigurava bolju
                poziciju na pretraživačima i veću vidljivost, čemu svi težimo.
              </p>
              <p className="first-letter:pl-6">
                Ovaj paket pruža sve što je potrebno za izvanredan web shop. Ako
                imate specifične zahteve, kreiraćemo jedinstveni paket potpuno
                prilagođen vašim potrebama. Možete dodati napredni SEO, poseban
                dizajn ili bilo šta drugo iz naše palete usluga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IzradaWebShopa;