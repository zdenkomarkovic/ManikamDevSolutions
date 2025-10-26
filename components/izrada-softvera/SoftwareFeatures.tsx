"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaTachometerAlt, FaExpandArrowsAlt, FaMobileAlt, FaPlug, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: FaShieldAlt,
    title: "Sigurnost i Privatnost",
    description: "Enterprise-level sigurnost, enkripcija podataka, GDPR compliance i redovni security audits.",
  },
  {
    icon: FaTachometerAlt,
    title: "Visoke Performanse",
    description: "Optimizovan kod, caching strategije, load balancing i CDN za brzo učitavanje.",
  },
  {
    icon: FaExpandArrowsAlt,
    title: "Skalabilnost",
    description: "Arhitektura dizajnirana za rast - lako dodajete korisnike, podatke i funkcionalnosti.",
  },
  {
    icon: FaMobileAlt,
    title: "Responsive Design",
    description: "Savršeno funkcioniše na svim uređajima - desktop, tablet, mobilni telefon.",
  },
  {
    icon: FaPlug,
    title: "Integracije",
    description: "Povezivanje sa postojećim sistemima, API-jima i third-party servisima.",
  },
  {
    icon: FaUsers,
    title: "User-Friendly",
    description: "Intuitivan UI/UX dizajn, easy onboarding i minimalna kriva učenja za korisnike.",
  },
];

export default function SoftwareFeatures() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  return (
    <div className="mt-16 bg-gradient-to-br from-gray-900 via-gray-700 to-orange-500 rounded-2xl p-4 md:p-8 shadow-lg border border-gray-100">
      <motion.h2
        className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Karakteristike Našeg Softvera
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl shadow-lg text-center"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              y: -10,
              boxShadow: "0 20px 40px rgba(249, 115, 22, 0.2)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-300 rounded-xl flex items-center justify-center mx-auto mb-4"
              variants={iconVariants}
              whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.6 }
              }}
            >
              <feature.icon className="text-2xl text-white" />
            </motion.div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
