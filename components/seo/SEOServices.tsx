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
      "Kvalitetni backlink building",
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
    <div>
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8 md:mb-12 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
        Kompletna SEO Rešenja
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100"
          >
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent mb-4 md:mb-6 pb-4 border-b-2 border-gray-200">
              {service.category}
            </h3>
            <ul className="space-y-3">
              {service.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-3">
                  <FaCheckCircle className="text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
