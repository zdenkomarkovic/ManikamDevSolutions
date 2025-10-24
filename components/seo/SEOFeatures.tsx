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
    description:
      "Identifikujemo najprofitabilnije ključne reči za vaš biznis i industriju.",
  },
  {
    icon: FaFileAlt,
    title: "Optimizacija Sadržaja",
    description:
      "Kreiramo i optimizujemo sadržaj koji rangira i privlači korisnike.",
  },
  {
    icon: FaCog,
    title: "Tehnički SEO",
    description:
      "Optimizujemo brzinu, strukturu i tehničke aspekte vašeg sajta.",
  },
  {
    icon: FaLink,
    title: "SEO Strategija",
    description:
      "Razvijamo sveobuhvatan plan optimizacije koji povezuje sadržaj, tehničke aspekte i poslovne ciljeve.",
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
    description:
      "Detaljno praćenje performansi i redovni izveštaji o napretku.",
  },
  {
    icon: FaUsers,
    title: "Konkurentska Analiza",
    description:
      "Analiziramo konkurenciju i pronalazimo prilike za nadmašivanje.",
  },
];

export default function SEOFeatures() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-extrabold text-center mb-12 bg-gradient-to-r from-orange-500 to-gray-300 bg-clip-text text-transparent">
        Naše SEO Usluge
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          // Alternativni gradienti za raznolikost
          const gradients = [
            "bg-gradient-to-bl from-gray-900 via-gray-800 to-orange-500",
            "bg-gradient-to-br from-gray-900 via-gray-800 to-orange-500",
            "bg-gradient-to-bl from-gray-900 via-gray-800 to-orange-500",
            "bg-gradient-to-br from-gray-900 via-gray-800 to-orange-500",
          ];
          return (
            <div
              key={index}
              className={`${
                gradients[index % 4]
              } rounded-xl p-6 shadow-lg text-center`}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-100">
                {feature.title}
              </h4>
              <p className="text-gray-100">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
