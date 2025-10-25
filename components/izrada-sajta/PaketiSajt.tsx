"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaSearch,
  FaShieldAlt,
  FaCog,
  FaPaintBrush,
  FaShareAlt,
  FaServer,
  FaGlobe,
} from "react-icons/fa";
import { MdDevices, MdEmail, MdLanguage, MdEuro } from "react-icons/md";

const PaketiSajt = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 md:">
      {/* Osnovni paket */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 flex flex-col justify-between rounded-2xl py-8 px-3 shadow-lg border border-gray-200"
      >
        <div>
          <h3 className=" text-2xl font-bold mb-5 text-orange-500">
            Osnovni paket - 399€
          </h3>
          <p className="text-gray-600 mb-4">
            Idealno za manje biznise i startapove
          </p>
          <div className="w-full h-1 bg-gray-200 mb-4"></div>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <FaCode className="text-red-500 mt-1 mr-2 flex-shrink-0" />
              <span>Do 5 stranica</span>
            </div>
            <div className="flex items-start">
              <MdDevices className="text-red-500 mt-1 mr-2 flex-shrink-0" />
              <span>
                Responzivni pregled prilagodjen za mobilne i desktop uredjaje
              </span>
            </div>
            <div className="flex items-start">
              <FaPaintBrush className="text-red-500 mt-1 mr-2 flex-shrink-0" />
              <span>Moderni dizajn pravljen po vasim zeljama i potrebama</span>
            </div>
            <div className="flex items-start">
              <MdEmail className="text-red-500  mt-1 mr-2 flex-shrink-0" />
              <span>Kontakt forma + Google Maps</span>
            </div>
            <div className="flex items-start">
              <FaShareAlt className="text-red-500  mt-1 mr-2 flex-shrink-0" />
              <span>Integracija sa socijalnim mrezama</span>
            </div>
            <div className="flex items-start">
              <FaSearch className="text-red-500  mt-1 mr-2 flex-shrink-0" />
              <span>Osnovna SEO optimizacija</span>
            </div>
            <div className="flex items-start">
              <FaShieldAlt className="text-red-500  mt-1 mr-2 flex-shrink-0" />
              <span>SSL sertifikat i zaštita veb-sajta</span>
            </div>
            <div className="flex items-start">
              <FaServer className="text-red-500  mt-1 mr-2 flex-shrink-0" />
              <span>Hosting za prvu godinu</span>
            </div>
            <div className="flex items-start">
              <FaGlobe className="text-red-500  mt-1 mr-2 flex-shrink-0" />
              <span>Domen za prvu godinu</span>
            </div>
          </div>
        </div>
        <div className=" text-gray-600">
          <strong>Vreme izrade:</strong> 7-10 dana
        </div>
      </motion.div>

      {/* Profesionalni paket - NAJPOPULARNIJI */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 flex flex-col justify-between rounded-2xl py-8 px-3 shadow-xl border-2 border-blue-200 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-500 to-purple-600 text-white px-4 py-1 rounded-bl-2xl text-xs">
          <span className="font-bold">NAJPOPULARNIJI</span>
        </div>

        <div>
          <h3 className="m text-2xl font-bold mb-5 text-orange-500">
            Profesionalni Sajt - 499€
          </h3>
          <p className="text-gray-600 mb-4">
            Kompletno rešenje za ozbiljan biznis
          </p>
          <div className="w-full h-1 bg-gray-200 mb-4"></div>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <FaCode className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
              <span>Do 10 stranica</span>
            </div>
            <div className="flex items-start">
              <MdDevices className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
              <span>
                Responzivni pregled prilagodjen za mobilne i desktop uredjaje
              </span>
            </div>
            <div className="flex items-start">
              <FaPaintBrush className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
              <span>Moderni dizajn pravljen po vasim zeljama i potrebama</span>
            </div>
            <div className="flex items-start">
              <FaCog className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
              <span>CMS za samostalno ažuriranje</span>
            </div>
            <div className="flex items-start">
              <MdEmail className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
              <span>Kontakt forma + Google Maps</span>
            </div>
            <div className="flex items-start">
              <FaShareAlt className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
              <span>Integracija sa socijalnim mrezama</span>
            </div>
            <div className="flex items-start">
              <FaSearch className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
              <span>Osnovna SEO optimizacija</span>
            </div>
            <div className="flex items-start">
              <FaShieldAlt className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
              <span>SSL sertifikat i zaštita veb-sajta</span>
            </div>
            <div className="flex items-start">
              <FaServer className="text-purple-500  mt-1 mr-2 flex-shrink-0" />
              <span>Hosting za prvu godinu</span>
            </div>
            <div className="flex items-start">
              <FaGlobe className="text-purple-500  mt-1 mr-2 flex-shrink-0" />
              <span>Domen za prvu godinu</span>
            </div>
          </div>
        </div>
        <div className=" text-gray-600">
          <strong>Vreme izrade:</strong> 10-14 dana
        </div>
      </motion.div>

      {/* Premium paket */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 flex flex-col justify-between rounded-2xl py-8 px-3  shadow-lg border border-gray-200"
      >
        <div>
          <h3 className=" text-2xl font-bold mb-5 text-orange-500">
            Premium Sajt - cena po projektu
          </h3>
          <p className="text-gray-600 mb-2">
            Za velike biznise sa specifičnim potrebama
          </p>
          <div className="w-full h-1 bg-gray-200 mb-4"></div>

          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <FaCode className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span>Neograničen broj stranica</span>
            </div>
            <div className="flex items-start">
              <MdDevices className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span>
                Responzivni pregled prilagodjen za mobilne i desktop uredjaje
              </span>
            </div>
            <div className="flex items-start">
              <FaPaintBrush className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span>Moderni dizajn pravljen po vasim zeljama i potrebama</span>
            </div>
            <div className="flex items-start">
              <FaCog className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span>CMS za samostalno ažuriranje</span>
            </div>
            <div className="flex items-start">
              <MdEmail className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span>Kontakt forma + Google Maps</span>
            </div>
            <div className="flex items-start">
              <FaShareAlt className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span>Integracija sa socijalnim mrezama</span>
            </div>
            <div className="flex items-start">
              <FaSearch className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span>SEO optimizacija</span>
            </div>
            <div className="flex items-start">
              <MdLanguage className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span>Mogucnost vise jezika</span>
            </div>
            <div className="flex items-start">
              <FaShieldAlt className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span>SSL sertifikat i zaštita veb-sajta</span>
            </div>
            <div className="flex items-start">
              <FaServer className="text-blue-500  mt-1 mr-2 flex-shrink-0" />
              <span>Hosting za prvu godinu</span>
            </div>
            <div className="flex items-start">
              <FaGlobe className="text-blue-500  mt-1 mr-2 flex-shrink-0" />
              <span>Domen za prvu godinu</span>
            </div>
          </div>
        </div>
        <div className=" text-gray-600 ">
          <strong>Vreme izrade:</strong> 10-14 dana
        </div>
      </motion.div>
    </div>
  );
};

export default PaketiSajt;
