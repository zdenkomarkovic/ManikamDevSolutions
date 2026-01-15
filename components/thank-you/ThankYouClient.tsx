"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { MessagesProvider } from "@/lib/MessagesContext";
import { useLocale } from "@/lib/LocaleContext";
import { FaCheckCircle, FaHome, FaServicestack } from "react-icons/fa";
import Link from "next/link";
import { Button } from "../ui/button";

type MessageValue = string | { [key: string]: MessageValue };
type Messages = Record<string, MessageValue>;

interface ThankYouMessages {
  thankYou: {
    hero: {
      title: string;
      subtitle: string;
    };
    content: {
      message: string;
      responseTime: string;
      nextSteps: string;
      step1: string;
      step2: string;
      step3: string;
    };
    cta: {
      title: string;
      description: string;
      servicesButton: string;
      homeButton: string;
    };
  };
}

interface ThankYouClientProps {
  messages: Messages;
}

export default function ThankYouClient({ messages }: ThankYouClientProps) {
  const { locale } = useLocale();
  const thankYouMessages = messages as unknown as ThankYouMessages;

  // Google Ads Conversion Tracking - korisnik će dodati svoj kod ovde
  useEffect(() => {
    // TODO: Dodaj Google Ads conversion snippet ovde
    // Primer:
    // if (typeof window !== 'undefined' && window.gtag) {
    //   window.gtag('event', 'conversion', {
    //     'send_to': 'AW-XXXXXXXXX/XXXXXXXXXXXXXX'
    //   });
    // }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
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
          {/* Success Icon */}
          <motion.div
            className="flex justify-center mb-8"
            variants={itemVariants}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <FaCheckCircle className="text-8xl md:text-9xl text-green-500" />
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-[45px] leading-tight md:text-8xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent text-center w-full mb-6"
            variants={itemVariants}
          >
            {thankYouMessages.thankYou.hero.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-center text-gray-100 text-xl md:text-2xl mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {thankYouMessages.thankYou.hero.subtitle}
          </motion.p>

          {/* Content Card */}
          <motion.div
            className="max-w-3xl mx-auto bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-2xl shadow-lg p-6 md:p-10 mb-12"
            variants={itemVariants}
          >
            <p className="text-gray-800 text-lg mb-6 text-center">
              {thankYouMessages.thankYou.content.message}
            </p>

            <div className="bg-gradient-to-r from-orange-600 to-orange-400 text-white p-4 rounded-xl mb-6 text-center font-semibold">
              {thankYouMessages.thankYou.content.responseTime}
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                {thankYouMessages.thankYou.content.nextSteps}
              </h3>
              <div className="space-y-3">
                {[
                  thankYouMessages.thankYou.content.step1,
                  thankYouMessages.thankYou.content.step2,
                  thankYouMessages.thankYou.content.step3,
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-white/50 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.2 }}
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-600 to-orange-400 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <p className="text-gray-800 pt-1">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold text-gray-100 mb-4">
              {thankYouMessages.thankYou.cta.title}
            </h3>
            <p className="text-gray-300 mb-8">
              {thankYouMessages.thankYou.cta.description}
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href={`/${locale}`}>
                  <Button className="w-full md:w-auto bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-700 hover:to-orange-500 text-white font-semibold px-8 py-6 text-lg">
                    <FaHome className="mr-2" />
                    {thankYouMessages.thankYou.cta.homeButton}
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href={`/${locale}#services`}>
                  <Button className="w-full md:w-auto bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg border-2 border-orange-600">
                    <FaServicestack className="mr-2" />
                    {thankYouMessages.thankYou.cta.servicesButton}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </MessagesProvider>
  );
}
