"use client";

import { FaSearch, FaLightbulb, FaPencilAlt, FaRocket, FaChartLine, FaSyncAlt } from "react-icons/fa";

const steps = [
  {
    icon: FaSearch,
    title: "Analiza i Istraživanje",
    description: "Analiziramo vašu industriju, konkurenciju, ciljnu publiku i trenutno stanje na društvenim mrežama.",
  },
  {
    icon: FaLightbulb,
    title: "Strategija i Planiranje",
    description: "Kreiramo personalizovanu strategiju sa ciljevima, tipovima sadržaja i planom objava.",
  },
  {
    icon: FaPencilAlt,
    title: "Kreiranje Sadržaja",
    description: "Dizajniramo grafike, pišemo tekstove i kreiramo video sadržaj prema content calendar-u.",
  },
  {
    icon: FaRocket,
    title: "Objava i Oglašavanje",
    description: "Redovno objavljujemo sadržaj i pokrećemo ciljane reklamne kampanje.",
  },
  {
    icon: FaChartLine,
    title: "Praćenje i Analiza",
    description: "Pratimo performanse, angažman, doseg i konverzije kroz detaljne analytics.",
  },
  {
    icon: FaSyncAlt,
    title: "Optimizacija",
    description: "Kontinuirano testiramo, učimo i optimizujemo strategiju za najbolje rezultate.",
  },
];

export default function SocialMediaProcess() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
        Naš Proces Upravljanja Društvenim Mrežama
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
          >
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
              {index + 1}
            </div>
            <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
              <step.icon className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
