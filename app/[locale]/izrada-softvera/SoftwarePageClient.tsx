"use client";

import { motion } from "framer-motion";
import SoftwareHero from "@/components/izrada-softvera/SoftwareHero";
import SoftwareIntro from "@/components/izrada-softvera/SoftwareIntro";
import SoftwareTypes from "@/components/izrada-softvera/SoftwareTypes";
import SoftwareTechnologies from "@/components/izrada-softvera/SoftwareTechnologies";
import SoftwareProcess from "@/components/izrada-softvera/SoftwareProcess";
import SoftwareFeatures from "@/components/izrada-softvera/SoftwareFeatures";
import SoftwareIndustries from "@/components/izrada-softvera/SoftwareIndustries";
import SoftwareBenefits from "@/components/izrada-softvera/SoftwareBenefits";
import SoftwareFAQ from "@/components/izrada-softvera/SoftwareFAQ";
import SoftwareCTA from "@/components/izrada-softvera/SoftwareCTA";

export default function SoftwarePageClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const heroVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className=" bg-gray-900/90 ">
      <section className="pt-24 pb-6 md:pb-16 px-4">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <SoftwareHero />
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
            <SoftwareIntro />
          </motion.div>

          <motion.div variants={itemVariants}>
            <SoftwareTypes />
          </motion.div>

          <motion.div variants={itemVariants}>
            <SoftwareCTA />
          </motion.div>

          <motion.div variants={itemVariants}>
            <SoftwareTechnologies />
          </motion.div>

          <motion.div variants={itemVariants}>
            <SoftwareFeatures />
          </motion.div>

          <motion.div variants={itemVariants}>
            <SoftwareProcess />
          </motion.div>

          <motion.div variants={itemVariants}>
            <SoftwareIndustries />
          </motion.div>

          <motion.div variants={itemVariants}>
            <SoftwareBenefits />
          </motion.div>

          <motion.div variants={itemVariants}>
            <SoftwareFAQ />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
