"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { useMessages } from "@/lib/MessagesContext";

export default function SocialMediaContent() {
  const intl = useMessages();

  const contentTypes = [
    { key: "graphicDesign", itemCount: 6 },
    { key: "videoContent", itemCount: 6 },
    { key: "copywriting", itemCount: 6 },
    { key: "contentStrategy", itemCount: 6 },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
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
          {intl.formatMessage({ id: "socialMedia.content.title" })}
        </motion.h2>
      </div>
      <motion.p
        className="text-center text-gray-100 mb-12 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {intl.formatMessage({ id: "socialMedia.content.subtitle" })}
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {contentTypes.map((type, index) => (
          <motion.div
            key={index}
            className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-shadow"
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              y: -5,
              boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              {intl.formatMessage({ id: `socialMedia.content.${type.key}.title` })}
            </h3>
            <motion.ul
              className="space-y-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {Array.from({ length: type.itemCount }, (_, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.6 },
                    }}
                  >
                    <FaCheckCircle className="text-orange-600 flex-shrink-0" />
                  </motion.div>
                  <span className="">{intl.formatMessage({ id: `socialMedia.content.${type.key}.item${itemIndex + 1}` })}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>

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
        <div className="flex justify-center mb-6">
          <motion.h3
            className="text-xl md:text-2xl font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {intl.formatMessage({ id: "socialMedia.content.whyImportantTitle" })}
          </motion.h3>
        </div>
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {["reason1", "reason2", "reason3"].map((key) => (
            <motion.div key={key} variants={cardVariants} className="text-center">
              <h4 className="font-bold text-gray-900 mb-2 text-lg">
                {intl.formatMessage({ id: `socialMedia.content.${key}.title` })}
              </h4>
              <p className=" text-sm leading-relaxed">
                {intl.formatMessage({ id: `socialMedia.content.${key}.description` })}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
