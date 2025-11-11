"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/LocaleContext";

export default function RedesignFAQ() {
  const { t } = useLocale();
  const faq = t.redesignMigration.faq;
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

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      x: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="mt-16 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-4 md:p-8 shadow-lg border border-gray-100">
      <motion.h2
        className="text-3xl font-extrabold text-center mb-12 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {faq.title}
      </motion.h2>
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {faq.items.map((item: any, index: number) => (
          <motion.div
            key={index}
            className={`${
              index !== faq.items.length - 1
                ? "border-b border-gray-200 pb-6"
                : "pb-6"
            } border-l-4 border-orange-600 rounded-lg pl-4 md:pl-6`}
            variants={itemVariants}
            whileHover={{
              x: 10,
              transition: { duration: 0.3 },
            }}
          >
            <motion.h3
              className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              {item.question}
            </motion.h3>
            <motion.p
              className=""
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {item.answer}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
