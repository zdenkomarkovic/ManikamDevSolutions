"use client";

import { motion } from "framer-motion";
import { FaComments, FaDrawPolygon, FaCode, FaVial, FaRocket, FaWrench } from "react-icons/fa";

const steps = [
  {
    icon: FaComments,
    title: "Konsultacije i Analiza",
    description: "Razumemo vaše poslovne potrebe, procese i ciljeve. Definišemo requirements i scope projekta.",
  },
  {
    icon: FaDrawPolygon,
    title: "Dizajn i Planiranje",
    description: "Kreiramo wireframes, mockups, arhitekturu sistema i projektni plan sa milestones.",
  },
  {
    icon: FaCode,
    title: "Development",
    description: "Agile development proces sa redovnim sprint-ovima i prikazima napretka.",
  },
  {
    icon: FaVial,
    title: "Testiranje i QA",
    description: "Rigorozno testiranje funkcionalnosti, performansi, sigurnosti i user experience-a.",
  },
  {
    icon: FaRocket,
    title: "Deployment",
    description: "Postavljanje na production, migracija podataka, obuka korisnika i go-live.",
  },
  {
    icon: FaWrench,
    title: "Održavanje i Podrška",
    description: "Kontinuirana tehnička podrška, bugfixes, updates i nova funkcionalnost.",
  },
];

export default function SoftwareProcess() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  return (
    <div>
      <motion.h2
        className="text-2xl md:text-3xl font-extrabold text-center mb-8 md:mb-12 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Naš Proces Razvoja Softvera
      </motion.h2>

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
              boxShadow: "0 20px 40px rgba(249, 115, 22, 0.2)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-300 text-white rounded-full flex items-center justify-center font-bold shadow-lg"
              whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.6 }
              }}
            >
              {index + 1}
            </motion.div>
            <motion.div
              className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-300 rounded-xl flex items-center justify-center mb-4"
              variants={iconVariants}
              whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.6 }
              }}
            >
              <step.icon className="text-2xl text-white" />
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-8 p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.01,
          y: -3,
          boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)"
        }}
      >
        <motion.h3
          className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Agile Metodologija
        </motion.h3>
        <p className="text-gray-700 mb-6 text-center">
          Koristimo <strong>Agile/Scrum metodologiju</strong> koja omogućava fleksibilnost,
          transparentnost i kontinuiranu isporuku vrednosti. Umesto da čekate mesecima na finalni
          proizvod, dobijate funkcionalne verzije softvera svakih 2-3 nedelje.
        </p>
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={cardVariants}>
            <h4 className="font-bold text-gray-900 mb-2 text-lg">Sprint Planning</h4>
            <p className="text-gray-600 text-sm">
              Zajedno definišemo prioritete i funkcionalnosti za naredni sprint.
            </p>
          </motion.div>
          <motion.div variants={cardVariants}>
            <h4 className="font-bold text-gray-900 mb-2 text-lg">Daily Standups</h4>
            <p className="text-gray-600 text-sm">
              Redovna komunikacija i ažuriranje o napretku projekta.
            </p>
          </motion.div>
          <motion.div variants={cardVariants}>
            <h4 className="font-bold text-gray-900 mb-2 text-lg">Sprint Review</h4>
            <p className="text-gray-600 text-sm">
              Prikazujemo gotov rad, prikupljamo feedback i prilagođavamo plan.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
