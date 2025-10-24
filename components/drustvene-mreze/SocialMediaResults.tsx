"use client";

import { FaUsers, FaHeart, FaEye, FaShoppingCart } from "react-icons/fa";

const results = [
  {
    icon: FaUsers,
    metric: "300%",
    label: "Prosečan Rast Pratilaca",
  },
  {
    icon: FaHeart,
    metric: "450%",
    label: "Povećanje Angažmana",
  },
  {
    icon: FaEye,
    metric: "500K+",
    label: "Prosečan Mesečni Doseg",
  },
  {
    icon: FaShoppingCart,
    metric: "5x",
    label: "ROI na Reklamne Kampanje",
  },
];

export default function SocialMediaResults() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
        Rezultati Kojima Se Ponosimo
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {results.map((result, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 md:p-8 shadow-lg text-center border border-gray-100"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <result.icon className="text-2xl text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {result.metric}
            </div>
            <p className="text-gray-700 font-medium">{result.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 md:mt-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-3 text-lg">Organski Rast</h3>
          <p className="text-gray-600 text-sm">
            Kvalitetnim sadržajem i strategijom postižemo organski rast pratilaca
            i angažmana bez velikih budžeta za reklame.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-3 text-lg">Viralnost</h3>
          <p className="text-gray-600 text-sm">
            Kreiramo sadržaj koji ljudi vole da dele - povećavamo doseg
            i vidljivost vašeg brenda prirodnim putem.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-3 text-lg">Konverzije</h3>
          <p className="text-gray-600 text-sm">
            Ne samo lajkovi - fokusiramo se na konverzije, lead generisanje
            i direktan uticaj na vašu prodaju i prihod.
          </p>
        </div>
      </div>
    </div>
  );
}
