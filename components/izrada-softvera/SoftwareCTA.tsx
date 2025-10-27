"use client";

import { motion } from "framer-motion";

export default function SoftwareCTA() {
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
      <motion.h2
        className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-5 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Spremni da Automatizujete Vaš Biznis?
      </motion.h2>
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
              Dobijte besplatnu konsultaciju
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
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </motion.svg>
                Analiza vaših potreba
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
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </motion.svg>
                Procena troškova i vremena
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
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </motion.svg>
                Tehnološke preporuke
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
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </motion.svg>
                Detaljni projektni plan
              </motion.li>
            </motion.ul>
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <motion.p
            className="mb-4 text-2xl md:text-3xl font-bold px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Kontaktirajte nas danas
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
              href={`tel:+381641967267`}
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
                +381641967267
              </span>
            </motion.a>

            {/* Email Button */}
            <motion.a
              href="mailto:manikamwebsolutions@gmail.com"
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

              <span className="block text-lg md:text-2xl font-normal">
                manikamwebsolutions@gmail.com
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
