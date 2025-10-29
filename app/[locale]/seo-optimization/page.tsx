import React from "react";
import type { Metadata } from "next";
import SeoOptimizationClient from "./SeoOptimizationClient";

export const metadata: Metadata = {
  title:
    "SEO Optimization - Improve Your Site's Visibility | Manikam Dev Solutions",
  description:
    "Professional SEO optimization that delivers organic traffic. Increase your Google ranking, attract targeted audience and grow your business. Over 10 years of experience.",
  keywords: [
    "SEO optimization",
    "search engine optimization",
    "Google ranking",
    "organic traffic",
    "SEO services",
    "website optimization",
    "local SEO",
    "technical SEO",
    "SEO strategy",
    "search visibility",
  ],
  alternates: {
    canonical: "https://manikamwebsolutions.com/en/seo-optimization",
    languages: {
      sr: "https://manikamwebsolutions.com/sr/seo-optimizacija",
      en: "https://manikamwebsolutions.com/en/seo-optimization",
    },
  },
};

const page = () => {
  return <SeoOptimizationClient />;
};

export default page;
