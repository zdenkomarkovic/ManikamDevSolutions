"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaMobileAlt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const technologies = [
  {
    icon: FaReact,
    name: "React.js",
    description: "Moderna JavaScript biblioteka za kreiranje interaktivnih korisničkih interfejsa",
    category: "Frontend",
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    description: "Full-stack React framework sa serverskim renderingom i optimizacijom",
    category: "Frontend",
  },
  {
    icon: FaMobileAlt,
    name: "React Native",
    description: "Cross-platform framework za iOS i Android mobilne aplikacije",
    category: "Mobile",
  },
  {
    icon: FaNodeJs,
    name: "Node.js & Express",
    description: "Backend runtime i framework za scalable REST API servise",
    category: "Backend",
  },
];

export default function SoftwareTechnologies() {
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
        Tehnologije Koje Koristimo
      </motion.h2>
      <motion.p
        className="text-center text-white mb-8 md:mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Koristimo najsavremenije tehnologije i best practices da kreiramo brz,
        siguran i skalabilan softver.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-gray-100 via-white to-gray-100 rounded-2xl p-6 shadow-lg border border-gray-200 relative overflow-hidden"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              y: -10,
              boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Category Badge */}
            <div className="absolute top-3 right-3">
              <span className="text-xs font-semibold px-2 py-1 bg-orange-100 text-orange-600 rounded-full">
                {tech.category}
              </span>
            </div>

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
              <tech.icon className="text-3xl text-white" />
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-bold text-center mb-3 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent min-h-[56px] flex items-center justify-center">
              {tech.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 text-center leading-relaxed">
              {tech.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
