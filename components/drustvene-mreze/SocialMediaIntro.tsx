"use client";

import { motion } from "framer-motion";

export default function SocialMediaIntro() {
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
      <div className="flex justify-center mb-6">
        <motion.h2
          className="text-xl md:text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Zašto su društvene mreže ključne za vaš biznis?
        </motion.h2>
      </div>
      <motion.div
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p variants={itemVariants}>
          U 2024. godini,{" "}
          <strong>preko 4.9 milijardi ljudi koristi društvene mreže</strong> -
          to je više od polovine svetske populacije! Facebook i Instagram nisu
          samo platforme za zabavu, već moćni alati za razvoj biznisa,
          komunikaciju sa klijentima i izgradnju brenda.
        </motion.p>
        <motion.p variants={itemVariants}>
          <strong>Facebook</strong> i <strong>Instagram</strong> omogućavaju vam
          da direktno komunicirate sa vašom ciljnom publikom, gradite poverenje
          i lojalnost, i transformišete pratioce u kupce. Preko 80% korisnika
          Instagram-a prati bar jedan biznis profil, dok je Facebook i dalje
          najkorišćenija društvena mreža za B2C marketing.
        </motion.p>
        <motion.p variants={itemVariants}>
          <strong>
            Profesionalno upravljanje društvenim mrežama nije luksuz - to je
            neophodnost.
          </strong>{" "}
          Algoritmi Facebook-a i Instagram-a konstantno se menjaju, a
          konkurencija je velika. Potrebna vam je strategija koja kombinuje
          kvalitetan sadržaj, precizno targetiranje, plaćeno oglašavanje i
          kontinuiranu analitiku da biste se istakli i postigli rezultate.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
