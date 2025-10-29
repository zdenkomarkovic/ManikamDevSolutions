"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaCreditCard,
  FaBoxes,
  FaTruck,
  FaUserFriends,
  FaChartLine,
  FaSearch,
  FaBell,
  FaMobile,
} from "react-icons/fa";
import { useMessages } from "@/lib/MessagesContext";

const FeaturesWebshop = () => {
  const intl = useMessages();

  const features = [
    {
      icon: FaShoppingCart,
      titleId: "webshopDevelopment.features.catalog.title",
      descriptionId: "webshopDevelopment.features.catalog.description",
    },
    {
      icon: FaCreditCard,
      titleId: "webshopDevelopment.features.payment.title",
      descriptionId: "webshopDevelopment.features.payment.description",
    },
    {
      icon: FaBoxes,
      titleId: "webshopDevelopment.features.inventory.title",
      descriptionId: "webshopDevelopment.features.inventory.description",
    },
    {
      icon: FaTruck,
      titleId: "webshopDevelopment.features.shipping.title",
      descriptionId: "webshopDevelopment.features.shipping.description",
    },
    {
      icon: FaUserFriends,
      titleId: "webshopDevelopment.features.users.title",
      descriptionId: "webshopDevelopment.features.users.description",
    },
    {
      icon: FaChartLine,
      titleId: "webshopDevelopment.features.analytics.title",
      descriptionId: "webshopDevelopment.features.analytics.description",
    },
    {
      icon: FaSearch,
      titleId: "webshopDevelopment.features.seo.title",
      descriptionId: "webshopDevelopment.features.seo.description",
    },
    {
      icon: FaBell,
      titleId: "webshopDevelopment.features.notifications.title",
      descriptionId: "webshopDevelopment.features.notifications.description",
    },
    {
      icon: FaMobile,
      titleId: "webshopDevelopment.features.mobile.title",
      descriptionId: "webshopDevelopment.features.mobile.description",
    },
  ];

  return (
    <div className="mt-16 bg-gradient-to-br from-gray-900 via-gray-700 to-orange-600 rounded-2xl p-8 shadow-lg border border-gray-100">
      <div className="flex justify-center mb-8">
        <motion.h2
          className="text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {intl.formatMessage({ id: "webshopDevelopment.features.title" })}
        </motion.h2>
      </div>
      <motion.p
        className="text-center text-gray-100 mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {intl.formatMessage({ id: "webshopDevelopment.features.subtitle" })}
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon className="text-2xl text-orange-600" />
                <h3 className="text-lg font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                  {intl.formatMessage({ id: feature.titleId })}
                </h3>
              </div>
              <p className="text-sm">{intl.formatMessage({ id: feature.descriptionId })}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesWebshop;
