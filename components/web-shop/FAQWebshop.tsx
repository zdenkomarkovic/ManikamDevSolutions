"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "Koliko košta izrada web shopa?",
    answer:
      "Cena zavisi od brojnih faktora: broja proizvoda, kompleksnosti funkcionalnosti, integracija koje su potrebne, dizajna i specifičnih zahteva. Naš osnovni paket počinje od povoljnih cena za male biznise, dok premium rešenja sa naprednim funkcionalnostima mogu biti skuplja ali donose značajan ROI. Kontaktirajte nas za personalizovanu ponudu.",
  },
  {
    question: "Koliko traje izrada web shopa?",
    answer:
      "Osnovni web shop se može završiti za 10-14 dana. Profesionalni web shopovi sa više funkcionalnosti obično traju 14-21 dan, dok kompleksna enterprise rešenja mogu trajati 21-30 dana ili više. Vreme zavisi od broja proizvoda, integracija i specifičnih zahteva. Tokom razvoja redovno vas ažuriramo o napretku.",
  },
  {
    question: "Da li mogu sam dodavati i menjati proizvode?",
    answer:
      "Apsolutno! Svi naši web shopovi dolaze sa intuitivnim admin panelom gde možete lako dodavati nove proizvode, menjati cene, upravljati zalihama, pratiti porudžbine i sve ostale funkcije. Pružamo vam detaljnu obuku i dokumentaciju. Admin panel je dizajniran da bude jednostavan za korišćenje bez tehničkog znanja.",
  },
  {
    question: "Koje payment gateway-e podržavate?",
    answer:
      "Integrišemo sve popularne payment gateway-e: bankarske kartice (Visa, MasterCard, Maestro), PayPal, Stripe, lokalne banke, pouzeće. Svi payment procesi su potpuno sigurni i kompatibilni sa PCI DSS standardima.",
  },
  {
    question: "Da li je web shop SEO optimizovan?",
    answer:
      "Da, SEO optimizacija je ugrađena u sve naše web shopove. Implementiramo najbolje SEO prakse: optimizovane URL strukture, meta tagove za svaki proizvod, rich snippets, schema markup za proizvode, optimizaciju brzine, mobilnu prilagodljivost i sve ostalo što Google rangira. Rezultat je bolja vidljivost i više organskog saobraćaja.",
  },
  {
    question: "Šta se dešava posle lansiranja? Da li pružate podršku?",
    answer:
      "Nakon lansiranja pružamo tehničku podršku koja je uključena u paket (3-6 meseci zavisno od paketa). Pomažemo vam sa svim pitanjima, rešavamo eventualne probleme i radimo na optimizacijama. Nakon inicijalnog perioda, možete nastaviti sa našim servisom održavanja ili upravljati web shopom samostalno.",
  },
  {
    question: "Da li mogu migrirati postojeći web shop?",
    answer:
      "Da, možemo migrirati vaš postojeći web shop sa bilo koje platforme (WooCommerce, Shopify, Magento, PrestaShop) na našu optimizovanu custom platformu. Migracija uključuje sve proizvode, klijente, porudžbine, kategorije i ostale podatke. Vaš web shop će nakon migracije biti brži, sigurniji i bolje optimizovan.",
  },
];

const FAQWebshop = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      x: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="mt-16 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-4 md:p-8 shadow-lg border border-gray-100">
      <motion.h2
        className="text-3xl font-extrabold text-center mb-12 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Često postavljana pitanja o web shopovima
      </motion.h2>
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`${index !== faqs.length - 1 ? "border-b border-gray-200 pb-6" : "pb-6"} border-l-4 border-orange-500 rounded-lg pl-4 md:pl-6`}
            variants={itemVariants}
            whileHover={{
              x: 10,
              transition: { duration: 0.3 }
            }}
          >
            <motion.h3
              className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              {faq.question}
            </motion.h3>
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {faq.answer}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQWebshop;
