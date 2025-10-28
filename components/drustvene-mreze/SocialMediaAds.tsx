"use client";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import { motion } from "framer-motion";
import {
  FaBullseye,
  FaDollarSign,
  FaChartBar,
  FaCrosshairs,
  FaCheckCircle,
} from "react-icons/fa";

export default function SocialMediaAds() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <div className="mt-16 bg-gradient-to-br from-gray-900 via-gray-700 to-orange-600 rounded-2xl p-4 md:p-8 shadow-lg border border-gray-100">
      <div className="flex justify-center mb-8">
        <motion.h2
          className="text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Facebook i Instagram Oglašavanje
        </motion.h2>
      </div>
      <motion.p
        className="text-center text-gray-100 mb-12 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Plaćeno oglašavanje na društvenim mrežama omogućava vam da dosegnete
        tačno onu publiku koja je zainteresovana za vaš proizvod ili uslugu.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl text-center hover:shadow-lg transition-shadow"
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            y: -5,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-14 h-14 bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4"
            variants={iconVariants}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
          >
            <FaBullseye className="text-2xl text-white" />
          </motion.div>
          <h3 className="text-xl font-bold mb-3 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Precizno Targetiranje
          </h3>
          <p className="">
            Targetirajte po demografiji, interesovanjima, ponašanju, lokaciji i
            custom audiences.
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl text-center hover:shadow-lg transition-shadow"
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            y: -5,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-14 h-14 bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4"
            variants={iconVariants}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
          >
            <FaDollarSign className="text-2xl text-white" />
          </motion.div>
          <h3 className="text-xl font-bold mb-3 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Kontrola Budžeta
          </h3>
          <p className="">
            Postavite dnevni ili mesečni budžet. Plaćate samo za rezultate koje
            želite.
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl text-center hover:shadow-lg transition-shadow"
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            y: -5,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-14 h-14 bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4"
            variants={iconVariants}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
          >
            <FaChartBar className="text-2xl text-white" />
          </motion.div>
          <h3 className="text-xl font-bold mb-3 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Merljivi Rezultati
          </h3>
          <p className="">
            Detaljne analytics - tačno znate koliko ste potrošili i šta ste
            dobili.
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl text-center hover:shadow-lg transition-shadow"
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            y: -5,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-14 h-14 bg-gradient-to-r from-orange-600 to-orange-400  rounded-xl flex items-center justify-center mx-auto mb-4"
            variants={iconVariants}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
          >
            <FaCrosshairs className="text-2xl text-white" />
          </motion.div>
          <h3 className="text-xl font-bold mb-3 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Retargeting
          </h3>
          <p className="">
            Ponovo dosegnite posetioce sajta ili one koji su već angažovani sa
            vašim sadržajem.
          </p>
        </motion.div>
      </motion.div>
      <div className="flex justify-center mt-8 mb-6">
        <motion.h3
          className="text-xl md:text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Tipovi Reklamnih Kampanja
        </motion.h3>
      </div>

      <motion.div
        className="mt-8 p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.01,
          y: -3,
          boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
        }}
      >
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={cardVariants}>
            <h4 className="font-bold text-xl inline-flex items-center gap-2 mb-4 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              <motion.span
                className="w-10 h-10 rounded-full flex items-center justify-center"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaFacebook className="text-5xl text-blue-600" />
              </motion.span>
              Facebook Ads Kampanje
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start md:items-center gap-2">
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1 md:mt-0" />
                </motion.div>
                <span className="">
                  <strong>Lead Generation Ads</strong> - prikupljanje email i
                  kontakt informacija
                </span>
              </li>
              <li className="flex items-start md:items-center gap-2">
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1 md:mt-0" />
                </motion.div>
                <span className="">
                  <strong>Traffic Ads</strong> - slanje posetilaca na vaš sajt
                  ili landing page
                </span>
              </li>
              <li className="flex items-start md:items-center gap-2">
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1 md:mt-0" />
                </motion.div>
                <span className="">
                  <strong>Engagement Ads</strong> - povećanje lajkova,
                  komentara, deljenja
                </span>
              </li>
              <li className="flex items-start md:items-center gap-2">
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1 md:mt-0" />
                </motion.div>
                <span className="">
                  <strong>Conversion Ads</strong> - direktna prodaja proizvoda
                  ili usluga
                </span>
              </li>
              <li className="flex items-start md:items-center gap-2">
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1 md:mt-0" />
                </motion.div>
                <span className="">
                  <strong>Video Views Ads</strong> - promovisanje video sadržaja
                </span>
              </li>
              <li className="flex items-start md:items-center gap-2">
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1 md:mt-0" />
                </motion.div>
                <span className="">
                  <strong>Page Likes Ads</strong> - rast broja pratilaca
                  stranice
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={cardVariants}>
            <h4 className="font-bold inline-flex items-center gap-2 mb-4 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              <motion.span
                className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white rounded-full flex items-center justify-center"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <FaInstagram className="text-3xl text-white" />
              </motion.span>
              Instagram Ads Kampanje
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start md:items-center gap-2">
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1 md:mt-0" />
                </motion.div>
                <span className="">
                  <strong>Feed Ads</strong> - reklame u glavnom Instagram feed-u
                </span>
              </li>
              <li className="flex items-start md:items-center gap-2">
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1 md:mt-0" />
                </motion.div>
                <span className="">
                  <strong>Stories Ads</strong> - full-screen vertikalne reklame
                  između Stories
                </span>
              </li>
              <li className="flex items-start md:items-center gap-2">
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1 md:mt-0" />
                </motion.div>
                <span className="">
                  <strong>Reels Ads</strong> - reklame u Instagram Reels
                  (viralni video format)
                </span>
              </li>
              <li className="flex items-start md:items-center gap-2">
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1 md:mt-0" />
                </motion.div>
                <span className="">
                  <strong>Explore Ads</strong> - reklame u Explore sekciji
                </span>
              </li>
              <li className="flex items-start md:items-center gap-2">
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1 md:mt-0" />
                </motion.div>
                <span className="">
                  <strong>Shopping Ads</strong> - direktna prodaja proizvoda
                  preko Instagram
                </span>
              </li>
              <li className="flex items-start md:items-center gap-2">
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <FaCheckCircle className="text-orange-600 flex-shrink-0 mt-1 md:mt-0" />
                </motion.div>
                <span className="">
                  <strong>Carousel Ads</strong> - višestruke slike/video u
                  jednoj reklami
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-6 p-4 bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 10px 30px rgba(249, 115, 22, 0.4)",
          }}
        >
          <p className="font-semibold mb-2"> Savet za uspešne kampanje:</p>
          <p className="text-sm">
            Najbolji rezultati se postižu kombinovanjem organskog sadržaja i
            plaćenog oglašavanja. Redovno objavljujte kvalitetan sadržaj,
            gradite angažovanu publiku, a zatim koristite reklame da pojačate
            doseg i targetirate nove potencijalne kupce.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
