"use client";

import {
  FaSearch,
  FaFileAlt,
  FaLink,
  FaMobileAlt,
  FaChartLine,
  FaMapMarkerAlt,
  FaCog,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    icon: FaSearch,
    title: "Istraživanje Ključnih Reči",
    description: "Identifikujemo najprofitabilnije ključne reči za vaš biznis i industriju.",
  },
  {
    icon: FaFileAlt,
    title: "Optimizacija Sadržaja",
    description: "Kreiramo i optimizujemo sadržaj koji rangira i privlači korisnike.",
  },
  {
    icon: FaCog,
    title: "Tehnički SEO",
    description: "Optimizujemo brzinu, strukturu i tehničke aspekte vašeg sajta.",
  },
  {
    icon: FaLink,
    title: "Link Building",
    description: "Gradimo kvalitetne backlink-ove koji povećavaju autoritet vašeg sajta.",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile SEO",
    description: "Osiguravamo savršenu optimizaciju za mobilne uređaje.",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Lokalni SEO",
    description: "Poboljšavamo vidljivost u lokalnim rezultatima pretrage.",
  },
  {
    icon: FaChartLine,
    title: "Analitika i Izveštaji",
    description: "Detaljno praćenje performansi i redovni izveštaji o napretku.",
  },
  {
    icon: FaUsers,
    title: "Konkurentska Analiza",
    description: "Analiziramo konkurenciju i pronalazimo prilike za nadmašivanje.",
  },
];

export default function SEOFeatures() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8 md:mb-12 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
        Naše SEO Usluge
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-xl p-6 shadow-lg text-center border border-gray-100"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <feature.icon className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
