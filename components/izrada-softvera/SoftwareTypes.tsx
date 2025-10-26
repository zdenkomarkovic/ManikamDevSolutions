"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaDesktop, FaCloud, FaCogs, FaDatabase } from "react-icons/fa";

const types = [
  {
    icon: FaLaptopCode,
    title: "Web Aplikacije",
    description: "Kompleksne SaaS platforme, portali, dashboardi i business intelligence alati.",
    examples: "CRM, ERP, project management, booking sistemi, e-learning platforme",
  },
  {
    icon: FaMobileAlt,
    title: "Mobilne Aplikacije",
    description: "Native iOS i Android aplikacije ili cross-platform rešenja.",
    examples: "Business apps, delivery apps, fitness apps, finance apps",
  },
  {
    icon: FaDesktop,
    title: "Desktop Aplikacije",
    description: "Standalone desktop softver za Windows, macOS i Linux.",
    examples: "Accounting software, inventory management, POS sistemi, production tracking",
  },
  {
    icon: FaCloud,
    title: "Cloud Rešenja",
    description: "Skalabilne cloud aplikacije hosted na AWS, Azure ili Google Cloud.",
    examples: "Multi-tenant SaaS, microservices arhitektura, serverless aplikacije",
  },
  {
    icon: FaCogs,
    title: "Automatizacija Procesa",
    description: "Custom alati za automatizaciju repetitivnih poslovnih procesa.",
    examples: "Data processing, reporting automation, workflow engines, integration tools",
  },
  {
    icon: FaDatabase,
    title: "API i Integracije",
    description: "Backend sistemi, REST/GraphQL API-ji i integracije sa trećim servisima.",
    examples: "Payment gateways, shipping APIs, accounting software integrations",
  },
];

export default function SoftwareTypes() {
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
        Tipovi Softvera Koje Razvijamo
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {types.map((type, index) => (
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
              <type.icon className="text-2xl text-white" />
            </motion.div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              {type.title}
            </h3>
            <p className="text-gray-600 mb-3">{type.description}</p>
            <div className="bg-gray-200/50 rounded-lg p-3 mt-4">
              <p className="text-sm text-gray-700">
                <strong>Primeri:</strong> {type.examples}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
