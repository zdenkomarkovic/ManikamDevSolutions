"use client";

import { motion } from "framer-motion";
import { useMessages } from "@/lib/MessagesContext";

const ProcesSajt = () => {
  const intl = useMessages();
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
      <div className="flex justify-center mb-12">
        <motion.h2
          className="text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {intl.formatMessage({ id: "websiteDevelopment.process.title" })}
        </motion.h2>
      </div>
      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="space-y-5"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 },
          }}
        >
          <div className="flex gap-6 items-center">
            <motion.div
              className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              1
            </motion.div>
            <motion.h3
              className="text-xl font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              {intl.formatMessage({ id: "websiteDevelopment.process.step1.title" })}
            </motion.h3>
          </div>
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {intl.formatMessage({ id: "websiteDevelopment.process.step1.text" })}
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-5"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 },
          }}
        >
          <div className="flex gap-6 items-center">
            <motion.div
              className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              2
            </motion.div>
            <motion.h3
              className="text-xl font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              {intl.formatMessage({ id: "websiteDevelopment.process.step2.title" })}
            </motion.h3>
          </div>
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {intl.formatMessage({ id: "websiteDevelopment.process.step2.text" })}
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-5"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 },
          }}
        >
          <div className="flex gap-6 items-center">
            <motion.div
              className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              3
            </motion.div>
            <motion.h3
              className="text-xl font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              {intl.formatMessage({ id: "websiteDevelopment.process.step3.title" })}
            </motion.h3>
          </div>
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {intl.formatMessage({ id: "websiteDevelopment.process.step3.text" })}
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-5"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 },
          }}
        >
          <div className="flex gap-6 items-center">
            <motion.div
              className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              4
            </motion.div>
            <motion.h3
              className="text-xl font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              {intl.formatMessage({ id: "websiteDevelopment.process.step4.title" })}
            </motion.h3>
          </div>
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {intl.formatMessage({ id: "websiteDevelopment.process.step4.text" })}
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-5"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 },
          }}
        >
          <div className="flex gap-6 items-center">
            <motion.div
              className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              5
            </motion.div>
            <motion.h3
              className="text-xl font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              {intl.formatMessage({ id: "websiteDevelopment.process.step5.title" })}
            </motion.h3>
          </div>
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {intl.formatMessage({ id: "websiteDevelopment.process.step5.text" })}
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-5"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 },
          }}
        >
          <div className="flex gap-6 items-center">
            <motion.div
              className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              6
            </motion.div>
            <motion.h3
              className="text-xl font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              {intl.formatMessage({ id: "websiteDevelopment.process.step6.title" })}
            </motion.h3>
          </div>
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {intl.formatMessage({ id: "websiteDevelopment.process.step6.text" })}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProcesSajt;
