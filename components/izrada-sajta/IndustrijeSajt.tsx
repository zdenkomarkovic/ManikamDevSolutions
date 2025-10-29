"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMessages } from "@/lib/MessagesContext";

const IndustrijeSajt = () => {
  const intl = useMessages();
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
          {intl.formatMessage({ id: "websiteDevelopment.industries.title" })}
        </motion.h2>
      </div>
      <motion.p
        className="text-center text-gray-100 mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {intl.formatMessage({ id: "websiteDevelopment.industries.subtitle" })}
      </motion.p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-shadow"
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            y: -5,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {intl.formatMessage({ id: "websiteDevelopment.industries.hospitality.title" })}
          </h3>
          <p className="">
            {intl.formatMessage({ id: "websiteDevelopment.industries.hospitality.text" })}
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-shadow"
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            y: -5,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {intl.formatMessage({ id: "websiteDevelopment.industries.medical.title" })}
          </h3>
          <p className="">
            {intl.formatMessage({ id: "websiteDevelopment.industries.medical.text" })}
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-shadow"
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            y: -5,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {intl.formatMessage({ id: "websiteDevelopment.industries.ecommerce.title" })}
          </h3>
          <p className="">
            {intl.formatMessage({ id: "websiteDevelopment.industries.ecommerce.text" })}
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-shadow"
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            y: -5,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {intl.formatMessage({ id: "websiteDevelopment.industries.realEstate.title" })}
          </h3>
          <p className="">
            {intl.formatMessage({ id: "websiteDevelopment.industries.realEstate.text" })}
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-shadow"
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            y: -5,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {intl.formatMessage({ id: "websiteDevelopment.industries.legal.title" })}
          </h3>
          <p className="">
            {intl.formatMessage({ id: "websiteDevelopment.industries.legal.text" })}
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-shadow"
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            y: -5,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {intl.formatMessage({ id: "websiteDevelopment.industries.fitness.title" })}
          </h3>
          <p className="">
            {intl.formatMessage({ id: "websiteDevelopment.industries.fitness.text" })}
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-shadow"
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            y: -5,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {intl.formatMessage({ id: "websiteDevelopment.industries.education.title" })}
          </h3>
          <p className="">
            {intl.formatMessage({ id: "websiteDevelopment.industries.education.text" })}
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-shadow"
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            y: -5,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {intl.formatMessage({ id: "websiteDevelopment.industries.construction.title" })}
          </h3>
          <p className="">
            {intl.formatMessage({ id: "websiteDevelopment.industries.construction.text" })}
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-shadow"
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            y: -5,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {intl.formatMessage({ id: "websiteDevelopment.industries.agency.title" })}
          </h3>
          <p className="">
            {intl.formatMessage({ id: "websiteDevelopment.industries.agency.text" })}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IndustrijeSajt;
