import { Metadata } from "next";
import GoogleAdsPageClient from "./GoogleAdsPageClient";

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
  return <GoogleAdsPageClient />;
}
