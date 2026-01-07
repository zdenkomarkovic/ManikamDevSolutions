"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaFacebook, FaInstagram, FaGoogle, FaGlobe } from "react-icons/fa";
import { useMessages } from "@/lib/MessagesContext";

export default function MarketingPaketPackage() {
  const intl = useMessages();

  const features = [
    { icon: FaFacebook, count: 8 },
    { icon: FaInstagram, count: 8 },
    { icon: FaGoogle, count: 5 },
    { icon: FaGlobe, count: 3 },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
        {intl.formatMessage({ id: "marketingPaket.package.title" })}
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-3xl p-6 md:p-10 shadow-2xl border-2 border-orange-200 relative overflow-hidden"
      >
        {/* Premium oznaka */}
        <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-600 to-orange-400 text-white px-6 py-2 rounded-bl-3xl text-sm">
          <span className="font-bold">{intl.formatMessage({ id: "marketingPaket.package.badge" })}</span>
        </div>

        {/* Naslov paketa */}
        <div className="mt-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-orange-600">
            {intl.formatMessage({ id: "marketingPaket.package.name" })}
          </h3>
          <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
            {intl.formatMessage({ id: "marketingPaket.package.price" })}
            <span className="text-lg md:text-xl text-gray-900">{intl.formatMessage({ id: "marketingPaket.package.period" })}</span>
          </div>
          <p className="text-base md:text-lg text-gray-800 mb-6">
            {intl.formatMessage({ id: "marketingPaket.package.description" })}
          </p>
        </div>

        <div className="w-full h-1 bg-gradient-to-r from-orange-400 to-orange-200 mb-8"></div>

        {/* Sekcije usluga */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="flex items-center mb-4">
                <feature.icon className="text-orange-600 text-2xl mr-3" />
                <h4 className="text-xl md:text-2xl font-bold text-orange-600">
                  {intl.formatMessage({ id: `marketingPaket.package.section${index + 1}.title` })}
                </h4>
              </div>
              <div className="space-y-3 ml-9">
                {Array.from({ length: feature.count }, (_, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <FaCheck className="text-orange-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-800">
                      {intl.formatMessage({ id: `marketingPaket.package.section${index + 1}.feature${featureIndex + 1}` })}
                    </span>
                  </div>
                ))}
              </div>
              {index < features.length - 1 && (
                <div className="w-full h-px bg-gray-300 mt-6"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bonus sekcija */}
        <div className="mt-8 p-6 bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl border-2 border-orange-300">
          <h4 className="text-xl md:text-2xl font-bold text-orange-600 mb-4 flex items-center">
            <span className="mr-2">🎁</span>
            {intl.formatMessage({ id: "marketingPaket.package.bonus.title" })}
          </h4>
          <div className="space-y-3">
            <div className="flex items-start">
              <FaCheck className="text-orange-600 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-800 font-semibold">
                {intl.formatMessage({ id: "marketingPaket.package.bonus.feature1" })}
              </span>
            </div>
            <div className="flex items-start">
              <FaCheck className="text-orange-600 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-800 font-semibold">
                {intl.formatMessage({ id: "marketingPaket.package.bonus.feature2" })}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
