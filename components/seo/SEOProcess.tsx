"use client";

import {
  FaSearch,
  FaBullseye,
  FaTools,
  FaChartLine,
  FaClipboardList,
  FaSyncAlt,
} from "react-icons/fa";

const steps = [
  {
    icon: FaSearch,
    title: "Analiza i Audit",
    description:
      "Detaljno analiziramo trenutno stanje vašeg sajta, konkurenciju i industriju.",
  },
  {
    icon: FaBullseye,
    title: "Strategija i Planiranje",
    description:
      "Kreiramo prilagođenu SEO strategiju baziranu na vašim ciljevima i budžetu.",
  },
  {
    icon: FaTools,
    title: "Implementacija",
    description:
      "Primenjujemo tehničke optimizacije, kreiramo sadržaj i gradimo linkove.",
  },
  {
    icon: FaChartLine,
    title: "Monitoring i Optimizacija",
    description:
      "Kontinuirano pratimo performanse i optimizujemo strategiju za najbolje rezultate.",
  },
  {
    icon: FaClipboardList,
    title: "Izveštavanje",
    description: "Dostavljamo detaljne mesečne izveštaje sa jasnim metrikama.",
  },
  {
    icon: FaSyncAlt,
    title: "Kontinuirano Poboljšanje",
    description:
      "SEO je kontinuiran proces - stalno unapređujemo strategiju i prilagođavamo se promenama.",
  },
];

export default function SEOProcess() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8 md:mb-12 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
        Naš SEO Proces
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-6 shadow-lg border border-gray-100"
          >
            <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-300 rounded-xl flex items-center justify-center mb-4">
              <step.icon className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 md:mt-12 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl md:rounded-3xl p-6 md:p-8 text-center shadow-lg border border-gray-100">
        <p className="text-lg md:text-2xl font-semibold mb-2 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
          Prosečno vreme do prvih vidljivih rezultata
        </p>
        <p className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">
          3-6 meseci
        </p>
        <p className="text-base md:text-lg text-gray-700">
          SEO je maraton, ne sprint - ali rezultati traju dugoročno!
        </p>
      </div>
    </div>
  );
}
