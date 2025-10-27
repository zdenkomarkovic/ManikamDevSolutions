"use client";

import { motion } from "framer-motion";

export default function SEOIntro() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
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
        boxShadow: "0 20px 40px rgba(249, 115, 22, 0.15)",
      }}
    >
      <motion.h2
        className="text-xl md:text-3xl font-extrabold mb-6 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Šta je SEO Optimizacija?
      </motion.h2>
      <motion.div
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p variants={itemVariants}>
          <strong>SEO (Search Engine Optimization)</strong> je proces
          optimizacije vašeg web sajta kako bi se poboljšalo njegovo rangiranje
          u rezultatima pretrage na Google-u i drugim pretraživačima.
        </motion.p>
        <motion.p variants={itemVariants}>
          Naš cilj je da vaš sajt bude vidljiv pravim korisnicima u pravo vreme.
          Kombinujemo tehnički SEO, kvalitetan sadržaj i kvalitetne linkove kako
          bismo ostvarili dugoročne rezultate.
        </motion.p>
        <motion.p variants={itemVariants}>
          <strong>Više od 90% online iskustva počinje pretraživačem</strong> -
          budite tu gde su vaši klijenti! Profesionalna SEO optimizacija nije
          trošak, već investicija koja donosi dugoročne rezultate i organski
          saobraćaj bez plaćanja za svaki klik.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
