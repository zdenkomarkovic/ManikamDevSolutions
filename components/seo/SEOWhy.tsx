"use client";

import { FaShieldAlt, FaTrophy, FaUsers, FaBolt, FaHeart, FaHeadset } from "react-icons/fa";

const reasons = [
  {
    icon: FaTrophy,
    title: "10+ Godina Iskustva",
    description: "Dugogodišnje iskustvo u SEO industriji sa brojnim uspešnim projektima.",
  },
  {
    icon: FaUsers,
    title: "Posvećeni Stručnjaci",
    description: "Tim sertifikovanih SEO specijalista koji prate sve najnovije trendove.",
  },
  {
    icon: FaShieldAlt,
    title: "White-Hat Tehnike",
    description: "Koristimo samo etičke SEO prakse koje su u skladu sa Google smernicama.",
  },
  {
    icon: FaBolt,
    title: "Dokazani Rezultati",
    description: "Portfolio uspešnih projekata sa merljivim rezultatima i ROI-em.",
  },
  {
    icon: FaHeart,
    title: "Personalizovan Pristup",
    description: "Svaki klijent dobija prilagođenu strategiju baziranu na specifičnim potrebama.",
  },
  {
    icon: FaHeadset,
    title: "Kontinuirana Podrška",
    description: "Dostupni smo za pitanja i optimizacije tokom čitave saradnje.",
  },
];

export default function SEOWhy() {
  return (
    <div>
      <div className="flex justify-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
          Zašto Odabrati Nas?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-xl p-6 shadow-lg text-center border border-gray-100"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <reason.icon className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
