"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const services = [
  {
    category: "On-Page SEO",
    items: [
      "Optimizacija meta tagova i opisa",
      "Optimizacija naslova i sadržaja",
      "Optimizacija slika i alt atributa",
      "Interna povezanost stranica",
      "Optimizacija URL strukture",
      "Schema markup implementacija",
    ],
  },
  {
    category: "Off-Page SEO",
    items: [
      "Guest posting na relevantnim sajtovima",
      "Social signals optimizacija",
      "Brand mention praćenje",
      "Influencer outreach",
      "PR strategija",
    ],
  },
  {
    category: "Tehnički SEO",
    items: [
      "Optimizacija brzine sajta",
      "Mobile-first optimizacija",
      "XML sitemap kreiranje",
      "Robots.txt optimizacija",
      "HTTPS i sigurnosni protokoli",
      "Strukturirani podaci",
    ],
  },
  {
    category: "Lokalni SEO",
    items: [
      "Google My Business optimizacija",
      "Lokalne citacije",
      "Optimizacija za lokalne ključne reči",
      "Google Maps rangiranje",
      "Lokalni recenzije management",
      "NAP konzistentnost",
    ],
  },
];

export default function SEOServices() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
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
        Kompletna SEO Rešenja
      </motion.h2>
      <motion.p 
        className="text-center text-gray-100 mb-12 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Naš tim eksperata pruža sveobuhvatne SEO usluge koje pokrivaju sve
        aspekte optimizacije. Od tehničkih detalja do sadržajnih strategija,
        garantujemo rezultate koji donose vrednost vašem biznisu.
      </motion.p>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-shadow"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02, 
              y: -5,
              boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)"
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              {service.category}
            </h3>
            <motion.ul 
              className="space-y-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {service.items.map((item, itemIndex) => (
                <motion.li 
                  key={itemIndex} 
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <FaCheckCircle className="text-orange-500 flex-shrink-0 " />
                  </motion.div>
                  <span className="text-gray-600 ">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
