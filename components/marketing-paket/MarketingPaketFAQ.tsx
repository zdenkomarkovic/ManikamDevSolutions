"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { useMessages } from "@/lib/MessagesContext";

export default function MarketingPaketFAQ() {
  const intl = useMessages();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { key: "faq1" },
    { key: "faq2" },
    { key: "faq3" },
    { key: "faq4" },
    { key: "faq5" },
    { key: "faq6" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
        {intl.formatMessage({ id: "marketingPaket.faq.title" })}
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl overflow-hidden shadow-md"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-orange-50/50 transition-colors duration-200"
            >
              <span className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                {intl.formatMessage({ id: `marketingPaket.faq.${faq.key}.question` })}
              </span>
              <FaChevronDown
                className={`text-orange-600 flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                    {intl.formatMessage({ id: `marketingPaket.faq.${faq.key}.answer` })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
