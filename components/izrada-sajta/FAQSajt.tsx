"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMessages } from "@/lib/MessagesContext";
import { FaChevronDown } from "react-icons/fa";

const FAQSajt = () => {
  const intl = useMessages();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: intl.formatMessage({ id: "websiteDevelopment.faq.q1.question" }),
      answer: intl.formatMessage({ id: "websiteDevelopment.faq.q1.answer" }),
    },
    {
      question: intl.formatMessage({ id: "websiteDevelopment.faq.q2.question" }),
      answer: intl.formatMessage({ id: "websiteDevelopment.faq.q2.answer" }),
    },
    {
      question: intl.formatMessage({ id: "websiteDevelopment.faq.q3.question" }),
      answer: intl.formatMessage({ id: "websiteDevelopment.faq.q3.answer" }),
    },
    {
      question: intl.formatMessage({ id: "websiteDevelopment.faq.q7.question" }),
      answer: intl.formatMessage({ id: "websiteDevelopment.faq.q7.answer" }),
    },
  ];

  return (
    <div className="mt-16">
      <div className="flex justify-center mb-8">
        <motion.h2
          className="text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {intl.formatMessage({ id: "websiteDevelopment.faq.title" })}
        </motion.h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="border-l-4 border-orange-600 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-4 md:px-6 py-4 text-left bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span className="text-base font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent pr-4">
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 text-orange-500"
              >
                <FaChevronDown />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="px-4 md:px-6 py-4 text-gray-300 text-sm md:text-base border-t border-gray-700">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQSajt;
