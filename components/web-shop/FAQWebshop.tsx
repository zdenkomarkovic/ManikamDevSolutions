import React from "react";

const FAQWebshop = () => {
  return (
    <div className="mt-16 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-8 shadow-lg border border-gray-100">
      <h2 className="text-3xl font-extrabold text-center mb-12 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
        Često postavljana pitanja o web shopovima
      </h2>
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Koliko košta izrada web shopa?
          </h3>
          <p className="text-gray-600">
            Cena zavisi od brojnih faktora: broja proizvoda, kompleksnosti
            funkcionalnosti, integracija koje su potrebne, dizajna i specifičnih
            zahteva. Naš osnovni paket počinje od povoljnih cena za male
            biznise, dok premium rešenja sa naprednim funkcionalnostima mogu
            biti skuplja ali donose značajan ROI. Kontaktirajte nas za
            personalizovanu ponudu.
          </p>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Koliko traje izrada web shopa?
          </h3>
          <p className="text-gray-600">
            Osnovni web shop se može završiti za 10-14 dana. Profesionalni web
            shopovi sa više funkcionalnosti obično traju 14-21 dan, dok
            kompleksna enterprise rešenja mogu trajati 21-30 dana ili više.
            Vreme zavisi od broja proizvoda, integracija i specifičnih zahteva.
            Tokom razvoja redovno vas ažuriramo o napretku.
          </p>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Da li mogu sam dodavati i menjati proizvode?
          </h3>
          <p className="text-gray-600">
            Apsolutno! Svi naši web shopovi dolaze sa intuitivnim admin panelom
            gde možete lako dodavati nove proizvode, menjati cene, upravljati
            zalihama, pratiti porudžbine i sve ostale funkcije. Pružamo vam
            detaljnu obuku i dokumentaciju. Admin panel je dizajniran da bude
            jednostavan za korišćenje bez tehničkog znanja.
          </p>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Koje payment gateway-e podržavate?
          </h3>
          <p className="text-gray-600">
            Integrišemo sve popularne payment gateway-e: bankarske kartice
            (Visa, MasterCard, Maestro), PayPal, Stripe, lokalne banke, pouzeće.
            Svi payment procesi su potpuno sigurni i kompatibilni sa PCI DSS
            standardima.
          </p>
        </div>
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Da li je web shop SEO optimizovan?
          </h3>
          <p className="text-gray-600">
            Da, SEO optimizacija je ugrađena u sve naše web shopove.
            Implementiramo najbolje SEO prakse: optimizovane URL strukture, meta
            tagove za svaki proizvod, rich snippets, schema markup za proizvode,
            optimizaciju brzine, mobilnu prilagodljivost i sve ostalo što Google
            rangira. Rezultat je bolja vidljivost i više organskog saobraćaja.
          </p>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Šta se dešava posle lansiranja? Da li pružate podršku?
          </h3>
          <p className="text-gray-600">
            Nakon lansiranja pružamo tehničku podršku koja je uključena u paket
            (3-6 meseci zavisno od paketa). Pomažemo vam sa svim pitanjima,
            rešavamo eventualne probleme i radimo na optimizacijama. Nakon
            inicijalnog perioda, možete nastaviti sa našim servisom održavanja
            ili upravljati web shopom samostalno.
          </p>
        </div>

        <div className="pb-6">
          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Da li mogu migrirati postojeći web shop?
          </h3>
          <p className="text-gray-600">
            Da, možemo migrirati vaš postojeći web shop sa bilo koje platforme
            (WooCommerce, Shopify, Magento, PrestaShop) na našu optimizovanu
            custom platformu. Migracija uključuje sve proizvode, klijente,
            porudžbine, kategorije i ostale podatke. Vaš web shop će nakon
            migracije biti brži, sigurniji i bolje optimizovan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQWebshop;
