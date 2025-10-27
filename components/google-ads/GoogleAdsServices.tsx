"use client";

import React from "react";
import { motion } from "framer-motion";

const GoogleAdsServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="mt-16 bg-gradient-to-br from-gray-900 via-gray-700 to-orange-600 rounded-2xl p-4 md:p-8 shadow-lg border border-gray-100">
      <div className="flex justify-center mb-8">
        <motion.h2
          className="text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Naše usluge Google oglašavanja
        </motion.h2>
      </div>
      <motion.p
        className="text-center text-gray-100 mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Pružamo kompletnu Google Ads uslugu koja pokriva sve tipove kampanja.
        Bez obzira na vašu industriju ili cilj, imamo rešenje koje će doneti
        maksimalne rezultate.
      </motion.p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Search Kampanje
          </h3>
          <p className="">
            Pojavite se na vrhu Google pretrage kada klijenti traže vaše
            proizvode. Optimizovane kampanje za maksimalnu konverziju uz
            minimalan trošak.
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Display Kampanje
          </h3>
          <p className="">
            Vizuelno privlačni oglasi na preko 2 miliona sajtova. Idealno za
            remarketing i građenje prepoznatljivosti brenda.
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            YouTube Oglašavanje
          </h3>
          <p className="">
            Video kampanje na najvećoj video platformi. Targetiranje na osnovu
            demografskih podataka, interesovanja i ponašanja korisnika.
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Shopping Kampanje
          </h3>
          <p className="">
            Savršeno rešenje za online prodavnice. Proizvodi se prikazuju
            direktno u Google pretrazi sa slikom, cenom i nazivom.
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Remarketing Kampanje
          </h3>
          <p className="">
            Ponovo dosegnite posetioce koji nisu izvršili kupovinu.
            Personalizovane poruke za različite segmente sa većom stopom
            konverzije.
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            App Kampanje
          </h3>
          <p className="">
            Promovišite mobilne aplikacije kroz Google Play Store i App Store.
            Optimizovane kampanje za preuzimanje i aktivnost korisnika.
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Smart Kampanje
          </h3>
          <p className="">
            Automatizovane kampanje koje Google optimizuje za vas. Idealno za
            početnike ili manje složene ciljeve sa minimalnim upravljanjem.
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Performance Max
          </h3>
          <p className="">
            Najnoviji tip kampanje koji koristi AI za optimizaciju kroz sve
            Google kanale. Maksimalni doseg i performanse u jednoj kampanji.
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Lokalno Oglašavanje
          </h3>
          <p className="">
            Targetiranje korisnika u vašoj blizini. Idealno za lokalne biznise,
            restorane, uslužne delatnosti i fizičke prodavnice.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GoogleAdsServices;
