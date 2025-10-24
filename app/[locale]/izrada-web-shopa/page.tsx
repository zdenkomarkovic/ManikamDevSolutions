import React from "react";
import type { Metadata } from "next";
import IzradaWebShopaClient from "./IzradaWebShopaClient";

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
  return <IzradaWebShopaClient />;
};

export default page;
