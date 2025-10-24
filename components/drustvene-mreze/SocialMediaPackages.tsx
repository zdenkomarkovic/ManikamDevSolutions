"use client";

import { FaCheck } from "react-icons/fa";

const packages = [
  {
    name: "Starter Paket",
    price: "Od 150€/mesečno",
    description: "Idealno za male biznise koji počinju sa društvenim mrežama",
    features: [
      "Upravljanje 1 platformom (Facebook ili Instagram)",
      "8-12 postova mesečno",
      "Osnovno grafičko dizajniranje",
      "Hashtag research",
      "Odgovaranje na komentare i poruke",
      "Mesečni izveštaj sa analytics",
    ],
    highlight: false,
  },
  {
    name: "Profesionalni Paket",
    price: "Od 300€/mesečno",
    description: "Kompletno rešenje za ozbiljan online rast",
    features: [
      "Upravljanje 2 platforme (Facebook + Instagram)",
      "16-20 postova mesečno",
      "Profesionalni grafički dizajn i foto editing",
      "Instagram Stories (8-12 mesečno)",
      "Content calendar planiranje",
      "Community management (komentari, poruke, DM)",
      "Mesečni oglasni budžet od 100€ uključen",
      "Detaljni mesečni izveštaji i strategija",
    ],
    highlight: true,
  },
  {
    name: "Premium Paket",
    price: "Od 600€/mesečno",
    description: "Maksimalan rast sa video sadržajem i reklamama",
    features: [
      "Upravljanje 2 platforme (Facebook + Instagram)",
      "25-30 postova mesečno",
      "Premium grafički dizajn",
      "Instagram Reels i video produkcija (4-8 mesečno)",
      "Instagram Stories (15-20 mesečno)",
      "Influencer outreach i saradnje",
      "Mesečni oglasni budžet od 300€ uključen",
      "A/B testiranje i optimizacija kampanja",
      "Konkurentska analiza",
      "Bi-weekly (2x mesečno) konsultacije",
    ],
    highlight: false,
  },
];

export default function SocialMediaPackages() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">
        Paketi Usluga
      </h2>
      <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto">
        Odaberite paket koji odgovara vašim potrebama i budžetu. Svi paketi mogu se prilagoditi.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 relative ${
              pkg.highlight ? "border-blue-500" : "border-gray-200"
            }`}
          >
            {pkg.highlight && (
              <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-500 to-purple-600 text-white px-4 py-1 rounded-bl-2xl text-xs">
                <span className="font-bold">NAJPOPULARNIJI</span>
              </div>
            )}

            <h3 className="text-2xl font-bold mb-2 text-gray-800">{pkg.name}</h3>
            <div className="text-3xl font-bold text-orange-600 mb-3">{pkg.price}</div>
            <p className="text-gray-600 mb-6 text-sm">{pkg.description}</p>

            <div className="space-y-3 mb-6">
              {pkg.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start gap-3">
                  <FaCheck className="text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 text-center">
          Dodatne Usluge (À La Carte)
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Profesionalna fotografija</strong> - od 100€ po photo shoot-u</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Video produkcija</strong> - od 150€ po videu</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Influencer kampanje</strong> - custom pricing</span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Giveaway organizacija</strong> - od 200€</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Facebook/Instagram Shop setup</strong> - od 150€</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Dodatni oglasni budžet</strong> - po potrebi</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
