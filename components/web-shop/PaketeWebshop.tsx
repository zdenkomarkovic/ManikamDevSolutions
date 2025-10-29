"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaCreditCard,
  FaChartLine,
  FaMobile,
  FaLock,
  FaCog,
  FaBell,
  FaLanguage,
  FaBoxes,
  FaServer,
  FaGlobe,
} from "react-icons/fa";
import { useMessages } from "@/lib/MessagesContext";

const PaketeWebshop = () => {
  const intl = useMessages();

  return (
    <div className="grid md:grid-cols-3 gap-6 ">
      {/* Osnovni paket */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col justify-between bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-6 shadow-lg border border-gray-200"
      >
        <div>
          {" "}
          <h3 className="text-2xl font-bold mb-2 text-orange-600">
            {intl.formatMessage({ id: "webshopDevelopment.packages.basic.title" })}
          </h3>
          <p className="mb-4">
            {intl.formatMessage({ id: "webshopDevelopment.packages.basic.subtitle" })}
          </p>
          <div className="w-full h-1 bg-gray-200 mb-4"></div>
          <div className="space-y-3 mb-6">
            <div className="flex items-center">
              <FaShoppingCart className="text-orange-600 mr-3 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "webshopDevelopment.packages.basic.feature1" })}</span>
            </div>
            <div className="flex items-center">
              <FaMobile className="text-orange-600 mr-3 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "webshopDevelopment.packages.basic.feature2" })}</span>
            </div>
            <div className="flex items-center">
              <FaLock className="text-orange-600 mr-3 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "webshopDevelopment.packages.basic.feature3" })}</span>
            </div>
            <div className="flex items-center">
              <FaBoxes className="text-orange-600 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "webshopDevelopment.packages.basic.feature4" })}</span>
            </div>
            <div className="flex items-center">
              <FaServer className="text-orange-600 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "webshopDevelopment.packages.basic.feature5" })}</span>
            </div>
            <div className="flex items-center">
              <FaGlobe className="text-orange-600 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "webshopDevelopment.packages.basic.feature6" })}</span>
            </div>
          </div>
        </div>
        <div className=" ">
          <strong>{intl.formatMessage({ id: "webshopDevelopment.packages.basic.timeline" })}</strong> {intl.formatMessage({ id: "webshopDevelopment.packages.basic.timelineDays" })}
        </div>
      </motion.div>

      {/* Profesionalni paket - NAJPOPULARNIJI */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col justify-between bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-6 shadow-xl border-2 border-blue-200 relative overflow-hidden"
      >
        <div>
          <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-600 to-orange-400 text-white px-4 py-1 rounded-bl-2xl text-xs">
            <span className="font-bold">{intl.formatMessage({ id: "webshopDevelopment.packages.professional.badge" })}</span>
          </div>

          <div className="">
            <h3 className="text-2xl font-bold mb-2 text-orange-600">
              {intl.formatMessage({ id: "webshopDevelopment.packages.professional.title" })}
            </h3>
            <p className=" mb-4">
              {intl.formatMessage({ id: "webshopDevelopment.packages.professional.subtitle" })}
            </p>
            <div className="w-full h-1 bg-gray-200 mb-4"></div>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <FaShoppingCart className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
                <span>{intl.formatMessage({ id: "webshopDevelopment.packages.professional.feature1" })}</span>
              </div>

              <div className="flex items-start">
                <FaCreditCard className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
                <span>{intl.formatMessage({ id: "webshopDevelopment.packages.professional.feature2" })}</span>
              </div>
              <div className="flex items-start">
                <FaCog className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
                <span>{intl.formatMessage({ id: "webshopDevelopment.packages.professional.feature3" })}</span>
              </div>
              <div className="flex items-start">
                <FaMobile className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
                <span>{intl.formatMessage({ id: "webshopDevelopment.packages.professional.feature4" })}</span>
              </div>
              <div className="flex items-start">
                <FaChartLine className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
                <span>{intl.formatMessage({ id: "webshopDevelopment.packages.professional.feature5" })}</span>
              </div>
              <div className="flex items-start">
                <FaBell className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
                <span>{intl.formatMessage({ id: "webshopDevelopment.packages.professional.feature6" })}</span>
              </div>
              <div className="flex items-center">
                <FaServer className="text-orange-600 mr-2 flex-shrink-0" />
                <span>{intl.formatMessage({ id: "webshopDevelopment.packages.professional.feature7" })}</span>
              </div>
              <div className="flex items-center">
                <FaGlobe className="text-orange-600 mr-2 flex-shrink-0" />
                <span>{intl.formatMessage({ id: "webshopDevelopment.packages.professional.feature8" })}</span>
              </div>
            </div>
          </div>
          <div className="">
            <strong>{intl.formatMessage({ id: "webshopDevelopment.packages.professional.timeline" })}</strong> {intl.formatMessage({ id: "webshopDevelopment.packages.professional.timelineDays" })}
            <br />
            <strong>{intl.formatMessage({ id: "webshopDevelopment.packages.professional.support" })}</strong> {intl.formatMessage({ id: "webshopDevelopment.packages.professional.supportDuration" })}
          </div>
        </div>
      </motion.div>

      {/* Premium paket */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col justify-between bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-6 shadow-lg border border-gray-200"
      >
        <div>
          <h3 className="text-2xl font-bold mb-2 text-orange-600">
            {intl.formatMessage({ id: "webshopDevelopment.packages.premium.title" })}
          </h3>
          <p className=" mb-4">
            {intl.formatMessage({ id: "webshopDevelopment.packages.premium.subtitle" })}
          </p>
          <div className="w-full h-1 bg-gray-200 mb-4"></div>
          <div className="space-y-3 mb-6">
            <div className="flex items-center">
              <FaShoppingCart className="text-orange-600 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "webshopDevelopment.packages.premium.feature1" })}</span>
            </div>
            <div className="flex items-center">
              <FaCreditCard className="text-orange-600 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "webshopDevelopment.packages.premium.feature2" })}</span>
            </div>
            <div className="flex items-center">
              <FaCog className="text-orange-600 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "webshopDevelopment.packages.premium.feature3" })}</span>
            </div>

            <div className="flex items-center">
              <FaLanguage className="text-orange-600 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "webshopDevelopment.packages.premium.feature4" })}</span>
            </div>
            <div className="flex items-center">
              <FaServer className="text-orange-600 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "webshopDevelopment.packages.premium.feature5" })}</span>
            </div>
            <div className="flex items-center">
              <FaGlobe className="text-orange-600 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "webshopDevelopment.packages.premium.feature6" })}</span>
            </div>
          </div>
        </div>
        <div className="">
          <strong>{intl.formatMessage({ id: "webshopDevelopment.packages.premium.timeline" })}</strong> {intl.formatMessage({ id: "webshopDevelopment.packages.premium.timelineDays" })}
          <br />
          <strong>{intl.formatMessage({ id: "webshopDevelopment.packages.premium.support" })}</strong> {intl.formatMessage({ id: "webshopDevelopment.packages.premium.supportDuration" })}
        </div>
      </motion.div>
    </div>
  );
};

export default PaketeWebshop;
