"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { useMessages } from "@/lib/MessagesContext";

export default function SEOServices() {
  const intl = useMessages();

  const services = [
    {
      categoryId: "seoOptimization.services.onPage.title",
      items: [
        "seoOptimization.services.onPage.items.0",
        "seoOptimization.services.onPage.items.1",
        "seoOptimization.services.onPage.items.2",
        "seoOptimization.services.onPage.items.3",
        "seoOptimization.services.onPage.items.4",
        "seoOptimization.services.onPage.items.5",
      ],
    },
    {
      categoryId: "seoOptimization.services.offPage.title",
      items: [
        "seoOptimization.services.offPage.items.0",
        "seoOptimization.services.offPage.items.1",
        "seoOptimization.services.offPage.items.2",
        "seoOptimization.services.offPage.items.3",
        "seoOptimization.services.offPage.items.4",
      ],
    },
    {
      categoryId: "seoOptimization.services.technical.title",
      items: [
        "seoOptimization.services.technical.items.0",
        "seoOptimization.services.technical.items.1",
        "seoOptimization.services.technical.items.2",
        "seoOptimization.services.technical.items.3",
        "seoOptimization.services.technical.items.4",
        "seoOptimization.services.technical.items.5",
      ],
    },
    {
      categoryId: "seoOptimization.services.local.title",
      items: [
        "seoOptimization.services.local.items.0",
        "seoOptimization.services.local.items.1",
        "seoOptimization.services.local.items.2",
        "seoOptimization.services.local.items.3",
        "seoOptimization.services.local.items.4",
        "seoOptimization.services.local.items.5",
      ],
    },
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
          {intl.formatMessage({ id: "seoOptimization.services.title" })}
        </motion.h2>
      </div>
      <motion.p
        className="text-center text-gray-100 mb-12 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {intl.formatMessage({ id: "seoOptimization.services.subtitle" })}
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
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
            <div className="flex justify-center mb-4">
              <h3 className="text-xl md:text-2xl font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                {intl.formatMessage({ id: service.categoryId })}
              </h3>
            </div>
            <motion.ul
              className="space-y-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {service.items.map((itemId, itemIndex) => (
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
                    <FaCheckCircle className="text-orange-600 flex-shrink-0 " />
                  </motion.div>
                  <span className="">
                    {intl.formatMessage({ id: itemId })}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
