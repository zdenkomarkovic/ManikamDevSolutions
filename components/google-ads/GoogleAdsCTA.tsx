"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaChartLine,
  FaBullseye,
  FaDollarSign,
} from "react-icons/fa";
import { useMessages } from "@/lib/MessagesContext";

const GoogleAdsCTA = () => {
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
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className="text-gray-50 bg-gradient-to-br from-gray-700 via-gray-500 to-gray-200 rounded-2xl py-3 md:p-6 text-center">
        <div className="flex justify-center mb-3 md:mb-5">
          <motion.h2
            className="text-2xl md:text-4xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {intl.formatMessage({ id: "googleAds.cta.title" })}
          </motion.h2>
        </div>
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="md:space-y-8 md:px-20" variants={itemVariants}>
            <div>
              <h3 className="text-xl font-bold mb-4">
                {intl.formatMessage({ id: "googleAds.cta.resultsTitle" })}
              </h3>
              <motion.ul
                className="space-y-1 md:space-y-3 mx-auto w-fit"
                variants={containerVariants}
              >
                <motion.li
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaRocket className="mr-3 text-orange-600" />
                  </motion.div>
                  {intl.formatMessage({ id: "googleAds.cta.result1" })}
                </motion.li>
                <motion.li
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaChartLine className="mr-3 text-orange-600" />
                  </motion.div>
                  {intl.formatMessage({ id: "googleAds.cta.result2" })}
                </motion.li>
                <motion.li
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaBullseye className="mr-3 text-orange-600" />
                  </motion.div>
                  {intl.formatMessage({ id: "googleAds.cta.result3" })}
                </motion.li>
                <motion.li
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaDollarSign className="mr-3 text-orange-600" />
                  </motion.div>
                  {intl.formatMessage({ id: "googleAds.cta.result4" })}
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="mb-4 text-2xl md:text-3xl font-bold px-2">
              {intl.formatMessage({ id: "googleAds.cta.subtitle" })}
            </p>

            <motion.div
              className="flex flex-col gap-4 justify-center items-center"
              variants={containerVariants}
            >
              {/* Phone Call Button */}
              <motion.a
                href={`tel:${intl.formatMessage({ id: "googleAds.cta.phone" })}`}
                className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-orange-600 to-orange-400 text-white px-2 md:px-8 py-1 md:py-3 rounded-xl text-base md:text-3xl font-semibold"
                variants={buttonVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 10px 25px rgba(249, 115, 22, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <motion.svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </motion.svg>
                <span className="block text-lg md:text-2xl font-normal">
                  {intl.formatMessage({ id: "googleAds.cta.phone" })}
                </span>
              </motion.a>

              {/* Email Button */}
              <motion.a
                href={`mailto:${intl.formatMessage({ id: "googleAds.cta.email" })}`}
                className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-orange-600 to-orange-400 text-white px-2 md:px-8 py-1 md:py-3 rounded-xl text-base md:text-3xl font-semibold"
                variants={buttonVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 10px 25px rgba(249, 115, 22, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <motion.svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </motion.svg>

                <span className="block text-lg md:text-2xl font-normal">
                  {intl.formatMessage({ id: "googleAds.cta.email" })}
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default GoogleAdsCTA;
