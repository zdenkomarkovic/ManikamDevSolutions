"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaCreditCard,
  FaBoxes,
  FaTruck,
  FaUserFriends,
  FaChartLine,
  FaSearch,
  FaBell,
  FaMobile,
} from "react-icons/fa";

const features = [
  {
    icon: FaShoppingCart,
    title: "Katalog Proizvoda",
    description:
      "Neograničen broj proizvoda sa kategorijama, filterima, varijantama (veličine, boje), galerijom slika i detaljnim opisima. Podrška za virtuelne i digitalne proizvode.",
  },
  {
    icon: FaCreditCard,
    title: "Sistemi Plaćanja",
    description:
      "Integracija sa svim popularnim gateway-ima: kartice (Visa, MasterCard), PayPal, bankarske uplate, pouzeće. Sigurno i brzo procesiranje svih transakcija.",
  },
  {
    icon: FaBoxes,
    title: "Upravljanje Zalihama",
    description:
      "Automatsko praćenje stanja zaliha, notifikacije kada je zaliha pri kraju, upravljanje varijantama proizvoda i skladišnim lokacijama.",
  },
  {
    icon: FaTruck,
    title: "Dostava i Logistika",
    description:
      "Integracija sa kurirskim službama (Post Express, AKS, BEX), automatsko kreiranje nalepnica, praćenje pošiljki i kalkulacija troškova dostave.",
  },
  {
    icon: FaUserFriends,
    title: "Korisnički Nalozi",
    description:
      "Registracija i prijava kupaca, history porudžbina, wish liste, sačuvane adrese, praćenje statusa narudžbina u realnom vremenu.",
  },
  {
    icon: FaChartLine,
    title: "Analitika i Izveštaji",
    description:
      "Detaljni izveštaji o prodaji, najprodavaniji proizvodi, analiza korisničkog ponašanja, konverzije, napuštene korpe i ROI praćenje.",
  },
  {
    icon: FaSearch,
    title: "SEO Optimizacija",
    description:
      "Ugrađena SEO optimizacija za sve stranice, meta tagovi za proizvode, rich snippets, sitemap, optimizovane URL strukture i schema markup.",
  },
  {
    icon: FaBell,
    title: "Email Notifikacije",
    description:
      "Automatski emailovi za potvrde porudžbina, promene statusa, tracking informacije, newsletter kampanje i personalizovane ponude.",
  },
  {
    icon: FaMobile,
    title: "Mobilna Aplikacija",
    description:
      "Opciono: Native mobilne aplikacije za iOS i Android sa push notifikacijama, QR skeniranjem i offline mogućnostima.",
  },
];

const FeaturesWebshop = () => {
  return (
    <div className="mt-16 bg-gradient-to-br from-gray-900 via-gray-700 to-orange-600 rounded-2xl p-8 shadow-lg border border-gray-100">
      <div className="flex justify-center mb-8">
        <motion.h2
          className="text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ključne funkcionalnosti našeg web shopa
        </motion.h2>
      </div>
      <motion.p
        className="text-center text-gray-100 mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Naša platforma obuhvata sve što vam je potrebno za uspešan online
        biznis. Svaka funkcionalnost je pažljivo dizajnirana da pruži najbolje
        iskustvo kako vama tako i vašim kupcima.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon className="text-2xl text-orange-600" />
                <h3 className="text-lg font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesWebshop;
