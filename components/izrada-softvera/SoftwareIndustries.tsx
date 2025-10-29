"use client";

import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaBriefcase,
  FaHeart,
  FaGraduationCap,
  FaHome,
  FaIndustry,
  FaTruck,
  FaHotel,
} from "react-icons/fa";
import { useMessages } from "@/lib/MessagesContext";

export default function SoftwareIndustries() {
  const intl = useMessages();

  const industries = [
    { icon: FaShoppingCart, key: "ecommerce" },
    { icon: FaBriefcase, key: "b2b" },
    { icon: FaHeart, key: "healthcare" },
    { icon: FaGraduationCap, key: "education" },
    { icon: FaHome, key: "realEstate" },
    { icon: FaIndustry, key: "manufacturing" },
    { icon: FaTruck, key: "logistics" },
    { icon: FaHotel, key: "hospitality" },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="mt-16">
      <motion.div
        className="mb-12 flex justify-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
          {intl.formatMessage({ id: "software.industries.title" })}
        </h2>
      </motion.div>

      <motion.p
        className="text-center text-gray-100 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {intl.formatMessage({ id: "software.industries.subtitle" })}
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          const gradients = [
            "bg-gradient-to-bl from-gray-900 via-gray-800 to-orange-600",
            "bg-gradient-to-br from-gray-900 via-gray-800 to-orange-600",
            "bg-gradient-to-bl from-gray-900 via-gray-800 to-orange-600",
            "bg-gradient-to-br from-gray-900 via-gray-800 to-orange-600",
          ];
          return (
            <motion.div
              key={index}
              className={`${
                gradients[index % 4]
              } rounded-xl p-6 shadow-lg text-center`}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4"
                variants={iconVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <Icon className="text-2xl text-white" />
              </motion.div>
              <h4 className="text-xl font-bold mb-3 text-gray-100">
                {intl.formatMessage({ id: `software.industries.${industry.key}.name` })}
              </h4>
              <p className="text-gray-100">
                {intl.formatMessage({ id: `software.industries.${industry.key}.description` })}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
