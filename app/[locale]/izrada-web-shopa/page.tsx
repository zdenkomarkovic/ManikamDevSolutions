import React from "react";
import type { Metadata } from "next";
import WebShopComponent from "@/components/WebShopComponent";
import Hero from "@/components/Hero";
import Section1 from "@/components/Section1";
import Usluge from "@/components/Usluge";
import Reference from "@/components/Reference";
import { generateAlternateLinks } from "@/lib/seo";
import { Messages } from "@/types/messages";
import { getIntl } from "../../../lib/intl";
import { i18n } from "@/i18n-config";
import { isValidLocale } from "@/lib/locale";
import ParticlesBackground from "@/components/ParticlesBackground";

export const metadata: Metadata = {
  title: "Izrada web shopa - Online prodavnica | Manikam Web Solutions",
  description: "Profesionalna izrada web shopova i online prodavnica. E-commerce rešenja prilagođena vašem biznisu sa integrisanim plaćanjem, upravljanjem zalihama i SEO optimizacijom.",
  alternates: {
    canonical: "https://manikamwebsolutions.com/sr/izrada-web-shopa",
    languages: {
      sr: "https://manikamwebsolutions.com/sr/izrada-web-shopa",
      en: "https://manikamwebsolutions.com/en/webshop-development",
    },
  },
};

const defaultSection = {
  title: "Profesionalne online prodavnice",
  span: "koje povećavaju",
  title2: "vašu prodaju!",
  title3: "",
  span2: "+381641967267",
  phone: "+381641967267",
  subtitle: "Vaš biznis zaslužuje",
  span3: "web shop",
  subtitle2: "koji radi 24/7 i donosi rezultate",
  span4: "Pozovite nas",
  subtitle3: "da pokrenemo vaš uspeh",
  span5: "!",
  email_button: "Pošaljite email",
  email_address: "manikamwebsolutions@gmail.com",
  call_button: "Pozovite nas"
};

export default async function IzradaWebShopa({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const awaitedParams = await params;
  const localeParam = awaitedParams.locale;
  const locale = isValidLocale(localeParam) ? localeParam : i18n.defaultLocale;
  const intl = await getIntl(locale);
  const messages = intl.messages as unknown as Messages;

  const heroTitle = "Izrada web shopova koji donose rezultate!";
  
  const webshopCards = [
    {
      title: "Potrebna vam je online prodavnica koja radi 24/7?",
      mim: "Kreiramo profesionalne web shopove sa integrisanim sistemom plaćanja, upravljanjem zalihama i automatskim procesiranjem porudžbina. Vaši kupci mogu da kupuju bilo kada, bilo gde, a vi zarađujete dok spavate.",
      img: "/images/hero2.jpg"
    },
    {
      title: "Vaš web shop ne privlači dovoljno kupaca?",
      mim: "Dizajniramo atraktivne i funkcionalne online prodavnice koje konvertuju posetioce u kupce. Fokus na korisničko iskustvo, brzinu učitavanja i jednostavnost kupovine za maksimalne rezultate.",
      img: "/images/hero.jpg"
    },
    {
      title: "Želite da automatizujete prodaju i upravljanje?",
      mim: "Naši web shopovi dolaze sa naprednim admin panelom za upravljanje proizvodima, porudžbinama, kupcima i zalihama. Sve na jednom mestu sa detaljnim izveštajima o prodaji.",
      img: "/images/sijalica.jpg"
    },
    {
      title: "Potrebna vam je integracija sa sistemima plaćanja?",
      mim: "Integrisaćemo sve popularne načine plaćanja - kartice, PayPal, pouzeće, bankarske uplate. Sigurne transakcije sa SSL sertifikatom i zaštićenim podacima kupaca.",
      img: "/images/kljuc.jpg"
    },
    {
      title: "Želite da se izdvojite od konkurencije?",
      mim: "Kreiramo jedinstvene web shopove prilagođene vašem brendu i ciljnoj grupi. SEO optimizacija, brzo učitavanje i mobilna optimizacija za bolje rangiranje na Google-u.",
      img: "/images/planeta.jpg"
    }
  ];

  const webshopUsluge = [
    {
      img: "/images/7079603_3509262.svg",
      title: "OSNOVNI WEB SHOP",
      text: "Kompletna online prodavnica do 100 proizvoda sa svim potrebnim funkcionalnostima za uspešnu prodaju",
      span: ""
    },
    {
      img: "/images/software.svg", 
      title: "NAPREDNI WEB SHOP",
      text: "Prilagođeni web shop sa neograničenim brojem proizvoda, naprednim funkcionalnostima i integracijama",
      span: ""
    },
    {
      img: "/images/cms.png",
      title: "UPRAVLJANJE SADRŽAJEM",
      text: "Jednostavan admin panel za dodavanje proizvoda, upravljanje porudžbinama i praćenje prodaje",
      span: ""
    },
    {
      img: "/images/seo.svg",
      title: "SEO OPTIMIZACIJA",
      text: "Optimizacija za pretraživače da vaš web shop bude lakše pronađen i bolje rangiran na Google-u",
      span: ""
    },
    {
      img: "/images/odrzavanje.png",
      title: "ODRŽAVANJE I PODRŠKA",
      text: "Redovno ažuriranje, sigurnosne zakrpe i tehnička podrška za nesmetano funkcionisanje",
      span: ""
    },
    {
      img: "/images/ads.svg",
      title: "MARKETING I PROMOCIJA",
      text: "Google Ads kampanje, Facebook oglašavanje i email marketing za povećanje prodaje",
      span: ""
    }
  ];

  const uslugeTitle = "Naše usluge za web shopove";
  const refLink = intl.formatMessage({ id: "reference.link" });
  const refTitle = intl.formatMessage({ id: "reference.title" });

  return (
    <main>
      <div className="">
        <ParticlesBackground />
        <Hero title={heroTitle} section={defaultSection} />
        <Section1 section={defaultSection} cards={webshopCards} />
        <Usluge usluge={webshopUsluge} title={uslugeTitle} />
        <Reference refLink={refLink} title={refTitle} />
      </div>
    </main>
  );
}