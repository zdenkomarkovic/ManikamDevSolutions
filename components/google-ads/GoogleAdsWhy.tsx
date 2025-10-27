"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaBullseye, FaChartBar, FaClock } from "react-icons/fa";

const GoogleAdsWhy = () => {
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
    <div className="mt-16 bg-gradient-to-br from-orange-500 via-orange-700 to-orange-500 rounded-2xl p-6 md:p-12 shadow-2xl border border-orange-300 relative overflow-hidden">
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

      <div className="relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-center mb-8 text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Zašto je Google Oglašavanje Važno za Vaš Biznis?
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.div
              className="flex items-start gap-4"
              variants={itemVariants}
            >
              <motion.div
                className="flex-shrink-0 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
                variants={iconVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaSearch className="text-2xl text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Odmah Vidljivost
                </h3>
                <p className="text-white ">
                  Dok SEO donosi rezultate kroz duži period, Google oglašavanje
                  vam omogućava da budete vidljivi odmah, od prvog dana
                  kampanje.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4"
              variants={itemVariants}
            >
              <motion.div
                className="flex-shrink-0 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
                variants={iconVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaBullseye className="text-2xl text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Precizno Targetiranje
                </h3>
                <p className="text-white">
                  Ciljajte po lokaciji, vremenu dana, uređaju, demografskim
                  karakteristikama i interesovanjima. Svaki klik je merljiv i
                  transparentan.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4"
              variants={itemVariants}
            >
              <motion.div
                className="flex-shrink-0 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
                variants={iconVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaChartBar className="text-2xl text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Detaljno Praćenje
                </h3>
                <p className="text-white">
                  Najdetaljnije mogućnosti praćenja rezultata od svih oglasnih
                  platformi. Svaki trošak, svaka konverzija - sve je
                  transparentno.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white border-opacity-20"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              y: -10,
              boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaClock className="text-6xl text-white mx-auto mb-4 opacity-80" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Ključni Moment
              </h3>
              <p className="text-white text-lg leading-relaxed">
                Kada neko pretražuje Google za proizvod ili uslugu koju nudite,
                vi možete biti prva kompanija koju vide. To je trenutak kada je
                potencijalni klijent najspremniji za kupovinu - aktivno traži
                rešenje za svoj problem.
              </p>
              <motion.div
                className="mt-6 inline-block bg-white bg-opacity-20 rounded-full px-6 py-3"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white font-semibold text-lg">
                  Google Ads vam omogućava da se pojavite u tom ključnom momentu
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GoogleAdsWhy;
