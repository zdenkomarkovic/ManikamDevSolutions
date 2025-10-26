"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function RedesignCTA() {
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
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="text-gray-50 bg-gradient-to-br from-gray-700 via-gray-500 to-gray-200 rounded-2xl py-3 md:p-6">
      <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-5 bg-gradient-to-l from-orange-500 to-orange-300 bg-clip-text text-transparent text-center"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Spremni Za Transformaciju Vašeg Sajta?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Šta Dobijate U Besplatnoj Konsultaciji:
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Detaljna analiza vašeg trenutnog sajta</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Procena performansi i SEO metrike</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Personalizovana strategija migracije</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Projekcija poboljšanja i ROI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Tačan timeline i procena troškova</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Odgovori na sva vaša pitanja</span>
                  </li>
                </ul>

                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <h4 className="font-bold text-gray-900 mb-3">Posebna Ponuda:</h4>
                  <p className="text-gray-700 mb-4">
                    Zakažite konsultaciju u narednih 7 dana i dobijte <span className="font-bold text-orange-600">10% popusta</span> na ukupnu cenu projekta + besplatnu SEO audit vrednosti €500.
                  </p>
                  <p className="text-sm text-gray-600">* Ponuda važi do {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('sr-RS')}</p>
                </div>
              </div>

              <div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontaktirajte Nas</h3>

                  <div className="space-y-6 mb-8">
                    <a
                      href="mailto:manikamwebsolutions@gmail.com"
                      className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-orange-500 transition-colors duration-300"
                    >
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Email</div>
                        <div className="font-semibold text-gray-900">manikamwebsolutions@gmail.com</div>
                      </div>
                    </a>

                    <a
                      href="tel:+381641967267"
                      className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-orange-500 transition-colors duration-300"
                    >
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Telefon</div>
                        <div className="font-semibold text-gray-900">+381 64 196 7267</div>
                      </div>
                    </a>
                  </div>

                  <Link
                    href="/sr/contact"
                    className="block w-full bg-gradient-to-r from-orange-600 to-red-600 text-white text-center px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Zakažite Besplatnu Konsultaciju
                    <ArrowRight className="inline-block ml-2 w-5 h-5" />
                  </Link>

                  <p className="text-sm text-gray-600 text-center mt-4">
                    Odgovaramo u roku od 24 sata
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center text-white"
          >
            <p className="text-lg mb-4">
              Pridružite se desetinama zadovoljnih klijenata koji su modernizovali svoje sajtove
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="opacity-90">Uspešnih Migracija</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="opacity-90">Zadovoljnih Klijenata</div>
              </div>
              <div>
                <div className="text-3xl font-bold">0</div>
                <div className="opacity-90">Data Loss Incidenata</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
  );
}
