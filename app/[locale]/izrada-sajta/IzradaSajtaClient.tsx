"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSajt from "@/components/izrada-sajta/HeroSajt";
import IntroSajt from "@/components/izrada-sajta/IntroSajt";
import PaketiSajt from "@/components/izrada-sajta/PaketiSajt";
import PrednostiSajt from "@/components/izrada-sajta/PrednostiSajt";
import CTASajt from "@/components/izrada-sajta/CTASajt";
import ProcesSajt from "@/components/izrada-sajta/ProcesSajt";
import FAQSajt from "@/components/izrada-sajta/FAQSajt";
import IndustrijeSajt from "@/components/izrada-sajta/IndustrijeSajt";
import DodatneUslugeSajt from "@/components/izrada-sajta/DodatneUslugeSajt";
import WhyUs from "@/components/izrada-sajta/WhyUs";
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

const IzradaSajtaClient = ({ locale, messages }: Props) => {
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
            <HeroSajt />
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
              <IntroSajt />
            </motion.div>

            <PaketiSajt />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: viewportAmount }}
              variants={fadeInUp}
              style={{ willChange: 'transform, opacity' }}
            >
              <PrednostiSajt />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: viewportAmount }}
              variants={scaleUp}
              style={{ willChange: 'transform, opacity' }}
            >
              <CTASajt />
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount }}
            variants={scaleUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <WhyUs />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <ProcesSajt />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <FAQSajt />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <IndustrijeSajt />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount }}
            variants={fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <DodatneUslugeSajt />
          </motion.div>
        </div>
      </div>
    </MessagesProvider>
  );
};

export default IzradaSajtaClient;
