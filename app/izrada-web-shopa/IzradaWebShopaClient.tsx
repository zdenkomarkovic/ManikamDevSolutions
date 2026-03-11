"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroWebshop from "@/components/web-shop/HeroWebshop";
import IntroWebshop from "@/components/web-shop/IntroWebshop";
import PaketeWebshop from "@/components/web-shop/PaketeWebshop";
import FeaturesWebshop from "@/components/web-shop/FeaturesWebshop";
import ProcesWebshop from "@/components/web-shop/ProcesWebshop";
import FAQWebshop from "@/components/web-shop/FAQWebshop";
import ResultsWebShop from "@/components/web-shop/ResultsWebShop";
import CtaWebShop from "@/components/web-shop/CtaWebShop";
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

const IzradaWebShopaClient = ({ locale, messages }: Props) => {
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
            <HeroWebshop />
          </motion.div>
        </section>

        {/* Glavna sekcija sa sadržajem */}
        <div className="container mx-auto space-y-8 md:space-y-16 px-3 md:px-16 pb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <IntroWebshop />
          </motion.div>

          <PaketeWebshop />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <ResultsWebShop />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
            variants={scaleUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <CtaWebShop />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <FeaturesWebshop />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <ProcesWebshop />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <FAQWebshop />
          </motion.div>
        </div>
      </div>
    </MessagesProvider>
  );
};

export default IzradaWebShopaClient;
