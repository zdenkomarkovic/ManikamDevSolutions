"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaTachometerAlt, FaChartLine, FaTrophy } from "react-icons/fa";

export default function RedesignPerformance() {
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
    <div className="mt-16 bg-gradient-to-br from-gray-900 via-gray-700 to-orange-600 rounded-2xl p-4 md:p-8 shadow-lg border border-gray-100">
      <div className="flex justify-center mb-8">
        <motion.h2
          className="text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Realne Performanse, Merljivi Rezultati
        </motion.h2>
      </div>

      <motion.p
        className="text-center text-gray-100 mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Ovo nisu samo marketinške priče - evo konkretnih podataka naših
        klijenata nakon migracije
      </motion.p>

      <motion.div
        className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl shadow-lg text-center"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -10,
            boxShadow: "0 20px 40px rgba(249, 115, 22, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-14 h-14 bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4"
            variants={iconVariants}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
          >
            <FaTachometerAlt className="text-2xl text-white" />
          </motion.div>
          <div className="text-5xl font-bold text-orange-600 mb-2">-75%</div>
          <div className="text-xl font-semibold mb-2 text-gray-900">
            Vreme Učitavanja
          </div>
          <div className="text-sm">Sa 6.2s na 1.5s prosečno</div>
        </motion.div>

        <motion.div
          className="p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl shadow-lg text-center"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -10,
            boxShadow: "0 20px 40px rgba(249, 115, 22, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-14 h-14 bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4"
            variants={iconVariants}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
          >
            <FaChartLine className="text-2xl text-white" />
          </motion.div>
          <div className="text-5xl font-bold text-orange-600 mb-2">+45%</div>
          <div className="text-xl font-semibold mb-2 text-gray-900">
            Organski Saobraćaj
          </div>
          <div className="text-sm">U prvih 3 meseca nakon migracije</div>
        </motion.div>

        <motion.div
          className="p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl shadow-lg text-center"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -10,
            boxShadow: "0 20px 40px rgba(249, 115, 22, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-14 h-14 bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4"
            variants={iconVariants}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
          >
            <FaTrophy className="text-2xl text-white" />
          </motion.div>
          <div className="text-5xl font-bold text-orange-600 mb-2">95+</div>
          <div className="text-xl font-semibold mb-2 text-gray-900">
            PageSpeed Score
          </div>
          <div className="text-sm">Google lighthouse rezultat</div>
        </motion.div>
      </motion.div>

      <motion.div
        className="p-6 md:p-8 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.02,
          y: -5,
          boxShadow: "0 25px 50px rgba(249, 115, 22, 0.15)",
        }}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
          Comparison: WordPress vs Next.js
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-6 text-orange-600">
              Tipičan WordPress Sajt
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">Vreme učitavanja:</span>
                <span className="font-bold text-orange-600">4-8 sekundi</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">PageSpeed Score:</span>
                <span className="font-bold text-orange-600">30-60</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">Server Requests:</span>
                <span className="font-bold text-orange-600">80-150</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">Page Size:</span>
                <span className="font-bold text-orange-600">3-8 MB</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">Monthly Hosting:</span>
                <span className="font-bold text-orange-600">€15-50</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">Security Updates:</span>
                <span className="font-bold text-orange-600">Weekly</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">Mobile Score:</span>
                <span className="font-bold text-orange-600">Poor</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-orange-600">
              Next.js Sajt
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">Vreme učitavanja:</span>
                <span className="font-bold text-orange-600">0.5-2 sekunde</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">PageSpeed Score:</span>
                <span className="font-bold text-orange-600">90-100</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">Server Requests:</span>
                <span className="font-bold text-orange-600">10-30</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">Page Size:</span>
                <span className="font-bold text-orange-600">200-800 KB</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">Monthly Hosting:</span>
                <span className="font-bold text-orange-600">€0-10</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">Security Updates:</span>
                <span className="font-bold text-orange-600">Automatic</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">Mobile Score:</span>
                <span className="font-bold text-orange-600">Excellent</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="text-xl text-gray-100 mb-6">
          Svaki aspekt je izmeren i dokumentovan. Nudimo before/after analizu
          vašeg sajta.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-orange-600 to-orange-400 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Zatražite Besplatnu Analizu
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
