"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "Koliko dugo traje da se vide rezultati SEO optimizacije?",
    answer:
      "Prva vidljiva poboljšanja se obično pojavljuju nakon 3-6 meseci, dok značajniji rezultati dolaze nakon 6-12 meseci kontinuiranog rada. SEO je dugoročna strategija koja zahteva strpljenje, ali rezultati su trajni i isplativi.",
  },
  {
    question: "Šta je razlika između SEO i Google Ads oglašavanja?",
    answer:
      "SEO je organski način poboljšanja vidljivosti u rezultatima pretrage bez plaćanja po kliku, dok Google Ads predstavlja plaćeno oglašavanje. SEO donosi dugoročne rezultate, dok su Google Ads rezultati trenutni ali prestaju kad prestane plaćanje.",
  },
  {
    question: "Da li garantujete prvu poziciju na Google-u?",
    answer:
      "Ne možemo garantovati tačne pozicije jer Google algoritam konstantno evoluira, ali garantujemo profesionalan pristup, transparentnost i merljiva poboljšanja. Fokusiramo se na povećanje kvalitetnog saobraćaja i konverzija, ne samo na rangiranje.",
  },
  {
    question: "Šta uključa vaš SEO paket?",
    answer:
      "Naši paketi uključuju tehnički SEO audit, on-page optimizaciju, kvalitetan sadržaj, link building, lokalnu SEO optimizaciju, mesečne izveštaje i kontinuiranu podršku. Svaki paket prilagođavamo specifičnim potrebama klijenta.",
  },
  {
    question: "Da li radite lokalni SEO?",
    answer:
      "Da! Specijalizujemo se za lokalni SEO uključujući Google My Business optimizaciju, lokalne citacije, optimizaciju za 'near me' pretrage i upravljanje recenzijama. Ovo je idealno za lokalne biznise koji žele da privuku klijente iz svoje oblasti.",
  },
  {
    question: "Koliko košta SEO optimizacija?",
    answer:
      "Cena zavisi od trenutnog stanja sajta, konkurentnosti industrije i ciljeva. Nudimo različite pakete prilagođene različitim budžetima. Kontaktirajte nas za besplatnu konsultaciju i personalizovanu ponudu.",
  },
  {
    question: "Da li mogu da radim SEO sam?",
    answer:
      "Možete raditi osnovni SEO sami, ali profesionalna SEO optimizacija zahteva duboko poznavanje algoritama, tehničkih aspekata, alata i konstantno praćenje promena. Naš tim ima iskustvo i resurse da postigne rezultate brže i efikasnije.",
  },
  {
    question: "Kako merite uspeh SEO kampanje?",
    answer:
      "Pratimo više metrika: organski saobraćaj, rangiranje ključnih reči, kvalitet posetilaca, konverzije, bounce rate, domain autoritet i ROI. Dostavljamo detaljne mesečne izveštaje sa jasnim objašnjenjima napretka.",
  },
];

export default function SEOFAQ() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      x: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="mt-16 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-4 md:p-8 shadow-lg border border-gray-100">
      <div className="flex justify-center mb-12">
        <motion.h2
          className="text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Često Postavljana Pitanja
        </motion.h2>
      </div>
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
            className={`${
              index !== faqs.length - 1
                ? "border-b border-gray-200 pb-6"
                : "pb-6"
            } border-l-4 border-orange-600 rounded-lg pl-4 md:pl-6`}
            variants={itemVariants}
            whileHover={{
              x: 10,
              transition: { duration: 0.3 },
            }}
          >
            <motion.h3
              className="text-xl font-bold mb-3 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              {faq.question}
            </motion.h3>
            <motion.p
              className=""
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
