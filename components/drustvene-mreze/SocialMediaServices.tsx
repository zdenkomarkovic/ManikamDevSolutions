"use client";

import { motion } from "framer-motion";
import {
  FaPenFancy,
  FaCalendarAlt,
  FaBullhorn,
  FaChartLine,
  FaUsers,
  FaComments,
  FaCamera,
  FaHashtag,
} from "react-icons/fa";

const services = [
  {
    icon: FaPenFancy,
    title: "Kreiranje Sadržaja",
    description:
      "Profesionalni tekstovi, grafike i video sadržaj prilagođen vašoj publici.",
  },
  {
    icon: FaCalendarAlt,
    title: "Planiranje i Objava",
    description:
      "Strateško planiranje sadržaja i redovna objava u optimalna vremena.",
  },
  {
    icon: FaBullhorn,
    title: "Facebook i Instagram Oglašavanje",
    description:
      "Ciljane reklamne kampanje koje donose merljive rezultate i ROI.",
  },
  {
    icon: FaChartLine,
    title: "Analitika i Izveštaji",
    description:
      "Praćenje performansi, analiza podataka i detaljni mesečni izveštaji.",
  },
  {
    icon: FaUsers,
    title: "Rast Pratilaca",
    description:
      "Strategije za organsko i plaćeno povećanje broja kvalitetnih pratilaca.",
  },
  {
    icon: FaComments,
    title: "Community Management",
    description:
      "Odgovaranje na komentare, poruke i izgradnja angažovane zajednice.",
  },
  {
    icon: FaCamera,
    title: "Stories i Reels",
    description:
      "Kreiranje dinamičnog vizuelnog sadržaja za Stories i Instagram Reels.",
  },
  {
    icon: FaHashtag,
    title: "Hashtag Strategija",
    description: "Istraživanje i primena optimalnih hashtag-ova za veći doseg.",
  },
];

export default function SocialMediaServices() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="mt-16">
      <div className="flex justify-center mb-12">
        <motion.h2
          className="text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Naše Usluge Upravljanja Društvenim Mrežama
        </motion.h2>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => {
          // Alternativni gradienti za raznolikost
          const gradients = [
            "bg-gradient-to-bl from-gray-900 via-gray-800 to-orange-600",
            "bg-gradient-to-br from-gray-900 via-gray-800 to-orange-600",
            "bg-gradient-to-bl from-gray-900 via-gray-800 to-orange-600",
            "bg-gradient-to-br from-gray-900 via-gray-800 to-orange-600",
          ];
          return (
            <motion.div
              key={index}
              className={`${
                gradients[index % 4]
              } rounded-xl p-6 shadow-lg text-center`}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4"
                variants={iconVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <service.icon className="text-2xl text-white" />
              </motion.div>
              <h4 className="text-xl font-bold mb-3 text-gray-100">
                {service.title}
              </h4>
              <p className="text-gray-100">{service.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
