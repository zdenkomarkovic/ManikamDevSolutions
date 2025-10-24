"use client";

import { FaLaptopCode, FaMobileAlt, FaDesktop, FaCloud, FaCogs, FaDatabase } from "react-icons/fa";

const types = [
  {
    icon: FaLaptopCode,
    title: "Web Aplikacije",
    description: "Kompleksne SaaS platforme, portali, dashboardi i business intelligence alati.",
    examples: "CRM, ERP, project management, booking sistemi, e-learning platforme",
  },
  {
    icon: FaMobileAlt,
    title: "Mobilne Aplikacije",
    description: "Native iOS i Android aplikacije ili cross-platform rešenja.",
    examples: "Business apps, delivery apps, fitness apps, finance apps",
  },
  {
    icon: FaDesktop,
    title: "Desktop Aplikacije",
    description: "Standalone desktop softver za Windows, macOS i Linux.",
    examples: "Accounting software, inventory management, POS sistemi, production tracking",
  },
  {
    icon: FaCloud,
    title: "Cloud Rešenja",
    description: "Skalabilne cloud aplikacije hosted na AWS, Azure ili Google Cloud.",
    examples: "Multi-tenant SaaS, microservices arhitektura, serverless aplikacije",
  },
  {
    icon: FaCogs,
    title: "Automatizacija Procesa",
    description: "Custom alati za automatizaciju repetitivnih poslovnih procesa.",
    examples: "Data processing, reporting automation, workflow engines, integration tools",
  },
  {
    icon: FaDatabase,
    title: "API i Integracije",
    description: "Backend sistemi, REST/GraphQL API-ji i integracije sa trećim servisima.",
    examples: "Payment gateways, shipping APIs, accounting software integrations",
  },
];

export default function SoftwareTypes() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
        Tipovi Softvera Koje Razvijamo
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {types.map((type, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <type.icon className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">{type.title}</h3>
            <p className="text-gray-700 mb-3 text-center">{type.description}</p>
            <div className="bg-gray-100 rounded-lg p-3 mt-4">
              <p className="text-sm text-gray-600">
                <strong>Primeri:</strong> {type.examples}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
