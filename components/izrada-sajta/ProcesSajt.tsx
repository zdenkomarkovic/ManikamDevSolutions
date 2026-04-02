"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMessages } from "@/lib/MessagesContext";

const stepIds = ["step1", "step2", "step3", "step4", "step5", "step6"];

const ProcesSajt = () => {
  const intl = useMessages();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="mt-16 bg-gradient-to-br from-gray-900 via-gray-700 to-orange-600 rounded-2xl p-4 md:p-8 shadow-lg border border-gray-100">
      <div className="flex justify-center mb-8">
        <motion.h2
          className="text-xl md:text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent text-center w-full"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {intl.formatMessage({ id: "websiteDevelopment.process.title" })}
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stepIds.map((stepId, i) => {
          const isActive = activeIndex === i;
          return (
            <motion.div
              key={stepId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="relative rounded-xl border border-gray-200 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 cursor-pointer hover:border-orange-400 hover:shadow-md transition-all h-auto min-h-[6rem] md:h-32 overflow-hidden"
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => setActiveIndex(isActive ? null : i)}
            >
              <div className="p-2 md:p-4 flex flex-col items-center h-full text-center">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 flex items-center justify-center text-white font-bold text-xs md:text-sm mb-1 md:mb-2">
                  {i + 1}
                </div>
                <p className="text-sm md:text-lg font-bold text-gray-900 leading-snug flex-1">
                  {intl.formatMessage({ id: `websiteDevelopment.process.${stepId}.title` })}
                </p>
                <div className="flex items-center gap-1 mt-1 md:mt-2 text-orange-500 text-[10px] md:text-xs font-medium">
                  <span>Saznaj više</span>
                  <span>›</span>
                </div>
              </div>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "100%" }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-400 p-4 flex items-center"
                  >
                    <p className="text-white text-[10px] md:text-xs leading-relaxed line-clamp-5">
                      {intl.formatMessage({ id: `websiteDevelopment.process.${stepId}.text` })}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcesSajt;
