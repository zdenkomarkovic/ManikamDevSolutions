"use client";

import React, { useState, useEffect } from "react";
import { MessagesProvider } from "@/lib/MessagesContext";
import type { Locale } from "@/i18n-config";
import SocialMediaHero from "./SocialMediaHero";
import SocialMediaIntro from "./SocialMediaIntro";
import SocialMediaServices from "./SocialMediaServices";
import SocialMediaPackages from "./SocialMediaPackages";
import SocialMediaCTA from "./SocialMediaCTA";
import SocialMediaProcess from "./SocialMediaProcess";
import SocialMediaPlatforms from "./SocialMediaPlatforms";
import SocialMediaFAQ from "./SocialMediaFAQ";
import { motion } from "framer-motion";
import SocialMediaAds from "./SocialMediaAds";
import SocialMediaContent from "./SocialMediaContent";

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

const createScaleUp = (isMobile: boolean) => ({
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
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

export default function SocialMediaClient({ locale, messages }: Props) {
  const isMobile = useIsMobile();

  // Kreiraj varijante na osnovu device type-a
  const fadeInUp = createFadeInUp(isMobile);
  const scaleUp = createScaleUp(isMobile);
  const heroVariants = createHeroVariants(isMobile);

  // Viewport threshold - viši za mobilne uređaje
  const viewportAmount = isMobile ? 0.15 : 0.2;

  return (
    <MessagesProvider locale={locale} messages={messages}>
      <div className="bg-gray-900/90">
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
              viewport={{ once: true, amount: viewportAmount }}
              variants={fadeInUp}
              style={{ willChange: 'transform, opacity' }}
            >
              <SocialMediaIntro />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: viewportAmount }}
              variants={fadeInUp}
              style={{ willChange: 'transform, opacity' }}
            >
              <SocialMediaServices />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: viewportAmount }}
              variants={fadeInUp}
              style={{ willChange: 'transform, opacity' }}
            >
              <SocialMediaPackages />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: viewportAmount }}
              variants={fadeInUp}
              style={{ willChange: 'transform, opacity' }}
            >
              <SocialMediaAds />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: viewportAmount }}
              variants={scaleUp}
              style={{ willChange: 'transform, opacity' }}
            >
              <SocialMediaCTA />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: viewportAmount }}
              variants={fadeInUp}
              style={{ willChange: 'transform, opacity' }}
            >
              <SocialMediaContent />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: viewportAmount }}
              variants={fadeInUp}
              style={{ willChange: 'transform, opacity' }}
            >
              <SocialMediaProcess />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: viewportAmount }}
              variants={fadeInUp}
              style={{ willChange: 'transform, opacity' }}
            >
              <SocialMediaPlatforms />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: viewportAmount }}
              variants={fadeInUp}
              style={{ willChange: 'transform, opacity' }}
            >
              <SocialMediaFAQ />
            </motion.div>
          </div>
        </div>
      </div>
    </MessagesProvider>
  );
}
