"use client";

import { FaCheckCircle } from "react-icons/fa";

const services = [
  {
    category: "On-Page SEO",
    items: [
      "Optimizacija meta tagova i opisa",
      "Optimizacija naslova i sadržaja",
      "Optimizacija slika i alt atributa",
      "Interna povezanost stranica",
      "Optimizacija URL strukture",
      "Schema markup implementacija",
    ],
  },
  {
    category: "Off-Page SEO",
    items: [
      "Guest posting na relevantnim sajtovima",
      "Social signals optimizacija",
      "Brand mention praćenje",
      "Influencer outreach",
      "PR strategija",
    ],
  },
  {
    category: "Tehnički SEO",
    items: [
      "Optimizacija brzine sajta",
      "Mobile-first optimizacija",
      "XML sitemap kreiranje",
      "Robots.txt optimizacija",
      "HTTPS i sigurnosni protokoli",
      "Strukturirani podaci",
    ],
  },
  {
    category: "Lokalni SEO",
    items: [
      "Google My Business optimizacija",
      "Lokalne citacije",
      "Optimizacija za lokalne ključne reči",
      "Google Maps rangiranje",
      "Lokalni recenzije management",
      "NAP konzistentnost",
    ],
  },
];

export default function SEOServices() {
  return (
    <div className="mt-16 bg-gradient-to-br from-gray-900 via-gray-700 to-orange-500 rounded-2xl p-4 md:p-8 shadow-lg border border-gray-100">
      <h2 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
        Kompletna SEO Rešenja
      </h2>
      <p className="text-center text-gray-100 mb-12 max-w-4xl mx-auto">
        Naš tim eksperata pruža sveobuhvatne SEO usluge koje pokrivaju sve
        aspekte optimizacije. Od tehničkih detalja do sadržajnih strategija,
        garantujemo rezultate koji donose vrednost vašem biznisu.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              {service.category}
            </h3>
            <ul className="space-y-2">
              {service.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center gap-2">
                  <FaCheckCircle className="text-orange-500 flex-shrink-0 " />
                  <span className="text-gray-600 ">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
