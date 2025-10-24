"use client";

import {
  FaShoppingCart,
  FaBriefcase,
  FaHeart,
  FaGraduationCap,
  FaHome,
  FaUtensils,
  FaTools,
  FaLaptop,
} from "react-icons/fa";

const industries = [
  { icon: FaShoppingCart, name: "E-commerce" },
  { icon: FaBriefcase, name: "B2B Usluge" },
  { icon: FaHeart, name: "Zdravstvo" },
  { icon: FaGraduationCap, name: "Edukacija" },
  { icon: FaHome, name: "Nekretnine" },
  { icon: FaUtensils, name: "Restorani" },
  { icon: FaTools, name: "Zanatstvo" },
  { icon: FaLaptop, name: "IT i SaaS" },
];

export default function SEOIndustries() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-4 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
        Industrije Sa Kojima Radimo
      </h2>
      <p className="text-center text-gray-100 mb-8 md:mb-12 max-w-2xl mx-auto">
        Imamo iskustvo u optimizaciji sajtova iz različitih industrija
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-xl p-6 shadow-lg text-center border border-gray-100"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center mx-auto mb-3">
              <industry.icon className="text-2xl text-white" />
            </div>
            <p className="font-semibold text-gray-900">{industry.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
