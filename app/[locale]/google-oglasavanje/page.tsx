import { Metadata } from "next";
import GoogleAdsHero from "@/components/google-ads/GoogleAdsHero";
import GoogleAdsIntro from "@/components/google-ads/GoogleAdsIntro";
import GoogleAdsFeatures from "@/components/google-ads/GoogleAdsFeatures";
import GoogleAdsServices from "@/components/google-ads/GoogleAdsServices";
import GoogleAdsProcess from "@/components/google-ads/GoogleAdsProcess";
import GoogleAdsResults from "@/components/google-ads/GoogleAdsResults";
import GoogleAdsWhy from "@/components/google-ads/GoogleAdsWhy";
import GoogleAdsIndustries from "@/components/google-ads/GoogleAdsIndustries";
import GoogleAdsFAQ from "@/components/google-ads/GoogleAdsFAQ";
import GoogleAdsCTA from "@/components/google-ads/GoogleAdsCTA";

export const metadata: Metadata = {
  title: "Google Oglašavanje i PPC Kampanje | Manikam Dev Solutions",
  description:
    "Profesionalne Google Ads kampanje koje donose rezultate. Povećajte prodaju i vidljivost brenda sa našim stručnim timom za digitalni marketing. Više od 10 godina iskustva u Google oglašavanju.",
  keywords: [
    "google oglašavanje",
    "google ads",
    "ppc kampanje",
    "google ads srbija",
    "digitalni marketing",
    "internet marketing",
    "google reklamiranje",
    "ads kampanje",
    "plaćeno oglašavanje",
    "sem kampanje",
  ],
  alternates: {
    canonical: "https://manikamwebsolutions.com/sr/google-oglasavanje",
    languages: {
      sr: "https://manikamwebsolutions.com/sr/google-oglasavanje",
    },
  },
  openGraph: {
    title: "Google Oglašavanje i PPC Kampanje | Manikam Dev Solutions",
    description:
      "Profesionalne Google Ads kampanje koje donose rezultate. Povećajte prodaju i vidljivost brenda.",
    type: "website",
  },
};

export default function GoogleOglasavanjePage() {
  return (
    <div className=" bg-gray-900/90 ">
      <section className="pt-24 pb-6 md:pb-16 px-4">
        <GoogleAdsHero />
      </section>

      <section className="container mx-auto px-3 md:px-16 pb-16">
        <div className="space-y-8 mb-8">
          <GoogleAdsIntro />
          <GoogleAdsFeatures />
          <GoogleAdsServices />
        </div>

        <GoogleAdsProcess />
        <GoogleAdsResults />
        <GoogleAdsWhy />
        <GoogleAdsFAQ />
        <GoogleAdsCTA />
      </section>
    </div>
  );
}
