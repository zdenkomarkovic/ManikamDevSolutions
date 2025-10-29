"use client";

import { motion } from "framer-motion";
import { useMessages } from "@/lib/MessagesContext";

export default function SoftwareBenefits() {
  const intl = useMessages();

  const customPoints = [
    "point1",
    "point2",
    "point3",
    "point4",
    "point5",
    "point6",
    "point7",
    "point8",
  ];
  const readyPoints = [
    "point1",
    "point2",
    "point3",
    "point4",
    "point5",
    "point6",
    "point7",
    "point8",
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
          {intl.formatMessage({ id: "software.benefits.title" })}
        </motion.h2>
      </div>

      <motion.div
        className="grid md:grid-cols-2 gap-6 mb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl shadow-lg"
          variants={cardVariants}
          whileHover={{
            scale: 1.01,
            y: -3,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            <span className="text-orange-600 text-2xl">✓</span>
            {intl.formatMessage({
              id: "software.benefits.comparison.custom.title",
            })}
          </h3>
          <ul className="space-y-3">
            {customPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <span className="text-orange-600 text-2xl">✓</span>
                </motion.div>
                <span
                  dangerouslySetInnerHTML={{
                    __html: intl.formatMessage({
                      id: `software.benefits.comparison.custom.${point}`,
                    }),
                  }}
                />
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl shadow-lg"
          variants={cardVariants}
          whileHover={{
            scale: 1.01,
            y: -3,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            <span className="text-orange-600 text-2xl">✗</span>
            {intl.formatMessage({
              id: "software.benefits.comparison.ready.title",
            })}
          </h3>
          <ul className="space-y-3">
            {readyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <span className="text-orange-600 text-2xl">✗</span>
                </motion.div>
                <span
                  dangerouslySetInnerHTML={{
                    __html: intl.formatMessage({
                      id: `software.benefits.comparison.ready.${point}`,
                    }),
                  }}
                />
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl p-6 text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 10px 30px rgba(249, 115, 22, 0.4)",
        }}
      >
        <p className="font-semibold text-center">
          {intl.formatMessage({ id: "software.benefits.conclusion" })}
        </p>
      </motion.div>
    </div>
  );
}
