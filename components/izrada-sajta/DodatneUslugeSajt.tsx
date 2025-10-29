"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaCog } from "react-icons/fa";
import { useMessages } from "@/lib/MessagesContext";

const DodatneUslugeSajt = () => {
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

  return (
    <div className="mt-16 bg-gradient-to-br from-gray-700 via-gray-500 to-gray-200 rounded-2xl p-3 py-5 md:p-8 shadow-lg border border-gray-200">
      <div className="flex justify-center mb-8">
        <motion.h2
          className="text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {intl.formatMessage({ id: "websiteDevelopment.additionalServices.title" })}
        </motion.h2>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 p-3 md:p-6 rounded-xl shadow-md"
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            y: -5,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-3 inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            <FaSearch className="text-orange-600" />
            {intl.formatMessage({ id: "websiteDevelopment.additionalServices.seo.title" })}
          </h3>
          <p className="mb-3">
            {intl.formatMessage({ id: "websiteDevelopment.additionalServices.seo.text" })}
          </p>
          <ul className="  space-y-1 ml-4">
            <li>• {intl.formatMessage({ id: "websiteDevelopment.additionalServices.seo.feature1" })}</li>
            <li>• {intl.formatMessage({ id: "websiteDevelopment.additionalServices.seo.feature2" })}</li>
            <li>• {intl.formatMessage({ id: "websiteDevelopment.additionalServices.seo.feature3" })}</li>
            <li>• {intl.formatMessage({ id: "websiteDevelopment.additionalServices.seo.feature4" })}</li>
          </ul>
        </motion.div>

        {/* <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent font-bold mb-3 flex items-center gap-2">
            <FaPaintBrush className="text-orange-500" />
            Branding i Grafički Dizajn
          </h3>
          <p className="text-gray-600 mb-3">
            Kreiramo kompletnu vizuelni identitet vašeg brenda - od logoa preko
            poslovnih materijala do social media grafika koji će vas izdvojiti
            od konkurencije.
          </p>
          <ul className="text-sm text-gray-600 space-y-1 ml-4">
            <li>• Dizajn logotipa i brand identiteta</li>
            <li>• Vizit karte, flajeri, brošure</li>
            <li>• Social media grafike</li>
            <li>• Brand guidelines dokumentacija</li>
          </ul>
        </div> */}

        <motion.div
          className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 p-3 md:p-6 rounded-xl shadow-md"
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            y: -5,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent font-bold mb-3 inline-flex items-center gap-2">
            <FaCog className="text-orange-600" />
            {intl.formatMessage({ id: "websiteDevelopment.additionalServices.maintenance.title" })}
          </h3>
          <p className=" mb-3">
            {intl.formatMessage({ id: "websiteDevelopment.additionalServices.maintenance.text" })}
          </p>
          <ul className="space-y-1 ml-4">
            <li>• {intl.formatMessage({ id: "websiteDevelopment.additionalServices.maintenance.feature1" })}</li>
            <li>• {intl.formatMessage({ id: "websiteDevelopment.additionalServices.maintenance.feature2" })}</li>
            <li>• {intl.formatMessage({ id: "websiteDevelopment.additionalServices.maintenance.feature3" })}</li>
            <li>• {intl.formatMessage({ id: "websiteDevelopment.additionalServices.maintenance.feature4" })}</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DodatneUslugeSajt;
