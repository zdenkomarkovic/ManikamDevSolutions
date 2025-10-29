"use client";

import { motion } from "framer-motion";
import { useMessages } from "@/lib/MessagesContext";

const ProcesWebshop = () => {
  const intl = useMessages();

  const steps = [
    {
      number: 1,
      titleId: "webshopDevelopment.process.step1.title",
      descriptionId: "webshopDevelopment.process.step1.description",
    },
    {
      number: 2,
      titleId: "webshopDevelopment.process.step2.title",
      descriptionId: "webshopDevelopment.process.step2.description",
    },
    {
      number: 3,
      titleId: "webshopDevelopment.process.step3.title",
      descriptionId: "webshopDevelopment.process.step3.description",
    },
    {
      number: 4,
      titleId: "webshopDevelopment.process.step4.title",
      descriptionId: "webshopDevelopment.process.step4.description",
    },
    {
      number: 5,
      titleId: "webshopDevelopment.process.step5.title",
      descriptionId: "webshopDevelopment.process.step5.description",
    },
    {
      number: 6,
      titleId: "webshopDevelopment.process.step6.title",
      descriptionId: "webshopDevelopment.process.step6.description",
    },
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
    <div className="mt-16 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-5 md:p-8 shadow-lg border border-gray-100">
      <div className="flex justify-center mb-12">
        <motion.h2
          className="text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {intl.formatMessage({ id: "webshopDevelopment.process.title" })}
        </motion.h2>
      </div>
      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {steps.map((step) => (
          <motion.div
            key={step.number}
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
                {step.number}
              </motion.div>
              <motion.h3
                className="text-xl font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                {intl.formatMessage({ id: step.titleId })}
              </motion.h3>
            </div>
            <motion.p
              className=""
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {intl.formatMessage({ id: step.descriptionId })}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProcesWebshop;
