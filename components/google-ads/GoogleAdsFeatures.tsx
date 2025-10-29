"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaEye, FaUserCog, FaCogs } from "react-icons/fa";
import { useMessages } from "@/lib/MessagesContext";

const GoogleAdsFeatures = () => {
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
    <div className="mt-16">
      <div className="flex justify-center mb-12">
        <motion.h2
          className="text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {intl.formatMessage({ id: "googleAds.features.title" })}
        </motion.h2>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="bg-gradient-to-bl from-gray-900 via-gray-800 to-orange-600 rounded-xl p-6 shadow-lg text-center"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -10,
            boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4"
            variants={iconVariants}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
          >
            <FaChartLine className="text-2xl text-white" />
          </motion.div>
          <h4 className="text-xl font-bold mb-3 text-gray-100">
            {intl.formatMessage({ id: "googleAds.features.expertise.title" })}
          </h4>
          <p className="text-gray-100">
            {intl.formatMessage({ id: "googleAds.features.expertise.description" })}
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-orange-600 rounded-xl p-6 shadow-lg text-center"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -10,
            boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4"
            variants={iconVariants}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
          >
            <FaEye className="text-2xl text-white" />
          </motion.div>
          <h4 className="text-xl font-bold mb-3 text-gray-100">
            {intl.formatMessage({ id: "googleAds.features.transparency.title" })}
          </h4>
          <p className="text-gray-100">
            {intl.formatMessage({ id: "googleAds.features.transparency.description" })}
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-bl from-gray-900 via-gray-800 to-orange-600 rounded-xl p-6 shadow-lg text-center"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -10,
            boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4"
            variants={iconVariants}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
          >
            <FaUserCog className="text-2xl text-white" />
          </motion.div>
          <h4 className="text-xl font-bold mb-3 text-gray-100">
            {intl.formatMessage({ id: "googleAds.features.individual.title" })}
          </h4>
          <p className="text-gray-100">
            {intl.formatMessage({ id: "googleAds.features.individual.description" })}
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-orange-600 rounded-xl p-6 shadow-lg text-center"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -10,
            boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4"
            variants={iconVariants}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
          >
            <FaCogs className="text-2xl text-white" />
          </motion.div>
          <h4 className="text-xl font-bold mb-3 text-gray-100">
            {intl.formatMessage({ id: "googleAds.features.optimization.title" })}
          </h4>
          <p className="text-gray-100">
            {intl.formatMessage({ id: "googleAds.features.optimization.description" })}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GoogleAdsFeatures;
