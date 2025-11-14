"use client";

import React from "react";
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

export default function SocialMediaClient({ locale, messages }: Props) {
  return (
    <MessagesProvider locale={locale} messages={messages}>
      <div className=" bg-gray-900/90 ">
        {/* Hero sekcija */}
        <section className="pt-24 pb-6 md:pb-16 px-4">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
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
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
            >
              <SocialMediaIntro />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
            >
              <SocialMediaServices />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              variants={fadeInUp}
            >
              <SocialMediaPackages />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
            >
              <SocialMediaAds />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={scaleUp}
            >
              <SocialMediaCTA />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
            >
              <SocialMediaContent />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              variants={fadeInUp}
            >
              <SocialMediaProcess />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
            >
              <SocialMediaPlatforms />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              variants={fadeInUp}
            >
              <SocialMediaFAQ />
            </motion.div>
          </div>
        </div>
      </div>
    </MessagesProvider>
  );
}
