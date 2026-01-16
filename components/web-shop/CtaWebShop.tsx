"use client";

import { motion } from "framer-motion";
import { useMessages } from "@/lib/MessagesContext";

// Declare gtag_report_conversion function type
declare global {
  interface Window {
    gtag_report_conversion?: (url: string) => boolean;
  }
}

const CtaWebShop = () => {
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
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="text-gray-50 bg-gradient-to-br from-gray-700 via-gray-500 to-gray-200 rounded-2xl py-3 md:p-6 text-center">
      <div className="flex justify-center mb-3 md:mb-5">
        <motion.h2
          className="text-2xl md:text-4xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {intl.formatMessage({ id: "webshopDevelopment.cta.title" })}
        </motion.h2>
      </div>
      <motion.div
        className="grid md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="md:space-y-8 md:px-20" variants={itemVariants}>
          <div>
            <h3 className="text-xl font-bold mb-4">
              {intl.formatMessage({ id: "webshopDevelopment.results.title" })}
            </h3>
            <motion.ul
              className="space-y-1 md:space-y-3 mx-auto w-fit"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.li className="flex items-center" variants={itemVariants}>
                <motion.svg
                  className="w-5 h-5 mr-3 text-orange-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                    clipRule="evenodd"
                  />
                </motion.svg>
                {intl.formatMessage({ id: "webshopDevelopment.results.item1" })}
              </motion.li>
              <motion.li className="flex items-center" variants={itemVariants}>
                <motion.svg
                  className="w-5 h-5 mr-3 text-orange-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </motion.svg>
                {intl.formatMessage({ id: "webshopDevelopment.results.item2" })}
              </motion.li>
              <motion.li className="flex items-center" variants={itemVariants}>
                <motion.svg
                  className="w-5 h-5 mr-3 text-orange-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <path d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" />
                </motion.svg>
                {intl.formatMessage({ id: "webshopDevelopment.results.item3" })}
              </motion.li>
              <motion.li className="flex items-center" variants={itemVariants}>
                <motion.svg
                  className="w-5 h-5 mr-3 text-orange-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </motion.svg>
                {intl.formatMessage({ id: "webshopDevelopment.results.item4" })}
              </motion.li>
            </motion.ul>
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <motion.p
            className="mb-4 text-2xl md:text-3xl opacity-90 font-bold px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {intl.formatMessage({ id: "webshopDevelopment.cta.subtitle" })}
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 justify-center items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Phone Call Button */}
            <motion.a
              href={`tel:${intl.formatMessage({ id: "webshopDevelopment.cta.phone" })}`}
              onClick={() => {
                if (window.gtag_report_conversion) {
                  window.gtag_report_conversion(`tel:${intl.formatMessage({ id: "webshopDevelopment.cta.phone" })}`);
                }
              }}
              className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-orange-600 to-orange-400 text-white px-2 md:px-8 py-1 md:py-3 rounded-xl text-base md:text-3xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg
                className="w-6 h-6 md:w-8 md:h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                whileHover={{
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </motion.svg>
              <span className="block text-lg md:text-2xl font-normal">
                {intl.formatMessage({ id: "webshopDevelopment.cta.phone" })}
              </span>
            </motion.a>

            {/* Email Button */}
            <motion.a
              href={`mailto:${intl.formatMessage({ id: "webshopDevelopment.cta.email" })}`}
              className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-orange-600 to-orange-400 text-white px-2 md:px-8 py-1 md:py-3 rounded-xl text-base md:text-3xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg
                className="w-6 h-6 md:w-8 md:h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                whileHover={{
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </motion.svg>

              <span className="block text-lg md:text-2xl font-normal ">
                {intl.formatMessage({ id: "webshopDevelopment.cta.email" })}
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CtaWebShop;
