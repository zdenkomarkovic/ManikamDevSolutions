"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaCreditCard,
  FaChartLine,
  FaMobile,
  FaLock,
  FaCog,
  FaBell,
  FaLanguage,
  FaBoxes,
  FaServer,
  FaGlobe,
} from "react-icons/fa";
import { MdEuro } from "react-icons/md";

const PaketeWebshop = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 py-12 ">
      {/* Osnovni paket */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col justify-between bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-6 shadow-lg border border-gray-200"
      >
        <div>
          {" "}
          <h3 className="text-2xl flex gap-1 items-center font-bold mb-2 text-orange-500">
            Osnovni Web Shop - 700 <MdEuro />
          </h3>
          <p className="text-gray-600 mb-4">
            Idealno za manje biznise koji počinju online prodaju
          </p>
          <div className="w-full h-1 bg-gray-200 mb-4"></div>
          <div className="space-y-3 mb-6">
            <div className="flex items-center">
              <FaShoppingCart className="text-orange-500 mr-3 flex-shrink-0" />
              <span>Do 1000 proizvoda</span>
            </div>
            <div className="flex items-center">
              <FaMobile className="text-orange-500 mr-3 flex-shrink-0" />
              <span>Mobilna optimizacija</span>
            </div>
            <div className="flex items-center">
              <FaLock className="text-orange-500 mr-3 flex-shrink-0" />
              <span>SSL sertifikat</span>
            </div>
            <div className="flex items-center">
              <FaBoxes className="text-orange-500 mr-2 flex-shrink-0" />
              <span>Osnovno upravljanje zalihama</span>
            </div>
            <div className="flex items-center">
              <FaServer className="text-orange-500 mr-2 flex-shrink-0" />
              <span>Hosting za prvu godinu</span>
            </div>
            <div className="flex items-center">
              <FaGlobe className="text-orange-500 mr-2 flex-shrink-0" />
              <span>Domen za prvu godinu</span>
            </div>
          </div>
        </div>
        <div className=" text-gray-600">
          <strong>Vreme izrade:</strong> 10-14 dana
        </div>
      </motion.div>

      {/* Profesionalni paket - NAJPOPULARNIJI */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col justify-between bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-6 shadow-xl border-2 border-blue-200 relative overflow-hidden"
      >
        <div>
          <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-500 to-purple-600 text-white px-4 py-1 rounded-bl-2xl text-xs">
            <span className="font-bold">NAJPOPULARNIJI</span>
          </div>

          <div className="">
            <h3 className="text-2xl flex gap-1 items-center  font-bold mb-2 text-orange-500">
              Profesionalni Web Shop - 1000 <MdEuro />
            </h3>
            <p className="text-gray-600 mb-4">
              Kompletno e-commerce rešenje za ozbiljan biznis
            </p>
            <div className="w-full h-1 bg-gray-200 mb-4"></div>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <FaShoppingCart className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
                <span>Do 5000 proizvoda</span>
              </div>

              <div className="flex items-start">
                <FaCreditCard className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
                <span>Osnovno plaćanje (kartice, pouzeće)</span>
              </div>
              <div className="flex items-start">
                <FaCog className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
                <span>Napredne upravljanje zalihama</span>
              </div>
              <div className="flex items-start">
                <FaMobile className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
                <span>Napredna mobilna optimizacija</span>
              </div>
              <div className="flex items-start">
                <FaChartLine className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
                <span>Analytics i izveštaji</span>
              </div>
              <div className="flex items-start">
                <FaBell className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
                <span>Email notifikacije za kupce</span>
              </div>
              <div className="flex items-center">
                <FaServer className="text-purple-500 mr-2 flex-shrink-0" />
                <span>Hosting za prvu godinu</span>
              </div>
              <div className="flex items-center">
                <FaGlobe className="text-purple-500 mr-2 flex-shrink-0" />
                <span>Domen za prvu godinu</span>
              </div>
            </div>
          </div>
          <div className=" text-gray-600">
            <strong>Vreme izrade:</strong> 14-21 dan
            <br />
            <strong>Podrška:</strong> 3 meseca besplatno
          </div>
        </div>
      </motion.div>

      {/* Premium paket */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col justify-between bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-6 shadow-lg border border-gray-200"
      >
        <div>
          <h3 className="text-2xl font-bold mb-2 text-orange-500">
            Premium Web Shop - cena po projektu
          </h3>
          <p className="text-gray-600 mb-4">
            Enterprise rešenje sa naprednim funkcionalnostima
          </p>
          <div className="w-full h-1 bg-gray-200 mb-4"></div>
          <div className="space-y-3 mb-6">
            <div className="flex items-center">
              <FaShoppingCart className="text-blue-500 mr-2 flex-shrink-0" />
              <span>Neograničeno</span>
            </div>
            <div className="flex items-center">
              <FaCreditCard className="text-blue-500 mr-2 flex-shrink-0" />
              <span>Osnovno plaćanje (kartice, pouzeće)</span>
            </div>
            <div className="flex items-center">
              <FaCog className="text-blue-500 mr-2 flex-shrink-0" />
              <span>Razne funkcionalnosti - po želji</span>
            </div>

            <div className="flex items-center">
              <FaLanguage className="text-blue-500 mr-2 flex-shrink-0" />
              <span>Podrška za više jezika i valuta</span>
            </div>
            <div className="flex items-center">
              <FaServer className="text-blue-500 mr-2 flex-shrink-0" />
              <span>Hosting za prvu godinu</span>
            </div>
            <div className="flex items-center">
              <FaGlobe className="text-blue-500 mr-2 flex-shrink-0" />
              <span>Domen za prvu godinu</span>
            </div>
          </div>
        </div>
        <div className=" text-gray-600">
          <strong>Vreme izrade:</strong> 21-30 dana
          <br />
          <strong>Podrška:</strong> 6 meseci + prioritet
        </div>
      </motion.div>
    </div>
  );
};

export default PaketeWebshop;
