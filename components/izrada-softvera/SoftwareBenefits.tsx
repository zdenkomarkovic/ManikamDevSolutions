"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function SoftwareBenefits() {
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

  return (
    <div className="mt-16 bg-gradient-to-br from-gray-900 via-gray-700 to-orange-600 rounded-2xl p-4 md:p-8 shadow-lg border border-gray-100">
      <div className="flex justify-center mb-8">
        <motion.h2
          className="text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Prednosti Custom Softvera nad Gotovim Rešenjima
        </motion.h2>
      </div>

      <motion.div
        className="grid md:grid-cols-2 gap-6 mb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl shadow-lg"
          variants={cardVariants}
          whileHover={{
            scale: 1.01,
            y: -3,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            <span className="text-orange-600 text-2xl">✓</span>
            Custom Softver
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1" />
              </motion.div>
              <span className="">
                <strong>Tačno ono što vam treba</strong> - bez nepotrebnih
                funkcija
              </span>
            </li>
            <li className="flex items-start gap-2">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1" />
              </motion.div>
              <span className="">
                <strong>Jednokratna investicija</strong> - vaše je zauvek, bez
                mesečnih pretplata
              </span>
            </li>
            <li className="flex items-start gap-2">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1" />
              </motion.div>
              <span className="">
                <strong>Puna kontrola i vlasništvo</strong> - source code je vaš
              </span>
            </li>
            <li className="flex items-start gap-2">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1" />
              </motion.div>
              <span className="">
                <strong>Integracija sa postojećim sistemima</strong> - bez
                ograničenja
              </span>
            </li>
            <li className="flex items-start gap-2">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1" />
              </motion.div>
              <span className="">
                <strong>Skalabilnost</strong> - raste sa vašim biznisom
              </span>
            </li>
            <li className="flex items-start gap-2">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1" />
              </motion.div>
              <span className="">
                <strong>Konkurentska prednost</strong> - unique funkcionalnosti
              </span>
            </li>
            <li className="flex items-start gap-2">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1" />
              </motion.div>
              <span className="">
                <strong>Brži procesi</strong> - automatizirano prema vašim
                workflow-ima
              </span>
            </li>
            <li className="flex items-start gap-2">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1" />
              </motion.div>
              <span className="">
                <strong>Bolja sigurnost</strong> - prilagođena vašim security
                zahtevima
              </span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl shadow-lg"
          variants={cardVariants}
          whileHover={{
            scale: 1.01,
            y: -3,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            <span className="text-orange-600 text-2xl">✗</span>
            Gotova Rešenja (SaaS)
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1" />
              </motion.div>
              <span className="">
                <strong>Generičke funkcije</strong> - mnogo toga vam ne treba
              </span>
            </li>
            <li className="flex items-start gap-2">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1" />
              </motion.div>
              <span className="">
                <strong>Mesečne pretplate</strong> - troškovi se gomilaju
                godinama
              </span>
            </li>
            <li className="flex items-start gap-2">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1" />
              </motion.div>
              <span className="">
                <strong>Nema vlasništva</strong> - zavisnost od provajdera
              </span>
            </li>
            <li className="flex items-start gap-2">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1" />
              </motion.div>
              <span className="">
                <strong>Ograničene integracije</strong> - samo ono što oni
                podržavaju
              </span>
            </li>
            <li className="flex items-start gap-2">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1" />
              </motion.div>
              <span className="">
                <strong>Naplaćuje se po broju korisnika</strong> - skuplji sa
                rastom
              </span>
            </li>
            <li className="flex items-start gap-2">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1" />
              </motion.div>
              <span className="">
                <strong>Isti alat kao konkurencija</strong> - nema
                differentiation
              </span>
            </li>
            <li className="flex items-start gap-2">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1" />
              </motion.div>
              <span className="">
                <strong>Spori procesi</strong> - prilagođavate se njihovom
                workflow-u
              </span>
            </li>
            <li className="flex items-start gap-2">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1" />
              </motion.div>
              <span className="">
                <strong>Vaši podaci na njihovim serverima</strong> - privacy
                concerns
              </span>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl p-6 text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 10px 30px rgba(249, 115, 22, 0.4)",
        }}
      >
        <p className="font-semibold text-center">
          Custom softver je dugoročno neuporedivo isplativije rešenje koje vam
          donosi potpunu kontrolu, sigurnost i moć da oblikujete tehnologiju
          prema svom biznisu — ne obrnuto.
        </p>
      </motion.div>
    </div>
  );
}
