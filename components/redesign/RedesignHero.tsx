"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Shield } from "lucide-react";
import Link from "next/link";

export default function RedesignHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Redizajn i Migracija Sajtova na Next.js
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Modernizujte svoj sajt sa WordPresa, Wix, Joomla ili drugih platformi na Next.js
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Transformišemo zastarele sajtove u brze, moderne i SEO optimizovane web aplikacije. Povećajte performanse do 10x, poboljšajte poziciju na Google-u i pružite korisnicima vrhunsko iskustvo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Link
              href="#kontakt"
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              Zakažite Besplatnu Konsultaciju
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#proces"
              className="bg-white text-orange-600 border-2 border-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300"
            >
              Saznajte Više
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Zap className="w-10 h-10 text-orange-600 mb-3 mx-auto" />
              <h3 className="font-bold text-lg mb-2">10x Brže Učitavanje</h3>
              <p className="text-gray-600 text-sm">Optimizovane performanse i brzina</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <TrendingUp className="w-10 h-10 text-orange-600 mb-3 mx-auto" />
              <h3 className="font-bold text-lg mb-2">Bolji SEO Ranking</h3>
              <p className="text-gray-600 text-sm">Viša pozicija na Google-u</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="w-10 h-10 text-orange-600 mb-3 mx-auto" />
              <h3 className="font-bold text-lg mb-2">Vrhunska Sigurnost</h3>
              <p className="text-gray-600 text-sm">Zaštita od napada i upada</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
