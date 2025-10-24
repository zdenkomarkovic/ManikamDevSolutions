"use client";

import { motion } from "framer-motion";
import { Code, Layers, Zap, Globe } from "lucide-react";

export default function RedesignWhyNextJS() {
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
            Zašto Baš Next.js?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Next.js je napredni React framework koji koriste svetski giganti kao što su Netflix, Nike, Twitch, TikTok, Uber i Hulu
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl">
                <Code className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Moderna Tehnologija</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Next.js je izgrađen na React-u, najpopularnijoj JavaScript biblioteci na svetu. Koristi najnovije web standarde i najbolje prakse industrije. Za razliku od WordPress-a koji je izgrađen na PHP tehnologiji staroj 30 godina, Next.js predstavlja budućnost web razvoja.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Automatska code splitting optimizacija znači da korisnici preuzimaju samo kod koji im je potreban za trenutnu stranicu, drastično smanjujući vreme učitavanja. Image optimization automatski kompresuje i servira slike u modernim formatima kao što je WebP.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
                <Layers className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Fleksibilnost i Skalabilnost</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Next.js vam daje potpunu kontrolu nad svakim aspektom vašeg sajta. Nije ograničen temama i plugin-ima kao WordPress. Možete implementirati bilo koju funkcionalnost koja vam padne na pamet, od jednostavnih landing stranica do kompleksnih web aplikacija.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Kako vaš biznis raste, sajt lako skalira. Bilo da imate 100 ili 10 miliona posetilaca mesečno, Next.js sajt će raditi besprekorno. Automatsko skaliranje na platformama kao Vercel osigurava da nikada ne izgubite posetioce zbog pada servera.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
                <Zap className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Neverovatne Performanse</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Next.js koristi hibridni pristup koji kombinuje Static Site Generation (SSG) i Server-Side Rendering (SSR). Statičke stranice se generišu tokom build procesa i servuju se munjevitom brzinom sa CDN-a širom sveta.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Prefetching tehnologija automatski učitava linkove koji su vidljivi na ekranu, tako da navigacija između stranica bude trenutna. Lazy loading osigurava da se resursi učitavaju samo kada su potrebni. Rezultat? Google PageSpeed Score od 95-100.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
                <Globe className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Globalna Dostupnost</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Vaš sajt će biti dostupan korisnicima širom sveta sa neverovatnom brzinom zahvaljujući Edge Network tehnologiji. Sadržaj se automatski distribuira na stotine servera širom planete i servuje se sa najbližeg servera svakom posetiocu.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Internacionalizacija (i18n) je ugrađena u Next.js, što znači da možete lako kreirati višejezične sajtove. Automatsko detektovanje jezika, SEO-friendly URL-ovi za svaki jezik i optimizacija za lokalna tržišta.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 md:p-12 rounded-xl text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pridružite se Hiljadama Kompanija Koje su Migrirali na Next.js
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Nike, Twitch, Hulu, Notion, GitHub i još mnogi koriste Next.js za svoje kritične web aplikacije
            </p>
            <Link
              href="#kontakt"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Započnite Vašu Transformaciju
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
