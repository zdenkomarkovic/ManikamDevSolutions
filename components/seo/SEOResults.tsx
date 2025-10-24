"use client";

import { FaChartLine, FaUsers, FaTrophy, FaBullseye } from "react-icons/fa";

const results = [
  {
    icon: FaChartLine,
    metric: "250%",
    label: "Prosečan Rast Organskog Saobraćaja",
  },
  {
    icon: FaUsers,
    metric: "180%",
    label: "Povećanje Kvalifikovanih Posetilaca",
  },
  {
    icon: FaTrophy,
    metric: "TOP 3",
    label: "Pozicije za Ključne Reči",
  },
  {
    icon: FaBullseye,
    metric: "95%",
    label: "Stopa Zadovoljstva Klijenata",
  },
];

export default function SEOResults() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8 md:mb-12 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
        Rezultati Kojima Se Ponosimo
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {results.map((result, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-xl p-6 md:p-8 shadow-lg text-center border border-gray-100"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <result.icon className="text-2xl text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {result.metric}
            </div>
            <p className="text-gray-700 font-medium">{result.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 md:mt-12 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl md:rounded-3xl p-6 md:p-8 text-center shadow-lg border border-gray-100">
        <p className="text-lg md:text-2xl font-semibold mb-2 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
          Prosečno vreme do prvih vidljivih rezultata
        </p>
        <p className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">3-6 meseci</p>
        <p className="text-base md:text-lg text-gray-700">
          SEO je maraton, ne sprint - ali rezultati traju dugoročno!
        </p>
      </div>
    </div>
  );
}
