"use client";

import React, { useEffect, useState } from "react";
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

// Hero animacija kao u SEOPageClient
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

const IzradaSajtaClient = () => {
  const { locale } = useLocale();
  const [messages, setMessages] = useState<Messages | null>(null);

  useEffect(() => {
    async function loadMessages() {
      try {
        // Load main messages
        const mainMsgs = await import(`@/lang/${locale}.json`);
        // Load websiteDevelopment messages
        const websiteDevMsgs = await import(`@/lang/websiteDevelopment/${locale}.json`);

        // Merge messages
        const mergedMessages = {
          ...mainMsgs.default,
          ...websiteDevMsgs.default
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
      <div className=" bg-gray-900/90 ">
      {/* Hero sekcija */}
      <section className="pt-24 pb-6 md:pb-16 px-4">
        <motion.div variants={heroVariants} initial="hidden" animate="visible">
          <HeroSajt />
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
            <IntroSajt />
          </motion.div>

          <PaketiSajt />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <PrednostiSajt />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={scaleUp}
          >
            <CTASajt />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={scaleUp}
        >
          <WhyUs />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={fadeInUp}
        >
          <ProcesSajt />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={fadeInUp}
        >
          <FAQSajt />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={fadeInUp}
        >
          <IndustrijeSajt />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={fadeInUp}
        >
          <DodatneUslugeSajt />
        </motion.div>
      </div>
    </div>
    </MessagesProvider>
  );
};

export default IzradaSajtaClient;
