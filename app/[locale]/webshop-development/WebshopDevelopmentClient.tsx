"use client";

import React, { useEffect, useState } from "react";
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
import { useLocale } from "@/lib/LocaleContext";

// Type for the message structure
type MessageValue = string | { [key: string]: MessageValue };
type Messages = Record<string, MessageValue>;

// Animacija varijante za fade in + slide up
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Animacija za scale up (uvećavanje)
const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// Hero animacija
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

const WebshopDevelopmentClient = () => {
  const { locale } = useLocale();
  const [messages, setMessages] = useState<Messages | null>(null);

  useEffect(() => {
    async function loadMessages() {
      try {
        // Load main messages
        const mainMsgs = await import(`@/lang/${locale}.json`);
        // Load webshopDevelopment messages
        const webshopDevMsgs = await import(`@/lang/webshopDevelopment/${locale}.json`);

        // Merge messages
        const mergedMessages = {
          ...mainMsgs.default,
          ...webshopDevMsgs.default
        };

        setMessages(mergedMessages);
      } catch (error) {
        console.error("Failed to load messages:", error);
      }
    }
    loadMessages();
  }, [locale]);

  if (!messages) {
    return null; // or loading spinner
  }

  return (
    <MessagesProvider locale={locale} messages={messages}>
      <div className="bg-gray-900/90">
        {/* Hero sekcija */}
        <section className="pt-24 pb-6 md:pb-16 px-4">
          <motion.div variants={heroVariants} initial="hidden" animate="visible">
            <HeroWebshop />
          </motion.div>
        </section>

        {/* Glavna sekcija sa sadržajem */}
        <div className="container mx-auto space-y-8 md:space-y-16 px-3 md:px-16 pb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <IntroWebshop />
          </motion.div>

          <PaketeWebshop />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <ResultsWebShop />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={scaleUp}
          >
            <CtaWebShop />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={fadeInUp}
          >
            <FeaturesWebshop />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={fadeInUp}
          >
            <ProcesWebshop />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={fadeInUp}
          >
            <FAQWebshop />
          </motion.div>
        </div>
      </div>
    </MessagesProvider>
  );
};

export default WebshopDevelopmentClient;
