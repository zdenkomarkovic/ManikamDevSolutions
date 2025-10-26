"use client";

import { motion } from "framer-motion";

export default function SoftwareIntro() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 text-center md:text-left rounded-2xl p-3 md:p-8 shadow-lg border border-gray-100"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        y: -5,
        boxShadow: "0 20px 40px rgba(249, 115, 22, 0.15)"
      }}
    >
      <motion.h2
        className="text-xl md:text-3xl font-extrabold mb-6 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Zašto Vašem Biznisu Treba Custom Softver?
      </motion.h2>
      <motion.div
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p variants={itemVariants}>
          Gotova softverska rešenja često ne pokrivaju specifične potrebe vašeg biznisa. Možda
          vam treba 80% funkcionalnosti, ali nemate potrebu za ostalih 20%, ili vam nedostaje ta
          ključna funkcija koja čini razliku. <strong>Custom softver je dizajniran tačno za vaše
          poslovne procese</strong> - dobijate ono što vam treba, bez nepotrebnih funkcija za koje
          plaćate skupu mesečnu pretplatu.
        </motion.p>
        <motion.p variants={itemVariants}>
          U digitalnom dobu, <strong>automatizacija poslovnih procesa nije luksuz - to je neophodnost
          za konkurentnost</strong>. Svaki manuelni proces koji vaši zaposleni rade može biti
          automatizovan. Umesto da vaši ljudi troše vreme na ponavljajuće zadatke, custom softver
          radi za vas 24/7, bez greške, brže i jeftinije. Jedan dobar CRM sistem može zameniti
          10 Excel tabela i smanjiti vreme obrade narudžbina sa 30 minuta na 30 sekundi.
        </motion.p>
        <motion.p variants={itemVariants}>
          <strong>Prosečan povrat investicije (ROI) na custom softver je 300-500% u prve 2 godine.</strong>
          Nakon inicijalnog razvoja, trošite minimalno na održavanje, dok gotova rešenja naplaćuju
          mesečne/godišnje pretplate koje se gomilaju. Custom softver je vaše vlasništvo zauvek,
          možete ga integrisati sa bilo kojim sistemom i skalirati kako vaš biznis raste. Ne zavisete
          od spoljnih provajdera koji mogu povećati cene ili ugasiti servis.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
