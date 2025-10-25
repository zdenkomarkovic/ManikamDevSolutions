"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const packages = [
  {
    name: "Starter Paket",
    price: "Od 150€",
    period: "/mesečno",
    description: "Idealno za male biznise koji počinju sa društvenim mrežama",
    features: [
      "Post - 2 nedeljno",
      "Stories - 1 nedeljno",
      "Reel - 1 nedeljno",
      "Osnovno grafičko dizajniranje",
      "Hashtag research",
      "Content calendar planiranje",
    ],
    iconColor: "text-green-500",
    highlight: false,
  },
  {
    name: "Profesionalni Paket",
    price: "Od 200€",
    period: "/mesečno",
    description: "Kompletno rešenje za ozbiljan online rast",
    features: [
      "Post - 3 nedeljno",
      "Stories - 2 nedeljno",
      "Reel - 1 nedeljno",
      "Profesionalni grafički dizajn i foto editing",
      "Hashtag research",
      "Content calendar planiranje",
    ],
    iconColor: "text-green-500",
    highlight: true,
  },
  {
    name: "Premium Paket",
    price: "Od 400€",
    period: "/mesečno",
    description: "Maksimalan rast sa video sadržajem i reklamama",
    features: [
      "Post - 3 nedeljno",
      "Stories - 3 nedeljno",
      "Reel - 2 nedeljno",
      "Premium grafički dizajn",
      "Odgovaranje na poruke i komentare",
      "Hashtag research",
      "Content calendar planiranje",
    ],
    iconColor: "text-green-500",
    highlight: false,
  },
];

export default function SocialMediaPackages() {
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
              ? "border-2 border-blue-200 shadow-xl relative overflow-hidden"
              : "border border-gray-200"
          }`}
        >
          {pkg.highlight && (
            <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-500 to-purple-600 text-white px-4 py-1 rounded-bl-2xl text-xs">
              <span className="font-bold">NAJPOPULARNIJI</span>
            </div>
          )}

          <div>
            <h3 className="text-2xl font-bold mb-5 text-orange-500">
              {pkg.name}
            </h3>
            <div className="text-3xl font-bold text-orange-500 mb-2">
              {pkg.price}
              <span className="text-lg text-gray-600">{pkg.period}</span>
            </div>
            <p className="text-gray-600 mb-4">{pkg.description}</p>
            <div className="w-full h-1 bg-gray-200 mb-4"></div>
            <div className="space-y-3 mb-6">
              {pkg.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start">
                  <FaCheck
                    className={`${pkg.iconColor} mt-1 mr-2 flex-shrink-0`}
                  />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
