"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaMobile,
  FaSearch,
  FaShieldAlt,
  FaCog,
  FaTools,
} from "react-icons/fa";

const PrednostiSajt = () => {
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
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
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
        delay: 0.3,
      },
    },
  };

  return (
    <div className="bg-gradient-to-bl from-gray-900 via-gray-700 to-orange-600 rounded-2xl p-4 md:p-12 shadow-lg border border-gray-100 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full translate-y-12 -translate-x-12"
        animate={{
          rotate: -360,
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      ></motion.div>

      <div className="relative z-10 grid md:grid-cols-2 items-center gap-4 md:gap-12">
        <div className="">
          <div className="flex justify-center mb-6">
            <motion.h3
              className="text-2xl md:text-4xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Prednosti naših sajtova nad WordPress rešenjima
            </motion.h3>
          </div>
          <motion.div
            className="grid md:grid-cols-1 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-start p-4 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 h-full rounded-lg"
              variants={itemVariants}
            >
              <motion.div
                variants={iconVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaRocket className="text-orange-600 mt-1 -mr-6 flex-shrink-0" />
              </motion.div>
              <div className="first-letter:ml-10">
                <strong>Brzina performansi:</strong> Next.js tehnologija
                omogućava server-side rendering i statičku generaciju, što
                rezultuje brzinom učitavanja do 10 puta bržom od WordPress
                sajtova.
              </div>
            </motion.div>
            <motion.div
              className="flex items-start p-4 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 h-full rounded-lg"
              variants={itemVariants}
            >
              <motion.div
                variants={iconVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaSearch className="text-orange-600 mt-1 -mr-6 flex-shrink-0" />
              </motion.div>
              <div className="first-letter:ml-10">
                <strong>SEO optimizacija:</strong> Ugrađena SEO optimizacija na
                nivou koda, meta tagovi, strukturirani podaci i optimizacija za
                Core Web Vitals garantuju bolje rangiranje na Google-u.
              </div>
            </motion.div>
            <motion.div
              className="flex items-start p-4 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 h-full rounded-lg"
              variants={itemVariants}
            >
              <motion.div
                variants={iconVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaShieldAlt className="text-orange-600 mt-1 -mr-6 flex-shrink-0" />
              </motion.div>
              <div className="first-letter:ml-10">
                <strong>Sigurnost:</strong> Za razliku od WordPress-a koji je
                čest cilj hakera, naši custom sajtovi imaju minimalnu površinu
                za napade i redovno se ažuriraju sa najnovijim sigurnosnim
                standardima.
              </div>
            </motion.div>
            <motion.div
              className="flex items-start p-4 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 h-full rounded-lg"
              variants={itemVariants}
            >
              <motion.div
                variants={iconVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaMobile className="text-orange-600 mt-1 -mr-6 flex-shrink-0" />
              </motion.div>
              <div className="first-letter:ml-10">
                <strong>Mobilna optimizacija:</strong> Responsive dizajn koji se
                savršeno prilagođava svim uređajima, od mobilnih telefona do
                desktop računara, bez kompromisa u funkcionalnosti.
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="bg-gradient-to-br from-orange-600 to-orange-400 flex flex-col justify-between rounded-2xl py-8 px-3 md:px-10 shadow-lg text-white"
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            y: -10,
            boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)",
          }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <h3 className="text-2xl font-bold mb-5">
              Modernizacija & Migracija - cena po projektu
            </h3>
            <p className="mb-2 opacity-90">
              Transformacija WordPress sajta u Next.js
            </p>
            <div className="w-full h-1 bg-gray-200 mb-4"></div>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaTools className=" mt-1 mr-2 flex-shrink-0 " />
                </motion.div>
                <span>Kompletna migracija sadržaja</span>
              </div>
              <div className="flex items-start">
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaRocket className=" mt-1 mr-2 flex-shrink-0" />
                </motion.div>
                <span> I do 10x brži sajt</span>
              </div>
              <div className="flex items-start">
                <FaShieldAlt className=" mt-1 mr-2 flex-shrink-0" />
                <span>Eliminacija sigurnosnih rizika</span>
              </div>
              <div className="flex items-start">
                <FaSearch className=" mt-1 mr-2 flex-shrink-0" />
                <span>Poboljšanje SEO rangiranja</span>
              </div>
              <div className="flex items-start">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <FaCog className=" mt-1 mr-2 flex-shrink-0" />
                </motion.div>
                <span>Moderniji dizajn</span>
              </div>
            </div>

            <div className="bg-gray-800/10 backdrop-blur rounded-xl p-4 mb-4">
              <h4 className="font-bold mb-2">
                Zašto migrirati sa WordPress-a?
              </h4>
              <ul className="text-base space-y-1">
                <li>• Eliminacija čestih hakovanja</li>
                <li>• Prestanak plaćanja skupih plugin-ova</li>
                <li>• Drastično poboljšanje brzine</li>
                <li>• Bolje Google rangiranje</li>
                <li>• Smanjenje troškova održavanja</li>
              </ul>
            </div>
          </div>
          <div>
            <strong>Vreme migracije:</strong> 7-14 dana
            <br />
            <strong>Garancija:</strong> Potpuna funkcionalnost
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrednostiSajt;
