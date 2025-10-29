"use client";

import { motion } from "framer-motion";
import { useMessages } from "@/lib/MessagesContext";

export default function SoftwareHero() {
  const intl = useMessages();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
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

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="container mx-auto text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-[45px] leading-tight md:text-8xl bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent font-[1000] py-6 md:py-14"
        variants={titleVariants}
      >
        {intl.formatMessage({ id: "software.hero.title" })}
      </motion.h1>
      <motion.p
        className="text-base md:text-2xl text-gray-100 mb-5 md:mb-8 max-w-4xl mx-auto md:first-letter:leading-relaxed"
        variants={subtitleVariants}
      >
        {intl.formatMessage({ id: "software.hero.subtitle" })}
      </motion.p>
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        variants={containerVariants}
      >
        <motion.span
          className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 px-4 py-2 rounded-full text-sm font-semibold"
          variants={badgeVariants}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          {intl.formatMessage({ id: "software.hero.badge1" })}
        </motion.span>
        <motion.span
          className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 px-4 py-2 rounded-full text-sm font-semibold"
          variants={badgeVariants}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          {intl.formatMessage({ id: "software.hero.badge2" })}
        </motion.span>
        <motion.span
          className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 px-4 py-2 rounded-full text-sm font-semibold"
          variants={badgeVariants}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          {intl.formatMessage({ id: "software.hero.badge3" })}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
