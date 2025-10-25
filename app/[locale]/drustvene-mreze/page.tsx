import React from "react";
import type { Metadata } from "next";
import DrustveneМrezeClient from "./DrustveneМrezeClient";

export const metadata: Metadata = {
  title: "Upravljanje Društvenim Mrežama - Facebook i Instagram Marketing | Manikam Dev Solutions",
  description:
    "Profesionalno upravljanje Facebook i Instagram profilima. Kreiranje sadržaja, oglašavanje, povećanje angažmana i izgradnja brenda na društvenim mrežama. Prilagođene strategije za vaš biznis.",
  keywords: [
    "društvene mreže",
    "social media marketing",
    "facebook marketing",
    "instagram marketing",
    "upravljanje drustvenim mrezama",
    "facebook oglašavanje",
    "instagram oglašavanje",
    "kreiranje sadržaja",
    "content marketing",
    "social media strategy",
    "facebook ads",
    "instagram ads",
    "povećanje pratilaca",
    "engagement",
    "influencer marketing",
  ],
  alternates: {
    canonical: "https://manikamwebsolutions.com/sr/drustvene-mreze",
    languages: {
      sr: "https://manikamwebsolutions.com/sr/drustvene-mreze",
      en: "https://manikamwebsolutions.com/en/social-media",
    },
  },
  openGraph: {
    title: "Upravljanje Društvenim Mrežama - Facebook i Instagram Marketing | Manikam Dev Solutions",
    "description":
      "Profesionalno upravljanje Facebook i Instagram profilima. Povećajte angažman i doseg na društvenim mrežama.",
    type: "website",
  },
};

const page = () => {
  return <DrustveneМrezeClient />;
};

export default page;
