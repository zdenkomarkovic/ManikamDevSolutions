"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GoogleAdsHero from "@/components/google-ads/GoogleAdsHero";
import GoogleAdsIntro from "@/components/google-ads/GoogleAdsIntro";
import GoogleAdsServices from "@/components/google-ads/GoogleAdsServices";
import GoogleAdsPackages from "@/components/google-ads/GoogleAdsPackages";
import GoogleAdsProcess from "@/components/google-ads/GoogleAdsProcess";
import GoogleAdsWhy from "@/components/google-ads/GoogleAdsWhy";
import GoogleAdsFAQ from "@/components/google-ads/GoogleAdsFAQ";
import GoogleAdsFeatures from "@/components/google-ads/GoogleAdsFeatures";
import GoogleAdsCTA from "@/components/google-ads/GoogleAdsCTA";
import { MessagesProvider } from "@/lib/MessagesContext";
import type { Locale } from "@/i18n-config";

// Type for the message structure
type MessageValue = string | { [key: string]: MessageValue };
type Messages = Record<string, MessageValue>;

type Props = {
  locale: Locale;
  messages: Messages;
};

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

const createHeroVariants = (isMobile: boolean) => ({
  hidden: {
    opacity: 0,
    y: isMobile ? 30 : 60,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: isMobile ? 0.4 : 0.6,
      ease: "easeOut",
    },
  },
});

export default function GoogleAdsClient({ locale, messages }: Props) {
  const isMobile = useIsMobile();

  // Kreiraj varijante na osnovu device type-a
  const fadeInUp = createFadeInUp(isMobile);
  const heroVariants = createHeroVariants(isMobile);

  // Viewport threshold - viši za mobilne uređaje
  const viewportAmount = isMobile ? 0.15 : 0.2;

  return (
    <MessagesProvider locale={locale} messages={messages}>
      <div className="bg-gray-900/90">
        {/* Hero section */}
        <section className="pt-24 pb-6 md:pb-16 px-4">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            style={{ willChange: 'transform, opacity' }}
          >
            <GoogleAdsHero />
          </motion.div>
        </section>

        {/* Main content section */}
        <div className="container mx-auto space-y-8 md:space-y-16 px-3 md:px-16 pb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <GoogleAdsIntro />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <GoogleAdsServices />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <GoogleAdsPackages />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <GoogleAdsCTA />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <GoogleAdsWhy />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <GoogleAdsFeatures />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <GoogleAdsProcess />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <GoogleAdsFAQ />
          </motion.div>
        </div>
      </div>
    </MessagesProvider>
  );
}
