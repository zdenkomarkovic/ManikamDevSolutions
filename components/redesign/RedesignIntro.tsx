"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";

export default function RedesignIntro() {
  const { t } = useLocale();
  const intro = t.redesignMigration.intro;
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
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 text-center md:text-left rounded-2xl p-3 md:p-8 shadow-lg border border-gray-100"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        y: -5,
        boxShadow: "0 20px 40px rgba(249, 115, 22, 0.15)",
      }}
    >
      <motion.h2
        className="text-xl md:text-3xl font-extrabold mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {intro.title}
      </motion.h2>
      <motion.div
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p variants={itemVariants} className="text-center">
          {intro.content}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-6 mt-8"
        >
          <div className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 p-6 md:p-8 rounded-lg border border-orange-100">
            <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              {intro.oldPlatforms.title}
            </h3>
            <ul className="space-y-4 ">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 mt-1">✗</span>
                <span className="">
                  {intro.oldPlatforms.item1}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 mt-1">✗</span>
                <span className="">{intro.oldPlatforms.item2}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 mt-1">✗</span>
                <span className="">{intro.oldPlatforms.item3}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 mt-1">✗</span>
                <span className="">
                  {intro.oldPlatforms.item4}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 mt-1">✗</span>
                <span className="">{intro.oldPlatforms.item5}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 mt-1">✗</span>
                <span className="">
                  {intro.oldPlatforms.item6}
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 p-6 md:p-8 rounded-lg border border-green-100">
            <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              {intro.nextjsBenefits.title}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" />
                <span className="">
                  {intro.nextjsBenefits.item1}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" />
                <span className="">
                  {intro.nextjsBenefits.item2}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" />
                <span className="">
                  {intro.nextjsBenefits.item3}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" />
                <span className="">
                  {intro.nextjsBenefits.item4}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" />
                <span className="">
                  {intro.nextjsBenefits.item5}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" />
                <span className="">{intro.nextjsBenefits.item6}</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
