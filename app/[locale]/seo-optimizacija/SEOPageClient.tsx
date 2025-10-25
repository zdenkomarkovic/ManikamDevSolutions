"use client";

import { motion } from "framer-motion";
import SEOHero from "@/components/seo/SEOHero";
import SEOIntro from "@/components/seo/SEOIntro";
import SEOFeatures from "@/components/seo/SEOFeatures";
import SEOServices from "@/components/seo/SEOServices";
import SEOProcess from "@/components/seo/SEOProcess";
import SEOFAQ from "@/components/seo/SEOFAQ";
import SEOCTA from "@/components/seo/SEOCTA";

export default function SEOPageClient() {
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
    <div className=" bg-gray-900/90 ">
      <section className="pt-24 pb-6 md:pb-16 px-4">
        <motion.div variants={heroVariants} initial="hidden" animate="visible">
          <SEOHero />
        </motion.div>
      </section>

      <section className="container mx-auto px-3 md:px-16 pb-16">
        <motion.div
          className="space-y-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <SEOIntro />
          </motion.div>

          <motion.div variants={itemVariants}>
            <SEOFeatures />
          </motion.div>

          <motion.div variants={itemVariants}>
            <SEOCTA />
          </motion.div>

          <motion.div variants={itemVariants}>
            <SEOServices />
          </motion.div>

          <motion.div variants={itemVariants}>
            <SEOProcess />
          </motion.div>

          <motion.div variants={itemVariants}>
            <SEOFAQ />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
