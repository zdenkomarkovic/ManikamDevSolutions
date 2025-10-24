"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const platforms = [
  {
    name: "WordPress",
    description: "Najpopularniji CMS sistem na svetu. Migriramo sve vrste WordPress sajtova - blogove, korporativne sajtove, portale, e-commerce (WooCommerce) i članarine sajtove. Zadržavamo sve vaše postove, stranice, medije, SEO postavke i redirekcije.",
    features: [
      "Svi postovi i stranice sa formatiranjem",
      "Slike, video i ostali mediji",
      "SEO meta podaci i Yoast optimizacije",
      "Custom post types i taksonomije",
      "WooCommerce proizvodi i kategorije",
      "Komentari i korisnički nalozi",
      "301 Redirects za SEO očuvanje",
    ],
  },
  {
    name: "Wix",
    description: "Popularan website builder sa drag-and-drop interfejsom. Migriramo kompletan dizajn, sadržaj i funkcionalnosti. Rezultat je sajt koji izgleda bolje od originala, sa drastično boljim performansama i bez Wix oglasa.",
    features: [
      "Kompletan vizuelni dizajn i layout",
      "Sav tekstualni i multimedialni sadržaj",
      "Kontakt forme i integracije",
      "Blog postovi i komentari",
      "Galerije i portfolia",
      "Custom domain i DNS setup",
      "Eliminacija Wix branding-a",
    ],
  },
  {
    name: "Joomla",
    description: "Moćan ali kompleksan CMS sistem. Pojednostavljujemo arhitekturu dok zadržavamo sve funkcionalnosti. Migracija uključuje sve module, komponente i ekstenzije koje koristite, prilagođene modernoj Next.js arhitekturi.",
    features: [
      "Svi članci i kategorije",
      "Joomla ekstenzije i moduli",
      "Multi-language setup",
      "Korisnička prava i grupe",
      "Custom komponente",
      "Media manager sadržaj",
      "ACL i permisije",
    ],
  },
  {
    name: "Squarespace",
    description: "Premium website builder fokusiran na dizajn. Vašu Squarespace viziju pretvaramo u Next.js realnost sa još lepšim dizajnom, bržim performansama i bez mesečnih troškova platforme.",
    features: [
      "Pixel-perfect dizajn transfer",
      "Portfolio i galerije",
      "Blog i newsletter integracije",
      "E-commerce funkcionalnosti",
      "Custom CSS i stilovi",
      "Analytics i tracking",
      "Forme i automatizacije",
    ],
  },
  {
    name: "Shopify / E-commerce",
    description: "Migracija online prodavnica sa Shopify-a, WooCommerce, Magento ili drugih platformi. Zadržavamo sve proizvode, varijante, inventar, kategorije i customer podatke. Integracija sa payment gateway-ima i shipping sistemima.",
    features: [
      "Svi proizvodi i varijante",
      "Kategorije i kolekcije",
      "Inventar i SKU kodovi",
      "Customer база i narudžbine",
      "Payment gateway integracije",
      "Shipping i tax kalkulacije",
      "Discount i promo kodovi",
    ],
  },
  {
    name: "Drupal, Webflow, Weebly i Ostali",
    description: "Imamo iskustvo sa migracijom sa svih popularnih platformi. Bez obzira koju platformu koristite, možemo preneti vaš sadržaj, dizajn i funkcionalnosti na Next.js uz potpuno očuvanje SEO vrednosti.",
    features: [
      "Custom content types",
      "Kompleksne taksonomije",
      "User-generated content",
      "Advanced forms",
      "Third-party integracije",
      "API connections",
      "Custom funkcionalnosti",
    ],
  },
];

export default function RedesignPlatforms() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Migriramo Sa Svih Platformi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bez obzira na trenutnu platformu, imamo iskustvo i alate za glatku i sigurnu migraciju
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-orange-600">{platform.name}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{platform.description}</p>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 mb-3">Šta Migriramo:</h4>
                {platform.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">
            Garantujemo Očuvanje SEO Vrednosti
          </h3>
          <p className="text-gray-700 text-center leading-relaxed mb-6">
            Jedan od najvećih strahova pri migraciji sajta je gubitak Google rangiranja i organskog saobraćaja. Mi garantujemo da ćete ne samo zadržati, već i poboljšati vaš SEO. Koristimo 301 redirects za sve stare URL-ove, zadržavamo meta tagove, strukturirane podatke i implementiramo SEO najbolje prakse.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">URL Redirects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">0</div>
              <div className="text-gray-600">Izgubljenih Podataka</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">+30%</div>
              <div className="text-gray-600">Avg. SEO Boost</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
