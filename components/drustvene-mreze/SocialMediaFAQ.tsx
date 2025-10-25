"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "Koliko često treba objavljivati sadržaj na Facebook i Instagram?",
    answer:
      "Preporučujemo minimum 3-5 puta nedeljno na Facebook-u i 4-7 puta nedeljno na Instagram-u (uključujući Stories). Konzistentnost je ključna - bolje je redovno objavljivati kvalitetan sadržaj nego sporadično objavljivati veliku količinu. Instagram Reels i Stories mogu se koristiti češće jer imaju kraći životni vek.",
  },
  {
    question: "Koliko traje da se vide rezultati na društvenim mrežama?",
    answer:
      "Prvi vidljivi rezultati (rast pratilaca, povećan angažman) obično dolaze nakon 1-3 meseca konzistentnog rada. Značajniji rezultati kao što su povećane konverzije i prodaja dolaze nakon 3-6 meseci. Social media marketing je maraton, ne sprint - potrebno je vreme da izgradite angažovanu zajednicu i etablirate brend.",
  },
  {
    question: "Da li je potreban budžet za plaćeno oglašavanje?",
    answer:
      "Dok je moguće postići rezultate i sa organskim sadržajem, plaćeno oglašavanje značajno ubrzava rast. Organski doseg na Facebook-u i Instagram-u je drastično opao (obično 1-6% vaših pratilaca vidi organsku objavu). Preporučujemo mesečni oglasni budžet od minimum 100-200€ za male biznise, 300-500€ za srednje i 500€+ za velike biznise.",
  },
  {
    question: "Šta je razlika između organskog i plaćenog sadržaja?",
    answer:
      "Organski sadržaj je sve što objavite bez plaćanja - vidljiv je vašim pratiocima i može se pojaviti u Explore/Discover sekcijama. Plaćeni sadržaj (reklame) omogućava vam da targetirate specifičnu publiku koja možda ne prati vaš profil, ali odgovara vašoj buyer personi. Najbolji rezultati dolaze kombinovanjem oba pristupa.",
  },
  {
    question: "Da li mogu sam da upravljam svojim društvenim mrežama?",
    answer:
      "Možete, ali profesionalno upravljanje zahteva značajno vreme, kreativne veštine (dizajn, copywriting, video editing), poznavanje algoritama, advertising platformi, analytics alata i konstantno praćenje trendova. Većina vlasnika biznisa nema vreme ni resurse za kvalitetno upravljanje društvenim mrežama pored vođenja biznisa. Mi imamo tim specijalista i alate koji garantuju rezultate.",
  },
  {
    question: "Kako merite uspeh na društvenim mrežama?",
    answer:
      "Pratimo više metrika: rast pratilaca, engagement rate (lajkovi, komentari, deljenja, čuvanja), reach i impressions, click-through rate (CTR), website traffic sa društvenih mreža, lead generisanje, konverzije i ROI na reklamne kampanje. Fokusiramo se na metrike koje direktno utiču na vaš biznis, ne samo na taštine metrike (vanity metrics).",
  },
  {
    question: "Da li radite i sa drugim platformama osim Facebook i Instagram?",
    answer:
      "Naša primarna specijalizacija su Facebook i Instagram jer su to najkorišćenije platforme u Srbiji i regionu sa najvećim potencijalom za većinu biznisa. Ove dve platforme pokrivaju širok spektar demografskih grupa i industrija. Za specifične potrebe možemo razmotriti i druge platforme u dogovoru sa klijentom.",
  },
  {
    question: "Šta ako nisam zadovoljan sadržajem?",
    answer:
      "Pre svake objave šaljemo vam sadržaj na odobrenje. Imate mogućnost da tražite izmene i prilagođavanja dok ne budete potpuno zadovoljni. Radimo revizije sve dok sadržaj ne bude savršen. Takođe, nakon prvog meseca saradnje upoznajemo vaš brend i ton komunikacije, što rezultira sadržajem koji u potpunosti odgovara vašoj viziji.",
  },
];

export default function SocialMediaFAQ() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      x: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="mt-16 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-4 md:p-8 shadow-lg border border-gray-100">
      <motion.h2
        className="text-3xl font-extrabold text-center mb-12 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Često Postavljana Pitanja
      </motion.h2>
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`${index !== faqs.length - 1 ? "border-b border-gray-200 pb-6" : "pb-6"} border-l-4 border-orange-500 rounded-lg pl-4 md:pl-6`}
            variants={itemVariants}
            whileHover={{
              x: 10,
              transition: { duration: 0.3 }
            }}
          >
            <motion.h3
              className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              {faq.question}
            </motion.h3>
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {faq.answer}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
