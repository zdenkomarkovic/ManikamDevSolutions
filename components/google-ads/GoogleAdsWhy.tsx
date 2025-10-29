"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaBullseye, FaChartBar, FaClock } from "react-icons/fa";
import { useMessages } from "@/lib/MessagesContext";

const GoogleAdsWhy = () => {
  const intl = useMessages();
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
          {intl.formatMessage({ id: "googleAds.why.title" })}
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
                  {intl.formatMessage({ id: "googleAds.why.visibility.title" })}
                </h3>
                <p className="text-white ">
                  {intl.formatMessage({ id: "googleAds.why.visibility.description" })}
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
                  {intl.formatMessage({ id: "googleAds.why.targeting.title" })}
                </h3>
                <p className="text-white">
                  {intl.formatMessage({ id: "googleAds.why.targeting.description" })}
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
                  {intl.formatMessage({ id: "googleAds.why.tracking.title" })}
                </h3>
                <p className="text-white">
                  {intl.formatMessage({ id: "googleAds.why.tracking.description" })}
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
                {intl.formatMessage({ id: "googleAds.why.momentTitle" })}
              </h3>
              <p className="text-white text-lg leading-relaxed">
                {intl.formatMessage({ id: "googleAds.why.momentDescription" })}
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
                  {intl.formatMessage({ id: "googleAds.why.momentHighlight" })}
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
