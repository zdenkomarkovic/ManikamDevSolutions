"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaMobile, FaSearch, FaShieldAlt } from "react-icons/fa";
import { useMessages } from "@/lib/MessagesContext";

const PrednostiSajt = () => {
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

      <div className="relative z-10">
        <div>
          <div className="flex justify-center mb-6">
            <motion.h3
              className="text-2xl md:text-4xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {intl.formatMessage({ id: "websiteDevelopment.advantages.title" })}
            </motion.h3>
          </div>
          <motion.div
            className="grid md:grid-cols-2 gap-4 md:gap-6"
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
                <strong>{intl.formatMessage({ id: "websiteDevelopment.advantages.speed.title" })}</strong> {intl.formatMessage({ id: "websiteDevelopment.advantages.speed.text" })}
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
                <strong>{intl.formatMessage({ id: "websiteDevelopment.advantages.seo.title" })}</strong> {intl.formatMessage({ id: "websiteDevelopment.advantages.seo.text" })}
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
                <strong>{intl.formatMessage({ id: "websiteDevelopment.advantages.security.title" })}</strong> {intl.formatMessage({ id: "websiteDevelopment.advantages.security.text" })}
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
                <strong>{intl.formatMessage({ id: "websiteDevelopment.advantages.mobile.title" })}</strong> {intl.formatMessage({ id: "websiteDevelopment.advantages.mobile.text" })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrednostiSajt;
