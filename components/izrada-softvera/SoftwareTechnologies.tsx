"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaMobileAlt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { useMessages } from "@/lib/MessagesContext";

export default function SoftwareTechnologies() {
  const intl = useMessages();

  const technologies = [
    {
      icon: FaReact,
      key: "react",
    },
    {
      icon: SiNextdotjs,
      key: "nextjs",
    },
    {
      icon: FaMobileAlt,
      key: "reactNative",
    },
    {
      icon: FaNodeJs,
      key: "nodejs",
    },
  ];
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <div>
      <motion.h2
        className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent text-center mb-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {intl.formatMessage({ id: "software.technologies.title" })}
      </motion.h2>
      <motion.p
        className="text-center text-white mb-8 md:mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {intl.formatMessage({ id: "software.technologies.subtitle" })}
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {technologies.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={index}
              className="bg-transparent rounded-2xl p-4 shadow-lg relative overflow-hidden"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4"
                variants={iconVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <Icon className="text-3xl text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-center bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent  flex items-center justify-center">
                {intl.formatMessage({ id: `software.technologies.${tech.key}.name` })}
              </h3>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
