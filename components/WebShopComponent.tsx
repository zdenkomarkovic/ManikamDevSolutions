"use client";

import React from "react";
import { motion } from "framer-motion";

const WebShopComponent = () => {
  const cardClass =
    " p-2 md:p-8 rounded-3xl shadow-xl md:shadow-2xl space-y-1 md:space-y-5 bg-gray-50  ";
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cardClass}
    >
      <h3 className=" py-3 font-bold">Osnovni paket: Web shop do 100 proizvoda</h3>

      <p>- Responzivan dizajn za sve uređaje (mobilni, tablet, desktop)</p>
      <p>- Upravljanje proizvodima sa kategorijama i varijantama</p>
      <p>- Integrisano plaćanje karticama i PayPal</p>
      <p>- Sistem za upravljanje zalihama</p>
      <p>- Korisnički nalozi i istorija kupovina</p>
      <p>- Košarica i wishlist funkcionalnost</p>
      <p>- Automatske email notifikacije</p>
      <p>- SSL sertifikat i sigurnosna zaštita</p>
      <p>- SEO optimizacija za bolje rangiranje</p>
      <p>- Hosting i domen za prvu godinu uključeni</p>
      <p>- Obuka za korišćenje admin panela</p>
      <p>- Izrada za 14-21 dan</p>
    </motion.div>
  );
};

export default WebShopComponent;