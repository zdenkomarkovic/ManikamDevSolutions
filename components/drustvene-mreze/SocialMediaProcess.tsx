"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Analiza i Istraživanje",
    description: "Analiziramo vašu industriju, konkurenciju, ciljnu publiku i trenutno stanje na društvenim mrežama.",
  },
  {
    title: "Strategija i Planiranje",
    description: "Kreiramo personalizovanu strategiju sa ciljevima, tipovima sadržaja i planom objava.",
  },
  {
    title: "Kreiranje Sadržaja",
    description: "Dizajniramo grafike, pišemo tekstove i kreiramo video sadržaj prema content calendar-u.",
  },
  {
    title: "Objava i Oglašavanje",
    description: "Redovno objavljujemo sadržaj i pokrećemo ciljane reklamne kampanje.",
  },
  {
    title: "Praćenje i Analiza",
    description: "Pratimo performanse, angažman, doseg i konverzije kroz detaljne analytics.",
  },
  {
    title: "Optimizacija",
    description: "Kontinuirano testiramo, učimo i optimizujemo strategiju za najbolje rezultate.",
  },
];

export default function SocialMediaProcess() {
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
        Naš Proces Upravljanja Društvenim Mrežama
      </motion.h2>
      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="space-y-5"
            variants={itemVariants}
            whileHover={{
              x: 10,
              transition: { duration: 0.3 }
            }}
          >
            <div className="flex gap-6 items-center">
              <motion.div
                className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center text-white font-bold text-xl"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                {index + 1}
              </motion.div>
              <motion.h3
                className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                {step.title}
              </motion.h3>
            </div>
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {step.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
