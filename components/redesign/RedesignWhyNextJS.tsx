"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code, Layers, Zap, Globe } from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";

export default function RedesignWhyNextJS() {
  const { t } = useLocale();
  const whyNextJS = t.redesignMigration.whyNextJS;
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
          {whyNextJS.title}
        </motion.h2>
      </div>

      <motion.p
        className="text-center text-gray-100 mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {whyNextJS.subtitle}
      </motion.p>

      <motion.div
        className="grid md:grid-cols-2 gap-6 mb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl shadow-lg"
          variants={cardVariants}
          whileHover={{
            scale: 1.01,
            y: -3,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
        >
          <Code className="w-12 h-12 text-orange-600 mb-4" />
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Moderna Tehnologija
          </h3>
          <p className="leading-relaxed mb-4">
            Next.js je izgrađen na React-u, najpopularnijoj JavaScript
            biblioteci na svetu. Koristi najnovije web standarde i najbolje
            prakse industrije. Za razliku od WordPress-a koji je izgrađen na PHP
            tehnologiji staroj 30 godina, Next.js predstavlja budućnost web
            razvoja.
          </p>
          <p className="leading-relaxed">
            Automatska code splitting optimizacija znači da korisnici preuzimaju
            samo kod koji im je potreban za trenutnu stranicu, drastično
            smanjujući vreme učitavanja. Image optimization automatski
            kompresuje i servira slike u modernim formatima kao što je WebP.
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl shadow-lg"
          variants={cardVariants}
          whileHover={{
            scale: 1.01,
            y: -3,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
        >
          <Layers className="w-12 h-12 text-orange-600 mb-4" />
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Fleksibilnost i Skalabilnost
          </h3>
          <p className="leading-relaxed mb-4">
            Next.js vam daje potpunu kontrolu nad svakim aspektom vašeg sajta.
            Nije ograničen temama i plugin-ima kao WordPress. Možete
            implementirati bilo koju funkcionalnost koja vam padne na pamet, od
            jednostavnih landing stranica do kompleksnih web aplikacija.
          </p>
          <p className="leading-relaxed">
            Kako vaš biznis raste, sajt lako skalira. Bilo da imate 100 ili 10
            miliona posetilaca mesečno, Next.js sajt će raditi besprekorno.
            Automatsko skaliranje na platformama kao Vercel osigurava da nikada
            ne izgubite posetioce zbog pada servera.
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl shadow-lg"
          variants={cardVariants}
          whileHover={{
            scale: 1.01,
            y: -3,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
        >
          <Zap className="w-12 h-12 text-orange-600 mb-4" />
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Neverovatne Performanse
          </h3>
          <p className="leading-relaxed mb-4">
            Next.js koristi hibridni pristup koji kombinuje Static Site
            Generation (SSG) i Server-Side Rendering (SSR). Statičke stranice se
            generišu tokom build procesa i servuju se munjevitom brzinom sa
            CDN-a širom sveta.
          </p>
          <p className="leading-relaxed">
            Prefetching tehnologija automatski učitava linkove koji su vidljivi
            na ekranu, tako da navigacija između stranica bude trenutna. Lazy
            loading osigurava da se resursi učitavaju samo kada su potrebni.
            Rezultat? Google PageSpeed Score od 95-100.
          </p>
        </motion.div>

        <motion.div
          className="p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl shadow-lg"
          variants={cardVariants}
          whileHover={{
            scale: 1.01,
            y: -3,
            boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
          }}
        >
          <Globe className="w-12 h-12 text-orange-600 mb-4" />
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Globalna Dostupnost
          </h3>
          <p className="leading-relaxed mb-4">
            Vaš sajt će biti dostupan korisnicima širom sveta sa neverovatnom
            brzinom zahvaljujući Edge Network tehnologiji. Sadržaj se automatski
            distribuira na stotine servera širom planete i servuje se sa
            najbližeg servera svakom posetiocu.
          </p>
          <p className="leading-relaxed">
            Internacionalizacija (i18n) je ugrađena u Next.js, što znači da
            možete lako kreirati višejezične sajtove. Automatsko detektovanje
            jezika, SEO-friendly URL-ovi za svaki jezik i optimizacija za
            lokalna tržišta.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl p-6 md:p-8 text-white text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 10px 30px rgba(249, 115, 22, 0.4)",
        }}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Pridružite se Hiljadama Kompanija Koje su Migrirali na Next.js
        </h3>

        <Link
          href="/contact"
          className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
        >
          Započnite Vašu Transformaciju
        </Link>
      </motion.div>
    </div>
  );
}
