"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function RedesignIntro() {
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
        className="text-xl md:text-3xl font-extrabold mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Zašto je Vreme za Redizajn i Migraciju Vašeg Sajta?
      </motion.h2>
      <motion.div
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p variants={itemVariants} className="text-center">
          U digitalnom svetu koji se brzo razvija, sajt napravljen pre nekoliko
          godina možda više ne zadovoljava moderne standarde. WordPress, Wix,
          Joomla i slične platforme bile su odličan izbor u prošlosti, ali danas
          postoje naprednije tehnologije koje nude neuporedivo bolje
          performanse, sigurnost i korisničko iskustvo.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-6 mt-8"
        >
          <div className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 p-6 md:p-8 rounded-lg border border-orange-100">
            <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Problemi Starih Platformi
            </h3>
            <ul className="space-y-4 ">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 mt-1">✗</span>
                <span className="">
                  Sporo učitavanje stranica (3-10 sekundi)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 mt-1">✗</span>
                <span className="">Loše performanse na mobilnim uređajima</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 mt-1">✗</span>
                <span className="">Sigurnosni rizici i česte ranjivosti</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 mt-1">✗</span>
                <span className="">
                  Zastareli dizajn koji ne prati moderne trendove
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 mt-1">✗</span>
                <span className="">Loš SEO ranking na Google-u</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 mt-1">✗</span>
                <span className="">
                  Skupo održavanje i redovni troškovi pluginova
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 p-6 md:p-8 rounded-lg border border-green-100">
            <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Prednosti Next.js Migracije
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" />
                <span className="">
                  Velika brzina učitavanja (0.5-2 sekunde)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" />
                <span className="">
                  Savršen responsive dizajn za sve uređaje
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" />
                <span className="">
                  Vrhunska sigurnost bez dodatnih pluginova
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" />
                <span className="">
                  Moderan dizajn sa najnovijim UI/UX trendovima
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" />
                <span className="">
                  Odličan SEO i viša pozicija u Google rezultatima
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" />
                <span className="">Niži troškovi održavanja i hosting-a</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
