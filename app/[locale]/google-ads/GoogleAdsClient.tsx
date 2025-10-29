"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GoogleAdsHero from "@/components/google-ads/GoogleAdsHero";
import GoogleAdsIntro from "@/components/google-ads/GoogleAdsIntro";
import GoogleAdsServices from "@/components/google-ads/GoogleAdsServices";
import GoogleAdsProcess from "@/components/google-ads/GoogleAdsProcess";
import GoogleAdsWhy from "@/components/google-ads/GoogleAdsWhy";
import GoogleAdsFAQ from "@/components/google-ads/GoogleAdsFAQ";
import GoogleAdsFeatures from "@/components/google-ads/GoogleAdsFeatures";
import GoogleAdsCTA from "@/components/google-ads/GoogleAdsCTA";
import { MessagesProvider } from "@/lib/MessagesContext";
import { useLocale } from "@/lib/LocaleContext";

// Type for the message structure
type MessageValue = string | { [key: string]: MessageValue };
type Messages = Record<string, MessageValue>;

// Animation variants
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

export default function GoogleAdsClient() {
  const locale = useLocale();
  const [messages, setMessages] = useState<Messages | null>(null);

  useEffect(() => {
    async function loadMessages() {
      try {
        // Load main messages
        const mainMsgs = await import(`@/lang/${locale}.json`);
        // Load googleAds messages
        const googleAdsMsgs = await import(`@/lang/googleAds/${locale}.json`);

        // Merge messages
        const mergedMessages = {
          ...mainMsgs.default,
          ...googleAdsMsgs.default,
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
        {/* Hero section */}
        <section className="pt-24 pb-6 md:pb-16 px-4">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <GoogleAdsHero />
          </motion.div>
        </section>

        {/* Main content section */}
        <div className="container mx-auto space-y-8 md:space-y-16 px-3 md:px-16 pb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <GoogleAdsIntro />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={fadeInUp}
          >
            <GoogleAdsServices />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <GoogleAdsCTA />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={fadeInUp}
          >
            <GoogleAdsWhy />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={fadeInUp}
          >
            <GoogleAdsFeatures />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={fadeInUp}
          >
            <GoogleAdsProcess />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={fadeInUp}
          >
            <GoogleAdsFAQ />
          </motion.div>
        </div>
      </div>
    </MessagesProvider>
  );
}
