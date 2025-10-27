"use client";

import { motion } from "framer-motion";
import {
  FaSearch,
  FaBullseye,
  FaTools,
  FaChartLine,
  FaClipboardList,
  FaSyncAlt,
} from "react-icons/fa";

const steps = [
  {
    icon: FaSearch,
    title: "Analiza i Audit",
    description:
      "Detaljno analiziramo trenutno stanje vašeg sajta, konkurenciju i industriju.",
  },
  {
    icon: FaBullseye,
    title: "Strategija i Planiranje",
    description:
      "Kreiramo prilagođenu SEO strategiju baziranu na vašim ciljevima i budžetu.",
  },
  {
    icon: FaTools,
    title: "Implementacija",
    description:
      "Primenjujemo tehničke optimizacije, kreiramo sadržaj i gradimo linkove.",
  },
  {
    icon: FaChartLine,
    title: "Monitoring i Optimizacija",
    description:
      "Kontinuirano pratimo performanse i optimizujemo strategiju za najbolje rezultate.",
  },
  {
    icon: FaClipboardList,
    title: "Izveštavanje",
    description: "Dostavljamo detaljne mesečne izveštaje sa jasnim metrikama.",
  },
  {
    icon: FaSyncAlt,
    title: "Kontinuirano Poboljšanje",
    description:
      "SEO je kontinuiran proces - stalno unapređujemo strategiju i prilagođavamo se promenama.",
  },
];

export default function SEOProcess() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <div>
      <div className="flex justify-center mb-8 md:mb-12">
        <motion.h2
          className="text-2xl md:text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Naš SEO Proces
        </motion.h2>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-6 shadow-lg border border-gray-100"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              y: -10,
              boxShadow: "0 20px 40px rgba(249, 115, 22, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-14 h-14 bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl flex items-center justify-center mb-4"
              variants={iconVariants}
              whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.6 },
              }}
            >
              <step.icon className="text-2xl text-white" />
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className=" leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="mt-8 md:mt-12 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl md:rounded-3xl p-6 md:p-8 text-center shadow-lg border border-gray-100"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.02,
          y: -5,
          boxShadow: "0 25px 50px rgba(249, 115, 22, 0.15)",
        }}
      >
        <motion.p
          className="text-lg md:text-2xl font-semibold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          Prosečno vreme do prvih vidljivih rezultata
        </motion.p>
        <motion.p
          className="text-4xl md:text-5xl font-bold mb-2 text-gray-900"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
        >
          3-6 meseci
        </motion.p>
        <motion.p
          className="text-base md:text-lg "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          viewport={{ once: true }}
        >
          SEO je maraton, ne sprint - ali rezultati traju dugoročno!
        </motion.p>
      </motion.div>
    </div>
  );
}
