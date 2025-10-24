"use client";

import { motion } from "framer-motion";
import { TrendingUp, Gauge, Award } from "lucide-react";

export default function RedesignPerformance() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Realne Performanse, Merljivi Rezultati
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ovo nisu samo marketinške priče - evo konkretnih podataka naših klijenata nakon migracije
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20"
          >
            <Gauge className="w-12 h-12 text-orange-400 mb-4 mx-auto" />
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">-75%</div>
              <div className="text-xl font-semibold mb-2">Vreme Učitavanja</div>
              <div className="text-gray-300 text-sm">Sa 6.2s na 1.5s prosečno</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20"
          >
            <TrendingUp className="w-12 h-12 text-green-400 mb-4 mx-auto" />
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">+45%</div>
              <div className="text-xl font-semibold mb-2">Organski Saobraćaj</div>
              <div className="text-gray-300 text-sm">U prvih 3 meseca nakon migracije</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20"
          >
            <Award className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">95+</div>
              <div className="text-xl font-semibold mb-2">PageSpeed Score</div>
              <div className="text-gray-300 text-sm">Google lighthouse rezultat</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-lg p-8 md:p-12 rounded-xl border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Comparison: WordPress vs Next.js
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-6 text-red-400">Tipičan WordPress Sajt</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span>Vreme učitavanja:</span>
                    <span className="font-bold text-red-400">4-8 sekundi</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span>PageSpeed Score:</span>
                    <span className="font-bold text-red-400">30-60</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span>Server Requests:</span>
                    <span className="font-bold text-red-400">80-150</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span>Page Size:</span>
                    <span className="font-bold text-red-400">3-8 MB</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span>Monthly Hosting:</span>
                    <span className="font-bold text-red-400">€15-50</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span>Security Updates:</span>
                    <span className="font-bold text-red-400">Weekly</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span>Mobile Score:</span>
                    <span className="font-bold text-red-400">Poor</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-6 text-green-400">Next.js Sajt</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span>Vreme učitavanja:</span>
                    <span className="font-bold text-green-400">0.5-2 sekunde</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span>PageSpeed Score:</span>
                    <span className="font-bold text-green-400">90-100</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span>Server Requests:</span>
                    <span className="font-bold text-green-400">10-30</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span>Page Size:</span>
                    <span className="font-bold text-green-400">200-800 KB</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span>Monthly Hosting:</span>
                    <span className="font-bold text-green-400">€0-10</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span>Security Updates:</span>
                    <span className="font-bold text-green-400">Automatic</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span>Mobile Score:</span>
                    <span className="font-bold text-green-400">Excellent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-xl text-gray-300 mb-6">
            Svaki aspekt je izmeren i dokumentovan. Nudimo before/after analizu vašeg sajta.
          </p>
          <Link
            href="#kontakt"
            className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300"
          >
            Zatražite Besplatnu Analizu
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

import Link from "next/link";
