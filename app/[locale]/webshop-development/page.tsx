import React from "react";
import type { Metadata } from "next";
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
  title: "Webshop Development - E-commerce Solutions | Manikam Web Solutions",
  description: "Professional webshop and e-commerce development. Custom online store solutions with integrated payments, inventory management, and SEO optimization tailored to your business.",
  alternates: {
    canonical: "https://manikamwebsolutions.com/en/webshop-development",
    languages: {
      sr: "https://manikamwebsolutions.com/sr/izrada-web-shopa",
      en: "https://manikamwebsolutions.com/en/webshop-development",
    },
  },
};

const defaultSection = {
  title: "Professional online stores",
  span: "that boost",
  title2: "your sales!",
  title3: "",
  span2: "+12408103730",
  phone: "+12408103730",
  subtitle: "Your business deserves a",
  span3: "webshop",
  subtitle2: "that works 24/7 and delivers results",
  span4: "Call us",
  subtitle3: "to launch your success",
  span5: "!",
  email_button: "Send email",
  email_address: "manikamwebsolutions@gmail.com",
  call_button: "Call us"
};

export default async function WebshopDevelopment({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const awaitedParams = await params;
  const localeParam = awaitedParams.locale;
  const locale = isValidLocale(localeParam) ? localeParam : i18n.defaultLocale;
  const intl = await getIntl(locale);
  const messages = intl.messages as unknown as Messages;

  const heroTitle = "Webshop development that delivers results!";
  
  const webshopCards = [
    {
      title: "Need an online store that works 24/7?",
      mim: "We create professional webshops with integrated payment systems, inventory management, and automated order processing. Your customers can shop anytime, anywhere, while you earn money while you sleep.",
      img: "/images/hero2.jpg"
    },
    {
      title: "Your webshop isn't attracting enough customers?",
      mim: "We design attractive and functional online stores that convert visitors into buyers. Focus on user experience, loading speed, and purchase simplicity for maximum results.",
      img: "/images/hero.jpg"
    },
    {
      title: "Want to automate sales and management?",
      mim: "Our webshops come with advanced admin panels for managing products, orders, customers, and inventory. Everything in one place with detailed sales reports.",
      img: "/images/sijalica.jpg"
    },
    {
      title: "Need integration with payment systems?",
      mim: "We'll integrate all popular payment methods - cards, PayPal, cash on delivery, bank transfers. Secure transactions with SSL certificates and protected customer data.",
      img: "/images/kljuc.jpg"
    },
    {
      title: "Want to stand out from the competition?",
      mim: "We create unique webshops tailored to your brand and target audience. SEO optimization, fast loading, and mobile optimization for better Google rankings.",
      img: "/images/planeta.jpg"
    }
  ];

  const webshopUsluge = [
    {
      img: "/images/7079603_3509262.svg",
      title: "BASIC WEBSHOP",
      text: "Complete online store up to 100 products with all necessary functionalities for successful sales",
      span: ""
    },
    {
      img: "/images/software.svg", 
      title: "ADVANCED WEBSHOP",
      text: "Custom webshop with unlimited products, advanced functionalities and integrations",
      span: ""
    },
    {
      img: "/images/cms.png",
      title: "CONTENT MANAGEMENT",
      text: "Simple admin panel for adding products, managing orders and tracking sales",
      span: ""
    },
    {
      img: "/images/seo.svg",
      title: "SEO OPTIMIZATION",
      text: "Search engine optimization so your webshop is easier to find and better ranked on Google",
      span: ""
    },
    {
      img: "/images/odrzavanje.png",
      title: "MAINTENANCE & SUPPORT",
      text: "Regular updates, security patches and technical support for smooth operation",
      span: ""
    },
    {
      img: "/images/ads.svg",
      title: "MARKETING & PROMOTION",
      text: "Google Ads campaigns, Facebook advertising and email marketing to increase sales",
      span: ""
    }
  ];

  const uslugeTitle = "Our webshop services";
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