"use client";

import { motion } from "framer-motion";
import RedesignHero from "@/components/redesign/RedesignHero";
import RedesignIntro from "@/components/redesign/RedesignIntro";
import RedesignBenefits from "@/components/redesign/RedesignBenefits";
import RedesignWhyNextJS from "@/components/redesign/RedesignWhyNextJS";
import RedesignPlatforms from "@/components/redesign/RedesignPlatforms";
import RedesignProcess from "@/components/redesign/RedesignProcess";
import RedesignPerformance from "@/components/redesign/RedesignPerformance";
import RedesignFAQ from "@/components/redesign/RedesignFAQ";
import RedesignCTA from "@/components/redesign/RedesignCTA";

export default function RedesignPageClient() {
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
      y: 50,
      scale: 0.95,
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

  const heroVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-gray-900/90">
      <section className="pt-24 pb-6 md:pb-16 px-4">
        <motion.div variants={heroVariants} initial="hidden" animate="visible">
          <RedesignHero />
        </motion.div>
      </section>

      <section className="container mx-auto px-3 md:px-16 pb-16">
        <motion.div
          className="space-y-8 md:space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <RedesignIntro />
          </motion.div>

          <motion.div variants={itemVariants}>
            <RedesignBenefits />
          </motion.div>

          <motion.div variants={itemVariants}>
            <RedesignWhyNextJS />
          </motion.div>

          <motion.div variants={itemVariants}>
            <RedesignCTA />
          </motion.div>

          <motion.div variants={itemVariants}>
            <RedesignProcess />
          </motion.div>

          <motion.div variants={itemVariants}>
            <RedesignPerformance />
          </motion.div>

          <motion.div variants={itemVariants}>
            <RedesignFAQ />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
