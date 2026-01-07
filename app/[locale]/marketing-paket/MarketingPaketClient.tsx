"use client";

import React, { useState, useEffect } from "react";
import { MessagesProvider } from "@/lib/MessagesContext";
import type { Locale } from "@/i18n-config";
import MarketingPaketHero from "@/components/marketing-paket/MarketingPaketHero";
import MarketingPaketIntro from "@/components/marketing-paket/MarketingPaketIntro";
import MarketingPaketPackage from "@/components/marketing-paket/MarketingPaketPackage";
import MarketingPaketCTA from "@/components/marketing-paket/MarketingPaketCTA";
import MarketingPaketFAQ from "@/components/marketing-paket/MarketingPaketFAQ";
import { motion } from "framer-motion";

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

export default function MarketingPaketClient({ locale, messages }: Props) {
  const isMobile = useIsMobile();

  // Kreiraj varijante na osnovu device type-a
  const fadeInUp = createFadeInUp(isMobile);
  const scaleUp = createScaleUp(isMobile);
  const heroVariants = createHeroVariants(isMobile);

  // Viewport threshold - viši za mobilne uređaje
  const viewportAmount = 0.01;
  const viewportMargin = isMobile ? "-80px" : "-120px";

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
            <MarketingPaketHero />
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
              <MarketingPaketIntro />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
              variants={fadeInUp}
              style={{ willChange: 'transform, opacity' }}
            >
              <MarketingPaketPackage />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
              variants={scaleUp}
              style={{ willChange: 'transform, opacity' }}
            >
              <MarketingPaketCTA />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
              variants={fadeInUp}
              style={{ willChange: 'transform, opacity' }}
            >
              <MarketingPaketFAQ />
            </motion.div>
          </div>
        </div>
      </div>
    </MessagesProvider>
  );
}
