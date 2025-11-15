"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import RedesignHero from "@/components/redesign/RedesignHero";
import RedesignIntro from "@/components/redesign/RedesignIntro";
import RedesignBenefits from "@/components/redesign/RedesignBenefits";
import RedesignWhyNextJS from "@/components/redesign/RedesignWhyNextJS";
import RedesignProcess from "@/components/redesign/RedesignProcess";
import RedesignPerformance from "@/components/redesign/RedesignPerformance";
import RedesignFAQ from "@/components/redesign/RedesignFAQ";
import RedesignCTA from "@/components/redesign/RedesignCTA";

// Detektuj da li je mobilni uređaj
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

// Optimizovane animacije - GPU ubrzane, kraće duration za mobile
const createItemVariants = (isMobile: boolean) => ({
  hidden: {
    opacity: 0,
    y: isMobile ? 20 : 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: isMobile ? 0.3 : 0.5,
      ease: "easeOut",
    },
  },
});

const createHeroVariants = (isMobile: boolean) => ({
  hidden: {
    opacity: 0,
    y: isMobile ? 30 : 60,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: isMobile ? 0.4 : 0.6,
      ease: "easeOut",
    },
  },
});

export default function RedesignPageClient() {
  const isMobile = useIsMobile();

  // Kreiraj varijante na osnovu device type-a
  const itemVariants = createItemVariants(isMobile);
  const heroVariants = createHeroVariants(isMobile);

  // Viewport threshold - viši za mobilne uređaje
  const viewportAmount = isMobile ? 0.15 : 0.2;

  return (
    <div className="bg-gray-900/90">
      <section className="pt-24 pb-6 md:pb-16 px-4">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          style={{ willChange: 'transform, opacity' }}
        >
          <RedesignHero />
        </motion.div>
      </section>

      <section className="container mx-auto px-3 md:px-16 pb-16">
        <div className="space-y-8 md:space-y-16">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount }}
            style={{ willChange: 'transform, opacity' }}
          >
            <RedesignIntro />
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount }}
            style={{ willChange: 'transform, opacity' }}
          >
            <RedesignBenefits />
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount }}
            style={{ willChange: 'transform, opacity' }}
          >
            <RedesignWhyNextJS />
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount }}
            style={{ willChange: 'transform, opacity' }}
          >
            <RedesignCTA />
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount }}
            style={{ willChange: 'transform, opacity' }}
          >
            <RedesignProcess />
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount }}
            style={{ willChange: 'transform, opacity' }}
          >
            <RedesignPerformance />
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount }}
            style={{ willChange: 'transform, opacity' }}
          >
            <RedesignFAQ />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
