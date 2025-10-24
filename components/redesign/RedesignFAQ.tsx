"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Često Postavljana Pitanja
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Odgovori na najčešća pitanja o procesu migracije i redizajna
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-gradient-to-r from-orange-50 to-white p-6 rounded-lg border border-orange-100 hover:border-orange-300 transition-all duration-300 text-left"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-orange-600 flex-shrink-0" />
                  </motion.div>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-700 mt-4 leading-relaxed">{faq.answer}</p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-600 mb-4">
            Imate dodatna pitanja? Javite nam se!
          </p>
          <Link
            href="#kontakt"
            className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300"
          >
            Kontaktirajte Nas
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

import Link from "next/link";
