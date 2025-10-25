import { Metadata } from "next";
import SoftwarePageClient from "./SoftwarePageClient";

export const metadata: Metadata = {
  title: "Izrada Softvera i Custom Aplikacija po Meri | Manikam Dev Solutions",
  description:
    "Profesionalna izrada custom softvera, web aplikacija, desktop i mobilnih aplikacija po vašim potrebama. Automatizacija poslovnih procesa, ERP, CRM i integracioni sistemi. Skalabilna rešenja sa najnovijim tehnologijama.",
  keywords: [
    "izrada softvera",
    "custom software development",
    "web aplikacije",
    "desktop aplikacije",
    "mobilne aplikacije",
    "automatizacija procesa",
    "erp sistem",
    "crm sistem",
    "business software",
    "enterprise software",
    "software po meri",
    "custom aplikacije",
    "fullstack development",
    "backend development",
    "frontend development",
  ],
  alternates: {
    canonical: "https://manikamwebsolutions.com/sr/izrada-softvera",
    languages: {
      sr: "https://manikamwebsolutions.com/sr/izrada-softvera",
    },
  },
  openGraph: {
    title: "Izrada Softvera i Custom Aplikacija po Meri | Manikam Dev Solutions",
    description:
      "Profesionalna izrada custom softvera i aplikacija po vašim potrebama. Automatizacija, ERP, CRM i integracioni sistemi.",
    type: "website",
  },
};

export default function IzradaSoftveraPage() {
  return <SoftwarePageClient />;
}
