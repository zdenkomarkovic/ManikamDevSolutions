import React from "react";
import type { Metadata } from "next";
import WebshopDevelopmentClient from "./WebshopDevelopmentClient";

export const metadata: Metadata = {
  title: "Webshop Development - Professional E-commerce Solutions | Manikam Web Solutions",
  description: "Professional webshop development and e-commerce solutions. Complete online stores with integrated payments, inventory management, SEO optimization and mobile adaptation for maximum results.",
  keywords: [
    "webshop development",
    "online store",
    "e-commerce",
    "web shop",
    "internet store",
    "online shop",
    "e-commerce solutions",
    "web store development",
    "digital store",
    "online business"
  ],
  alternates: {
    canonical: "https://manikamwebsolutions.com/en/webshop-development",
    languages: {
      sr: "https://manikamwebsolutions.com/sr/izrada-web-shopa",
      en: "https://manikamwebsolutions.com/en/webshop-development",
    },
  },
};

const page = () => {
  return <WebshopDevelopmentClient />;
};

export default page;