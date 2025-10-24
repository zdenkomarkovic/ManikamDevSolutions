"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroSajt from "@/components/izrada-sajta/HeroSajt";
import IntroSajt from "@/components/izrada-sajta/IntroSajt";
import PaketiSajt from "@/components/izrada-sajta/PaketiSajt";
import PrednostiSajt from "@/components/izrada-sajta/PrednostiSajt";
import CTASajt from "@/components/izrada-sajta/CTASajt";
import ProcesSajt from "@/components/izrada-sajta/ProcesSajt";
import FAQSajt from "@/components/izrada-sajta/FAQSajt";
import IndustrijeSajt from "@/components/izrada-sajta/IndustrijeSajt";
import DodatneUslugeSajt from "@/components/izrada-sajta/DodatneUslugeSajt";
import WhyUs from "@/components/izrada-sajta/WhyUs";

// Animacija varijante za fade in + slide up
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Animacija za scale up (uvećavanje)
const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const IzradaSajtaClient = () => {
  return (
    <div className=" bg-gray-900/90 ">
      {/* Hero sekcija */}
      <motion.div
        className="pt-24 pb-6 md:pb-16 px-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSajt />
      </motion.div>

      {/* Glavna sekcija sa sadržajem */}
      <div className="container mx-auto px-3 md:px-16 pb-16">
        <div className="space-y-8 mb-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <IntroSajt />
          </motion.div>

          <PaketiSajt />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <PrednostiSajt />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={scaleUp}
          >
            <CTASajt />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={scaleUp}
        >
          <WhyUs />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={fadeInUp}
        >
          <ProcesSajt />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={fadeInUp}
        >
          <FAQSajt />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={fadeInUp}
        >
          <IndustrijeSajt />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={fadeInUp}
        >
          <DodatneUslugeSajt />
        </motion.div>
      </div>
    </div>
  );
};

export default IzradaSajtaClient;
