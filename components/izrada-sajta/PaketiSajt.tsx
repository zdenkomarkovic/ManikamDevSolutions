"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaSearch,
  FaShieldAlt,
  FaCog,
  FaPaintBrush,
  FaShareAlt,
  FaServer,
  FaGlobe,
} from "react-icons/fa";
import { MdDevices, MdEmail, MdLanguage } from "react-icons/md";
import { useMessages } from "@/lib/MessagesContext";

const PaketiSajt = () => {
  const intl = useMessages();

  return (
    <div className="grid md:grid-cols-3 gap-4 md:">
      {/* Osnovni paket */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 flex flex-col justify-between rounded-2xl py-8 px-3 shadow-lg border border-gray-200"
      >
        <div>
          <h3 className=" text-2xl font-bold mb-5 text-orange-600">
            {intl.formatMessage({ id: "websiteDevelopment.packages.basic.title" })}
          </h3>
          <p className=" mb-4">{intl.formatMessage({ id: "websiteDevelopment.packages.basic.subtitle" })}</p>
          <div className="w-full h-1 bg-gray-200 mb-4"></div>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <FaCode className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.basic.feature1" })}</span>
            </div>
            <div className="flex items-start">
              <MdDevices className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
              <span>
                {intl.formatMessage({ id: "websiteDevelopment.packages.basic.feature2" })}
              </span>
            </div>
            <div className="flex items-start">
              <FaPaintBrush className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.basic.feature3" })}</span>
            </div>
            <div className="flex items-start">
              <MdEmail className="text-orange-600  mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.basic.feature4" })}</span>
            </div>
            <div className="flex items-start">
              <FaShareAlt className="text-orange-600  mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.basic.feature5" })}</span>
            </div>
            <div className="flex items-start">
              <FaSearch className="text-orange-600  mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.basic.feature6" })}</span>
            </div>
            <div className="flex items-start">
              <FaShieldAlt className="text-orange-600  mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.basic.feature7" })}</span>
            </div>
            <div className="flex items-start">
              <FaServer className="text-orange-600  mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.basic.feature8" })}</span>
            </div>
            <div className="flex items-start">
              <FaGlobe className="text-orange-600  mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.basic.feature9" })}</span>
            </div>
          </div>
        </div>
        <div className="">
          <strong>{intl.formatMessage({ id: "websiteDevelopment.packages.basic.timeline" })}</strong> {intl.formatMessage({ id: "websiteDevelopment.packages.basic.timelineDays" })}
        </div>
      </motion.div>

      {/* Profesionalni paket - NAJPOPULARNIJI */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 flex flex-col justify-between rounded-2xl py-8 px-3 shadow-xl border-2 border-blue-200 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-600 to-orange-400 text-white px-4 py-1 rounded-bl-2xl text-xs">
          <span className="font-bold">{intl.formatMessage({ id: "websiteDevelopment.packages.professional.badge" })}</span>
        </div>

        <div>
          <h3 className="m text-2xl font-bold mb-5 text-orange-600">
            {intl.formatMessage({ id: "websiteDevelopment.packages.professional.title" })}
          </h3>
          <p className="mb-4">{intl.formatMessage({ id: "websiteDevelopment.packages.professional.subtitle" })}</p>
          <div className="w-full h-1 bg-gray-200 mb-4"></div>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <FaCode className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.professional.feature1" })}</span>
            </div>
            <div className="flex items-start">
              <MdDevices className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
              <span>
                {intl.formatMessage({ id: "websiteDevelopment.packages.professional.feature2" })}
              </span>
            </div>
            <div className="flex items-start">
              <FaPaintBrush className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.professional.feature3" })}</span>
            </div>
            <div className="flex items-start">
              <FaCog className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.professional.feature4" })}</span>
            </div>
            <div className="flex items-start">
              <MdEmail className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.professional.feature5" })}</span>
            </div>
            <div className="flex items-start">
              <FaShareAlt className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.professional.feature6" })}</span>
            </div>
            <div className="flex items-start">
              <FaSearch className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.professional.feature7" })}</span>
            </div>
            <div className="flex items-start">
              <FaShieldAlt className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.professional.feature8" })}</span>
            </div>
            <div className="flex items-start">
              <FaServer className="text-orange-600  mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.professional.feature9" })}</span>
            </div>
            <div className="flex items-start">
              <FaGlobe className="text-orange-600  mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.professional.feature10" })}</span>
            </div>
          </div>
        </div>
        <div className="">
          <strong>{intl.formatMessage({ id: "websiteDevelopment.packages.professional.timeline" })}</strong> {intl.formatMessage({ id: "websiteDevelopment.packages.professional.timelineDays" })}
        </div>
      </motion.div>

      {/* Premium paket */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 flex flex-col justify-between rounded-2xl py-8 px-3  shadow-lg border border-gray-200"
      >
        <div>
          <h3 className=" text-2xl font-bold mb-5 text-orange-600">
            {intl.formatMessage({ id: "websiteDevelopment.packages.premium.title" })}
          </h3>
          <p className="mb-2">{intl.formatMessage({ id: "websiteDevelopment.packages.premium.subtitle" })}</p>
          <div className="w-full h-1 bg-gray-200 mb-4"></div>

          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <FaCode className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.premium.feature1" })}</span>
            </div>
            <div className="flex items-start">
              <MdDevices className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
              <span>
                {intl.formatMessage({ id: "websiteDevelopment.packages.premium.feature2" })}
              </span>
            </div>
            <div className="flex items-start">
              <FaPaintBrush className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.premium.feature3" })}</span>
            </div>
            <div className="flex items-start">
              <FaCog className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.premium.feature4" })}</span>
            </div>
            <div className="flex items-start">
              <MdEmail className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.premium.feature5" })}</span>
            </div>
            <div className="flex items-start">
              <FaShareAlt className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.premium.feature6" })}</span>
            </div>
            <div className="flex items-start">
              <FaSearch className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.premium.feature7" })}</span>
            </div>
            <div className="flex items-start">
              <MdLanguage className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.premium.feature8" })}</span>
            </div>
            <div className="flex items-start">
              <FaShieldAlt className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.premium.feature9" })}</span>
            </div>
            <div className="flex items-start">
              <FaServer className="text-orange-600  mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.premium.feature10" })}</span>
            </div>
            <div className="flex items-start">
              <FaGlobe className="text-orange-600  mt-1 mr-2 flex-shrink-0" />
              <span>{intl.formatMessage({ id: "websiteDevelopment.packages.premium.feature11" })}</span>
            </div>
          </div>
        </div>
        <div className="">
          <strong>{intl.formatMessage({ id: "websiteDevelopment.packages.premium.timeline" })}</strong> {intl.formatMessage({ id: "websiteDevelopment.packages.premium.timelineDays" })}
        </div>
      </motion.div>
    </div>
  );
};

export default PaketiSajt;
