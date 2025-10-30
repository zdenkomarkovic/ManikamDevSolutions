"use client";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import { motion } from "framer-motion";
import {
  FaBullseye,
  FaDollarSign,
  FaChartBar,
  FaCrosshairs,
  FaCheckCircle,
} from "react-icons/fa";
import { useMessages } from "@/lib/MessagesContext";

export default function SocialMediaAds() {
  const intl = useMessages();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        delay: 0.2,
      },
    },
  };

  return (
    <div className="mt-16 bg-gradient-to-br from-gray-900 via-gray-700 to-orange-600 rounded-2xl p-4 md:p-8 shadow-lg border border-gray-100">
      <div className="flex justify-center mb-8">
        <motion.h2
          className="text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {intl.formatMessage({ id: "socialMedia.ads.title" })}
        </motion.h2>
      </div>
      <motion.p
        className="text-center text-gray-100 mb-12 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {intl.formatMessage({ id: "socialMedia.ads.subtitle" })}
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl text-center hover:shadow-lg transition-shadow"
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            y: -5,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-14 h-14 bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4"
            variants={iconVariants}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
          >
            <FaBullseye className="text-2xl text-white" />
          </motion.div>
          <h3 className="text-xl font-bold mb-3 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {intl.formatMessage({ id: "socialMedia.ads.features.targeting.title" })}
          </h3>
          <p className="">
            {intl.formatMessage({ id: "socialMedia.ads.features.targeting.description" })}
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl text-center hover:shadow-lg transition-shadow"
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            y: -5,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-14 h-14 bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4"
            variants={iconVariants}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
          >
            <FaDollarSign className="text-2xl text-white" />
          </motion.div>
          <h3 className="text-xl font-bold mb-3 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {intl.formatMessage({ id: "socialMedia.ads.features.budget.title" })}
          </h3>
          <p className="">
            {intl.formatMessage({ id: "socialMedia.ads.features.budget.description" })}
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl text-center hover:shadow-lg transition-shadow"
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            y: -5,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-14 h-14 bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4"
            variants={iconVariants}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
          >
            <FaChartBar className="text-2xl text-white" />
          </motion.div>
          <h3 className="text-xl font-bold mb-3 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {intl.formatMessage({ id: "socialMedia.ads.features.results.title" })}
          </h3>
          <p className="">
            {intl.formatMessage({ id: "socialMedia.ads.features.results.description" })}
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl text-center hover:shadow-lg transition-shadow"
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            y: -5,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-14 h-14 bg-gradient-to-r from-orange-600 to-orange-400  rounded-xl flex items-center justify-center mx-auto mb-4"
            variants={iconVariants}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
          >
            <FaCrosshairs className="text-2xl text-white" />
          </motion.div>
          <h3 className="text-xl font-bold mb-3 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {intl.formatMessage({ id: "socialMedia.ads.features.retargeting.title" })}
          </h3>
          <p className="">
            {intl.formatMessage({ id: "socialMedia.ads.features.retargeting.description" })}
          </p>
        </motion.div>
      </motion.div>
      <div className="flex justify-center mt-8 mb-6">
        <motion.h3
          className="text-xl md:text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {intl.formatMessage({ id: "socialMedia.ads.campaignTypesTitle" })}
        </motion.h3>
      </div>

      <motion.div
        className="mt-8 p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.01,
          y: -3,
          boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
        }}
      >
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={cardVariants}>
            <h4 className="font-bold text-xl inline-flex items-center gap-2 mb-4 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              <motion.span
                className="w-10 h-10 rounded-full flex items-center justify-center"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaFacebook className="text-5xl text-blue-600" />
              </motion.span>
              {intl.formatMessage({ id: "socialMedia.ads.facebookCampaigns.title" })}
            </h4>
            <ul className="space-y-2">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <li key={num} className="flex items-start md:items-center gap-2">
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.6 },
                    }}
                  >
                    <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1 md:mt-0" />
                  </motion.div>
                  <span className="" dangerouslySetInnerHTML={{
                    __html: intl.formatMessage({ id: `socialMedia.ads.facebookCampaigns.campaign${num}` })
                  }} />
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={cardVariants}>
            <h4 className="font-bold inline-flex items-center gap-2 mb-4 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              <motion.span
                className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white rounded-full flex items-center justify-center"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaInstagram className="text-3xl text-white" />
              </motion.span>
              {intl.formatMessage({ id: "socialMedia.ads.instagramCampaigns.title" })}
            </h4>
            <ul className="space-y-2">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <li key={num} className="flex items-start md:items-center gap-2">
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.6 },
                    }}
                  >
                    <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1 md:mt-0" />
                  </motion.div>
                  <span className="" dangerouslySetInnerHTML={{
                    __html: intl.formatMessage({ id: `socialMedia.ads.instagramCampaigns.campaign${num}` })
                  }} />
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-6 p-4 bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 10px 30px rgba(249, 115, 22, 0.4)",
          }}
        >
          <p className="font-semibold mb-2">{intl.formatMessage({ id: "socialMedia.ads.adviceTitle" })}</p>
          <p className="text-sm">
            {intl.formatMessage({ id: "socialMedia.ads.adviceText" })}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
