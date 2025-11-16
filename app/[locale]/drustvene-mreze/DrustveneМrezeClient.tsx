"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SocialMediaHero from "@/components/drustvene-mreze/SocialMediaHero";
import SocialMediaIntro from "@/components/drustvene-mreze/SocialMediaIntro";
import SocialMediaServices from "@/components/drustvene-mreze/SocialMediaServices";
import SocialMediaPlatforms from "@/components/drustvene-mreze/SocialMediaPlatforms";
import SocialMediaContent from "@/components/drustvene-mreze/SocialMediaContent";
import SocialMediaAds from "@/components/drustvene-mreze/SocialMediaAds";
import SocialMediaProcess from "@/components/drustvene-mreze/SocialMediaProcess";
import SocialMediaPackages from "@/components/drustvene-mreze/SocialMediaPackages";
import SocialMediaFAQ from "@/components/drustvene-mreze/SocialMediaFAQ";
import SocialMediaCTA from "@/components/drustvene-mreze/SocialMediaCTA";

// Detektuj da li je mobilni uređaj
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

// Optimizovane animacije - GPU ubrzane, kraće duration za mobile
const createFadeInUp = (isMobile: boolean) => ({
  hidden: { opacity: 0, y: isMobile ? 20 : 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: isMobile ? 0.3 : 0.5,
      ease: "easeOut",
    },
  },
});

const createScaleUp = (isMobile: boolean) => ({
  hidden: { opacity: 0, y: isMobile ? 15 : 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: isMobile ? 0.3 : 0.5,
      ease: "easeOut",
    },
  },
});

const createHeroVariants = (isMobile: boolean) => ({
  hidden: {
    opacity: 0,
    y: isMobile ? 20 : 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: isMobile ? 0.4 : 0.6,
      ease: "easeOut",
    },
  },
});

const DrustveneМrezeClient = () => {
  const isMobile = useIsMobile();

  // Kreiraj varijante na osnovu device type-a
  const fadeInUp = createFadeInUp(isMobile);
  const scaleUp = createScaleUp(isMobile);
  const heroVariants = createHeroVariants(isMobile);

  // Viewport threshold
  const viewportAmount = 0.01;
  const viewportMargin = isMobile ? "-80px" : "-120px";

  return (
    <div className=" bg-gray-900/90 ">
      {/* Hero sekcija */}
      <section className="pt-24 pb-6 md:pb-16 px-4">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          style={{ willChange: 'transform, opacity' }}
        >
          <SocialMediaHero />
        </motion.div>
      </section>

      {/* Glavna sekcija sa sadržajem */}
      <div className="container mx-auto px-3 md:px-16 pb-16">
        <div className="space-y-8 md:space-y-16 mb-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <SocialMediaIntro />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <SocialMediaServices />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <SocialMediaPackages />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <SocialMediaAds />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
            variants={scaleUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <SocialMediaCTA />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <SocialMediaContent />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <SocialMediaProcess />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <SocialMediaPlatforms />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <SocialMediaFAQ />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DrustveneМrezeClient;
