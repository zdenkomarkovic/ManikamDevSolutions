"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMessages } from "@/lib/MessagesContext";

const GoogleAdsServices = () => {
  const intl = useMessages();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
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
          {intl.formatMessage({ id: "googleAds.services.title" })}
        </motion.h2>
      </div>
      <motion.p
        className="text-center text-gray-100 mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {intl.formatMessage({ id: "googleAds.services.subtitle" })}
      </motion.p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {intl.formatMessage({ id: "googleAds.services.search.title" })}
          </h3>
          <p className="">
            {intl.formatMessage({ id: "googleAds.services.search.description" })}
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {intl.formatMessage({ id: "googleAds.services.display.title" })}
          </h3>
          <p className="">
            {intl.formatMessage({ id: "googleAds.services.display.description" })}
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {intl.formatMessage({ id: "googleAds.services.youtube.title" })}
          </h3>
          <p className="">
            {intl.formatMessage({ id: "googleAds.services.youtube.description" })}
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {intl.formatMessage({ id: "googleAds.services.shopping.title" })}
          </h3>
          <p className="">
            {intl.formatMessage({ id: "googleAds.services.shopping.description" })}
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {intl.formatMessage({ id: "googleAds.services.remarketing.title" })}
          </h3>
          <p className="">
            {intl.formatMessage({ id: "googleAds.services.remarketing.description" })}
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {intl.formatMessage({ id: "googleAds.services.app.title" })}
          </h3>
          <p className="">
            {intl.formatMessage({ id: "googleAds.services.app.description" })}
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {intl.formatMessage({ id: "googleAds.services.smart.title" })}
          </h3>
          <p className="">
            {intl.formatMessage({ id: "googleAds.services.smart.description" })}
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {intl.formatMessage({ id: "googleAds.services.performanceMax.title" })}
          </h3>
          <p className="">
            {intl.formatMessage({ id: "googleAds.services.performanceMax.description" })}
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {intl.formatMessage({ id: "googleAds.services.local.title" })}
          </h3>
          <p className="">
            {intl.formatMessage({ id: "googleAds.services.local.description" })}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GoogleAdsServices;
