"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessagesProvider } from "@/lib/MessagesContext";
import type { Locale } from "@/i18n-config";

type MessageValue = string | { [key: string]: MessageValue };
type Messages = Record<string, MessageValue>;

interface PrivacySection {
  title: string;
  text: string;
}

interface PrivacyMessages {
  privacy: {
    hero: {
      title: string;
      subtitle: string;
    };
    sections: {
      intro: PrivacySection;
      controller: PrivacySection;
      dataCollected: PrivacySection;
      purpose: PrivacySection;
      legalBasis: PrivacySection;
      retention: PrivacySection;
      sharing: PrivacySection;
      cookies: PrivacySection;
      rights: PrivacySection;
      security: PrivacySection;
      contact: PrivacySection;
      changes: PrivacySection;
    };
  };
}

interface PrivacyClientProps {
  messages: Messages;
  locale?: Locale;
}

export default function PrivacyClient({ messages, locale = "sr" }: PrivacyClientProps) {
  const privacyMessages = messages as unknown as PrivacyMessages;
  const sections = privacyMessages.privacy.sections;

  const sectionOrder: PrivacySection[] = [
    sections.intro,
    sections.controller,
    sections.dataCollected,
    sections.purpose,
    sections.legalBasis,
    sections.retention,
    sections.sharing,
    sections.cookies,
    sections.rights,
    sections.security,
    sections.contact,
    sections.changes,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <MessagesProvider locale={locale} messages={messages}>
      <div className="bg-gray-900/90 min-h-screen">
        <motion.div
          className="container mx-auto pt-28 pb-16 px-3 md:px-16 md:py-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-[36px] leading-tight md:text-6xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent text-center w-full mb-4"
            variants={itemVariants}
          >
            {privacyMessages.privacy.hero.title}
          </motion.h1>

          <motion.p
            className="text-center text-gray-400 mb-12"
            variants={itemVariants}
          >
            {privacyMessages.privacy.hero.subtitle}
          </motion.p>

          <motion.div
            className="max-w-3xl mx-auto bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-2xl shadow-lg p-6 md:p-10 space-y-8"
            variants={itemVariants}
          >
            {sectionOrder.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                  {section.title}
                </h2>
                <p className="text-gray-800 leading-relaxed">{section.text}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </MessagesProvider>
  );
}
