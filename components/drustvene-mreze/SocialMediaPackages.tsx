"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { useMessages } from "@/lib/MessagesContext";

export default function SocialMediaPackages() {
  const intl = useMessages();

  const packages = [
    {
      key: "starter",
      featureCount: 6,
      iconColor: "text-orange-600",
      highlight: false,
    },
    {
      key: "professional",
      featureCount: 7,
      iconColor: "text-orange-600",
      highlight: true,
    },
    {
      key: "premium",
      featureCount: 8,
      iconColor: "text-orange-600",
      highlight: false,
    },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-4 md:">
      {packages.map((pkg, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className={`bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 flex flex-col justify-between rounded-2xl py-8 px-3 shadow-lg ${
            pkg.highlight
              ? "border-2 border-orange-200 shadow-xl relative overflow-hidden"
              : "border border-gray-200"
          }`}
        >
          {pkg.highlight && (
            <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-600 to-orange-400 text-white px-4 py-1 rounded-bl-2xl text-xs">
              <span className="font-bold">{intl.formatMessage({ id: "socialMedia.packages.highlightLabel" })}</span>
            </div>
          )}

          <div>
            <h3 className="text-2xl font-bold mb-5 text-orange-600">
              {intl.formatMessage({ id: `socialMedia.packages.${pkg.key}.name` })}
            </h3>
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {intl.formatMessage({ id: `socialMedia.packages.${pkg.key}.price` })}
              <span className="text-lg text-gray-900">{intl.formatMessage({ id: `socialMedia.packages.${pkg.key}.period` })}</span>
            </div>
            <p className=" mb-4">{intl.formatMessage({ id: `socialMedia.packages.${pkg.key}.description` })}</p>
            <div className="w-full h-1 bg-gray-200 mb-4"></div>
            <div className="space-y-3 mb-6">
              {Array.from({ length: pkg.featureCount }, (_, featureIndex) => (
                <div key={featureIndex} className="flex items-start">
                  <FaCheck
                    className={`${pkg.iconColor} mt-1 mr-2 flex-shrink-0`}
                  />
                  <span
                    className={
                      featureIndex === 6 || featureIndex === 7
                        ? "font-bold"
                        : ""
                    }
                  >
                    {intl.formatMessage({ id: `socialMedia.packages.${pkg.key}.feature${featureIndex + 1}` })}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
