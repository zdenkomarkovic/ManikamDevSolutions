"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const faqs = [
  {
    question: "Koliko dugo traje proces migracije?",
    answer: "Zavisi od veličine i kompleksnosti sajta. Mali sajt (5-10 stranica) može biti migriran za 2-3 nedelje. Srednji sajt (20-50 stranica) obično traje 4-6 nedelja. Veliki sajt ili e-commerce platforma može trajati 8-12 nedelja. Dajemo vam tačan timeline nakon inicijalne analize.",
  },
  {
    question: "Da li će moj sajt biti nedostupan tokom migracije?",
    answer: "Ne! Vaš trenutni sajt ostaje potpuno funkcionalan tokom celog procesa. Razvijamo novi sajt na staging serveru i testiramo ga kompletno pre lansiranja. Prelazak sa starog na novi sajt se dešava trenutno, obično traje samo nekoliko minuta za DNS propagaciju.",
  },
  {
    question: "Šta se dešava sa mojim SEO rankingom?",
    answer: "SEO je naš prioritet! Implementiramo 301 redirects za sve stare URL-ove, zadržavamo sve meta tagove, strukturirane podatke i optimizujemo tehnički SEO. U većini slučajeva, klijenti vide poboljšanje SEO rangiranja nakon migracije zbog boljih performansi i Core Web Vitals. Nudimo 90-dana SEO monitoring nakon lansiranja.",
  },
  {
    question: "Mogu li zadržati trenutni dizajn?",
    answer: "Apsolutno! Možete izabrati između tri opcije: (1) Identičan transfer - zadržavamo trenutni dizajn pixel-perfect, (2) Refresh - zadržavamo strukturu ali modernizujemo elemente, ili (3) Potpuni redizajn - kreiramo nov moderan dizajn. Većina klijenata bira opciju 2 za najbolji balans.",
  },
  {
    question: "Koliko košta migracija?",
    answer: "Cena zavisi od obima posla. Mali sajt počinje od €1,500, srednji sajt €3,000-€6,000, a veliki kompleksni projekti ili e-commerce mogu biti €8,000+. Nudimo besplatnu procenu nakon što analiziramo vaš sajt. Plaćanje je podeljeno u nekoliko faza (deposit, milestones, final payment).",
  },
  {
    question: "Da li mogu ažurirati sajt nakon migracije?",
    answer: "Da! Možemo integrisati headless CMS kao što je Sanity, Contentful ili Strapi koji vam omogućava da lako ažurirate sadržaj kao u WordPress-u. Alternativno, nudimo maintenance pakete gde mi radimo ažuriranja za vas. Takođe obezbeđujemo video tutoriale i dokumentaciju.",
  },
  {
    question: "Šta se dešava sa slikama i video fajlovima?",
    answer: "Svi mediji se migriraju i automatski optimizuju. Next.js Image component automatski kompresuje slike, generiše responsive verzije i servuje ih u modernim formatima (WebP, AVIF). Video fajlovi se mogu hostovati na vašem serveru ili migrirati na cloud storage (Cloudinary, AWS S3) za bolje performanse.",
  },
  {
    question: "Da li zadržavam kontrolu nad domenom?",
    answer: "Potpuno! Vi zadržavate vlasništvo nad domenom. Mi samo ažuriramo DNS zapise da pokazuju na novi server. Možete koristiti bilo koji domain registrar (GoDaddy, Namecheap, CloudFlare, itd.). Pomoći ćemo vam sa DNS konfiguracijom i SSL sertifikatom.",
  },
  {
    question: "Šta ako pronađem bug nakon lansiranja?",
    answer: "Nudimo 30 dana besplatne post-launch podrške. Svi bugovi i problemi koji nastanu tokom ovog perioda biće ispravljeni bez dodatnih troškova. Nakon toga, možete birati između hourly support ili mesečnog maintenance paketa.",
  },
  {
    question: "Mogu li zadržati blog i postojeće postove?",
    answer: "Naravno! Svi blog postovi, kategorije, tagovi i komentari će biti migrirani. Možemo integrisati CMS za lake buduće blog postove, ili implementirati Markdown-based blog sistem. URL struktura može ostati ista radi SEO-a (/blog/post-name) ili biti optimizovana.",
  },
  {
    question: "Da li će moje forme i integracije raditi?",
    answer: "Da! Migriramo sve kontakt forme, newsletter subscribe forme, payment integracije, CRM konekcije (HubSpot, Salesforce), email marketing (Mailchimp), analytics (Google Analytics, Meta Pixel) i sve ostale third-party servise koje koristite.",
  },
  {
    question: "Gde će sajt biti hostovan?",
    answer: "Preporučujemo Vercel (kompanija koja razvija Next.js) jer nude najbolju integraciju, automatsko skaliranje i često besplatan hosting za male sajtove. Alternative su Netlify, CloudFlare Pages, ili vaš sopstveni server. Možete izabrati šta vam odgovara - mi podržavamo sve opcije.",
  },
];

export default function RedesignFAQ() {
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
