"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaTachometerAlt, FaChartLine, FaTrophy } from "react-icons/fa";
import { useLocale } from "@/lib/LocaleContext";

export default function RedesignPerformance() {
  const { locale, t } = useLocale();
  const performance = t.redesignMigration.performance;

  const metricIcons = [FaTachometerAlt, FaChartLine, FaTrophy];
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
          {performance.title}
        </motion.h2>
      </div>

      <motion.p
        className="text-center text-gray-100 mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {performance.subtitle}
      </motion.p>

      <motion.div
        className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {performance.metrics.map(
          (
            metric: { value: string; title: string; description: string },
            index: number
          ) => {
            const MetricIcon = metricIcons[index];
            return (
              <motion.div
                key={index}
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
                  <MetricIcon className="text-2xl text-white" />
                </motion.div>
                <div className="text-5xl font-bold text-orange-600 mb-2">
                  {metric.value}
                </div>
                <div className="text-xl font-semibold mb-2 text-gray-900">
                  {metric.title}
                </div>
                <div className="text-sm">{metric.description}</div>
              </motion.div>
            );
          }
        )}
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
          {performance.comparison.title}
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-6 text-orange-600">
              {performance.comparison.wordpress.title}
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">
                  {performance.comparison.labels.loadTime}
                </span>
                <span className="font-bold text-orange-600">
                  {performance.comparison.wordpress.loadTime}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">
                  {performance.comparison.labels.pageSpeed}
                </span>
                <span className="font-bold text-orange-600">
                  {performance.comparison.wordpress.pageSpeed}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">
                  {performance.comparison.labels.requests}
                </span>
                <span className="font-bold text-orange-600">
                  {performance.comparison.wordpress.requests}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">
                  {performance.comparison.labels.pageSize}
                </span>
                <span className="font-bold text-orange-600">
                  {performance.comparison.wordpress.pageSize}
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">
                  {performance.comparison.labels.security}
                </span>
                <span className="font-bold text-orange-600">
                  {performance.comparison.wordpress.security}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">{performance.comparison.labels.mobile}</span>
                <span className="font-bold text-orange-600">
                  {performance.comparison.wordpress.mobile}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-orange-600">
              {performance.comparison.nextjs.title}
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">
                  {performance.comparison.labels.loadTime}
                </span>
                <span className="font-bold text-orange-600">
                  {performance.comparison.nextjs.loadTime}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">
                  {performance.comparison.labels.pageSpeed}
                </span>
                <span className="font-bold text-orange-600">
                  {performance.comparison.nextjs.pageSpeed}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">
                  {performance.comparison.labels.requests}
                </span>
                <span className="font-bold text-orange-600">
                  {performance.comparison.nextjs.requests}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">
                  {performance.comparison.labels.pageSize}
                </span>
                <span className="font-bold text-orange-600">
                  {performance.comparison.nextjs.pageSize}
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">
                  {performance.comparison.labels.security}
                </span>
                <span className="font-bold text-orange-600">
                  {performance.comparison.nextjs.security}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="">{performance.comparison.labels.mobile}</span>
                <span className="font-bold text-orange-600">
                  {performance.comparison.nextjs.mobile}
                </span>
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
        <p className="text-xl text-gray-100 mb-6">{performance.cta.text}</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href={`/${locale}/contact`}
            className="inline-block bg-gradient-to-r from-orange-600 to-orange-400 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            {performance.cta.button}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
