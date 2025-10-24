"use client";

import { FaShieldAlt, FaTachometerAlt, FaExpandArrowsAlt, FaMobileAlt, FaPlug, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: FaShieldAlt,
    title: "Sigurnost i Privatnost",
    description: "Enterprise-level sigurnost, enkripcija podataka, GDPR compliance i redovni security audits.",
  },
  {
    icon: FaTachometerAlt,
    title: "Visoke Performanse",
    description: "Optimizovan kod, caching strategije, load balancing i CDN za brzo učitavanje.",
  },
  {
    icon: FaExpandArrowsAlt,
    title: "Skalabilnost",
    description: "Arhitektura dizajnirana za rast - lako dodajete korisnike, podatke i funkcionalnosti.",
  },
  {
    icon: FaMobileAlt,
    title: "Responsive Design",
    description: "Savršeno funkcioniše na svim uređajima - desktop, tablet, mobilni telefon.",
  },
  {
    icon: FaPlug,
    title: "Integracije",
    description: "Povezivanje sa postojećim sistemima, API-jima i third-party servisima.",
  },
  {
    icon: FaUsers,
    title: "User-Friendly",
    description: "Intuitivan UI/UX dizajn, easy onboarding i minimalna kriva učenja za korisnike.",
  },
];

export default function SoftwareFeatures() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
        Karakteristike Našeg Softvera
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
