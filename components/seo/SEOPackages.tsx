"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMessages, useCurrentLocale } from "@/lib/MessagesContext";
import { Check } from "lucide-react";

const SEOPackages = () => {
  const intl = useMessages();
  const locale = useCurrentLocale();

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
      scale: 0.95,
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

  const packages = [
    {
      id: "starter",
      badge: null,
    },
    {
      id: "professional",
      badge: intl.formatMessage({ id: "seoOptimization.packages.professional.badge" }),
    },
    {
      id: "enterprise",
      badge: null,
    },
  ];

  return (
    <div className="mt-16 bg-gradient-to-br from-gray-900 via-gray-700 to-orange-600 rounded-2xl p-4 md:p-8 shadow-lg border border-gray-100">
      <div className="flex justify-center mb-4">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {intl.formatMessage({ id: "seoOptimization.packages.title" })}
        </motion.h2>
      </div>

      <motion.p
        className="text-center text-gray-100 mb-12 max-w-3xl mx-auto text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {intl.formatMessage({ id: "seoOptimization.packages.subtitle" })}
      </motion.p>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {packages.map((pkg) => (
          <motion.div
            key={pkg.id}
            className={`relative p-6 md:p-8 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl shadow-xl ${
              pkg.badge ? "ring-4 ring-orange-500" : ""
            }`}
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              y: -10,
              boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            {pkg.badge && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-600 to-orange-400 text-white px-4 py-1 rounded-full text-sm font-bold">
                {pkg.badge}
              </div>
            )}

            <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              {intl.formatMessage({ id: `seoOptimization.packages.${pkg.id}.title` })}
            </h3>

            <p className="text-gray-600 mb-6 italic">
              {intl.formatMessage({ id: `seoOptimization.packages.${pkg.id}.subtitle` })}
            </p>

            <motion.a
              href={`/${locale}/contact`}
              className="block w-full text-center bg-gradient-to-r from-orange-600 to-orange-400 text-white px-6 py-3 rounded-lg font-semibold mb-6 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {intl.formatMessage({ id: "seoOptimization.cta.subtitle" })}
            </motion.a>

            <div className="space-y-3 mb-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => {
                const featureKey = `seoOptimization.packages.${pkg.id}.feature${num}`;
                const feature = intl.formatMessage({ id: featureKey });

                // Skip if feature doesn't exist
                if (feature === featureKey) return null;

                return (
                  <div key={num} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-gray-300 pt-4 mt-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 font-semibold">
                  {intl.formatMessage({ id: `seoOptimization.packages.${pkg.id}.duration` })}
                </span>
                <span className="text-orange-600 font-bold">
                  {intl.formatMessage({ id: `seoOptimization.packages.${pkg.id}.durationMonths` })}
                </span>
              </div>
              {pkg.id === "enterprise" && (
                <p className="text-xs text-gray-500 mt-2 italic">
                  {intl.formatMessage({ id: `seoOptimization.packages.${pkg.id}.note` })}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SEOPackages;
