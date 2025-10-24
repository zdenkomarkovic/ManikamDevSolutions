"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function RedesignIntro() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
              Zašto je Vreme za Redizajn i Migraciju Vašeg Sajta?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
              U digitalnom svetu koji se brzo razvija, sajt napravljen pre nekoliko godina možda više ne zadovoljava moderne standarde. WordPress, Wix, Joomla i slične platforme bile su odličan izbor u prošlosti, ali danas postoje naprednije tehnologije koje nude neuporedivo bolje performanse, sigurnost i korisničko iskustvo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6 mt-12"
          >
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-lg border border-orange-100">
              <h3 className="text-2xl font-bold mb-6 text-orange-600">Problemi Starih Platformi</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-700">Sporo učitavanje stranica (3-10 sekundi)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-700">Loše performanse na mobilnim uređajima</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-700">Sigurnosni rizici i česte ranjivosti</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-700">Zastareli dizajn koji ne prati moderne trendove</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-700">Loš SEO ranking na Google-u</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-700">Skupo održavanje i redovni troškovi pluginova</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-lg border border-green-100">
              <h3 className="text-2xl font-bold mb-6 text-green-600">Prednosti Next.js Migracije</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Bljesak brzina učitavanja (0.5-2 sekunde)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Savršen responsive dizajn za sve uređaje</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Vrhunska sigurnost bez dodatnih pluginova</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Moderan dizajn sa najnovijim UI/UX trendovima</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Odličan SEO i viša pozicija u Google rezultatima</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Niži troškovi održavanja i hosting-a</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
