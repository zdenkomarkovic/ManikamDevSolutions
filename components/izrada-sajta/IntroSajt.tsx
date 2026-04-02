"use client";

import { motion } from "framer-motion";
import { useMessages } from "@/lib/MessagesContext";

const cards = [
  {
    titleId: "websiteDevelopment.intro.card1Title",
    textId: "websiteDevelopment.intro.card1Text",
    icon: (
      <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    titleId: "websiteDevelopment.intro.card2Title",
    textId: "websiteDevelopment.intro.card2Text",
    icon: (
      <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    titleId: "websiteDevelopment.intro.card3Title",
    textId: "websiteDevelopment.intro.card3Text",
    icon: (
      <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const IntroSajt = () => {
  const intl = useMessages();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div>
      <div className="flex justify-center mb-8">
        <motion.h2
          className="text-xl md:text-3xl font-extrabold text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {intl.formatMessage({ id: "websiteDevelopment.intro.title" })}
        </motion.h2>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.titleId}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-orange-500/20 rounded-2xl p-6 shadow-lg flex flex-col gap-4"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.15)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-100">
                {intl.formatMessage({ id: card.titleId })}
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {intl.formatMessage({ id: card.textId })}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default IntroSajt;
