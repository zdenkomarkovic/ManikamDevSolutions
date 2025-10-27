"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const contentTypes = [
  {
    category: "Grafički Dizajn",
    items: [
      "Profesionalne grafike za postove",
      "Infografike sa statistikama i podacima",
      "Quote grafike i motivacioni sadržaj",
      "Carousel postovi (swipe postovi sa više slika)",
      "Cover fotografije i branding elementi",
      "Thumbnail dizajn za video sadržaj",
    ],
  },
  {
    category: "Video Sadržaj",
    items: [
      "Instagram Reels (15-90 sekundi)",
      "Facebook video postovi",
      "Stories video sadržaj sa animacijama",
      "Tutorial i how-to video snimci",
      "Product showcase i unboxing",
      "Behind-the-scenes sadržaj",
    ],
  },
  {
    category: "Copywriting",
    items: [
      "Angažujući caption tekstovi",
      "Call-to-action (CTA) optimizacija",
      "Storytelling pristup",
      "SEO optimizovani opisi",
      "Hashtag strategija i research",
      "Emoji marketing i vizuelna organizacija teksta",
    ],
  },
  {
    category: "Content Strategija",
    items: [
      "Content calendar planiranje (30-90 dana unapred)",
      "Mix obrazovnog, zabavnog i promotivnog sadržaja",
      "Trendovi i sezonski sadržaj",
      "User-generated content kampanje",
      "Konkurentska analiza sadržaja",
      "A/B testiranje različitih formata",
    ],
  },
];

export default function SocialMediaContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
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
          Kreiranje Sadržaja Koji Angažuje
        </motion.h2>
      </div>
      <motion.p
        className="text-center text-gray-100 mb-12 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Kvalitetan sadržaj je srce uspešnog social media marketinga. Kreiramo
        raznovrstan sadržaj prilagođen vašoj publici i platformi, sa fokusom na
        engagement i konverzije.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {contentTypes.map((type, index) => (
          <motion.div
            key={index}
            className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-shadow"
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              y: -5,
              boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              {type.category}
            </h3>
            <motion.ul
              className="space-y-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {type.items.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.6 },
                    }}
                  >
                    <FaCheckCircle className="text-orange-600 flex-shrink-0" />
                  </motion.div>
                  <span className="">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>

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
        <div className="flex justify-center mb-6">
          <motion.h3
            className="text-xl md:text-2xl font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Zašto je kvalitetan sadržaj ključan?
          </motion.h3>
        </div>
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={cardVariants} className="text-center">
            <h4 className="font-bold text-gray-900 mb-2 text-lg">
              Povećava Angažman
            </h4>
            <p className=" text-sm leading-relaxed">
              Zanimljiv sadržaj podstiče lajkove, komentare, deljenje i čuvanje
              postova, što algoritmi Facebook-a i Instagram-a nagrađuju većim
              doseom.
            </p>
          </motion.div>
          <motion.div variants={cardVariants} className="text-center">
            <h4 className="font-bold text-gray-900 mb-2 text-lg">
              Gradi Brend
            </h4>
            <p className=" text-sm leading-relaxed">
              Konzistentan, kvalitetan sadržaj pozicionira vas kao stručnjaka u
              industriji i gradi prepoznatljivost brenda kod vaše publike.
            </p>
          </motion.div>
          <motion.div variants={cardVariants} className="text-center">
            <h4 className="font-bold text-gray-900 mb-2 text-lg">
              Konvertuje Pratiоce
            </h4>
            <p className=" text-sm leading-relaxed">
              Dobro osmišljen sadržaj sa jasnim CTA-om transformiše pratioce u
              lead-ove i kupce, direktno utiče na vašu prodaju.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
