"use client";

import { motion } from "framer-motion";
import GoogleAdsHero from "@/components/google-ads/GoogleAdsHero";
import GoogleAdsIntro from "@/components/google-ads/GoogleAdsIntro";
import GoogleAdsFeatures from "@/components/google-ads/GoogleAdsFeatures";
import GoogleAdsServices from "@/components/google-ads/GoogleAdsServices";
import GoogleAdsProcess from "@/components/google-ads/GoogleAdsProcess";
import GoogleAdsWhy from "@/components/google-ads/GoogleAdsWhy";
import GoogleAdsFAQ from "@/components/google-ads/GoogleAdsFAQ";
import GoogleAdsCTA from "@/components/google-ads/GoogleAdsCTA";

export default function GoogleAdsPageClient() {
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
          <GoogleAdsHero />
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
            <GoogleAdsIntro />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <GoogleAdsServices />
          </motion.div>  
          
          <motion.div variants={itemVariants}>
            <GoogleAdsCTA />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <GoogleAdsWhy />
          </motion.div>    
          
          <motion.div variants={itemVariants}>
            <GoogleAdsFeatures />
          </motion.div>

          <motion.div variants={itemVariants}>
            <GoogleAdsProcess />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <GoogleAdsFAQ />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}





