"use client";

import { motion } from "framer-motion";
import {
  FaSearch,
  FaBullseye,
  FaPencilAlt,
  FaRocket,
  FaChartLine,
  FaSyncAlt,
} from "react-icons/fa";
import { useMessages } from "@/lib/MessagesContext";

export default function SocialMediaProcess() {
  const intl = useMessages();

  const steps = [
    { icon: FaSearch, key: "step1" },
    { icon: FaBullseye, key: "step2" },
    { icon: FaPencilAlt, key: "step3" },
    { icon: FaRocket, key: "step4" },
    { icon: FaChartLine, key: "step5" },
    { icon: FaSyncAlt, key: "step6" },
  ];
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
    <div>
      <div className="flex justify-center mb-8 md:mb-12">
        <motion.h2
          className="text-2xl md:text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {intl.formatMessage({ id: "socialMedia.process.title" })}
        </motion.h2>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-6 shadow-lg border border-gray-100"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              y: -10,
              boxShadow: "0 20px 40px rgba(249, 115, 22, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-14 h-14 bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl flex items-center justify-center mb-4"
              variants={iconVariants}
              whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.6 },
              }}
            >
              <step.icon className="text-2xl text-white" />
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {intl.formatMessage({ id: `socialMedia.process.${step.key}.title` })}
            </h3>
            <p className=" leading-relaxed">{intl.formatMessage({ id: `socialMedia.process.${step.key}.description` })}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
