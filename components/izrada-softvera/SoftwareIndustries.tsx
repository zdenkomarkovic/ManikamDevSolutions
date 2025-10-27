"use client";

import {
  FaShoppingCart,
  FaBriefcase,
  FaHeart,
  FaGraduationCap,
  FaHome,
  FaIndustry,
  FaTruck,
  FaHotel,
} from "react-icons/fa";

const industries = [
  {
    icon: FaShoppingCart,
    name: "E-commerce i Retail",
    description: "Online prodavnice, inventory management, POS sistemi",
  },
  {
    icon: FaBriefcase,
    name: "B2B Servisi",
    description: "CRM, project management, billing sistemi",
  },
  {
    icon: FaHeart,
    name: "Zdravstvo",
    description: "Patient management, appointment scheduling, telemedicine",
  },
  {
    icon: FaGraduationCap,
    name: "Edukacija",
    description: "LMS platforme, online kursevi, student management",
  },
  {
    icon: FaHome,
    name: "Nekretnine",
    description: "Property management, listing portals, CRM za agencije",
  },
  {
    icon: FaIndustry,
    name: "Proizvodnja",
    description: "MES sistemi, production tracking, quality control",
  },
  {
    icon: FaTruck,
    name: "Logistika",
    description: "Fleet management, route optimization, warehouse systems",
  },
  {
    icon: FaHotel,
    name: "Hotelijerstvo",
    description: "Booking sistemi, PMS, revenue management",
  },
];

export default function SoftwareIndustries() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">
        Industrije Sa Kojima Radimo
      </h2>
      <p className="text-center text-white mb-8 md:mb-12 max-w-2xl mx-auto">
        Razvijamo custom softvere za različite industrije i poslovne sektore
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <industry.icon className="text-2xl text-white" />
            </div>
            <h3 className="font-bold text-gray-900 text-center mb-2">
              {industry.name}
            </h3>
            <p className=" text-center">{industry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
