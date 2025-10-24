import React from "react";
import { FaChartLine, FaCog, FaLock } from "react-icons/fa";

const BenefitsWebshop = () => {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-xl p-6 shadow-lg text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaChartLine className="text-2xl text-blue-600" />
        </div>
        <h4 className="text-xl font-bold mb-3">Povećanje Prodaje</h4>
        <p className="text-gray-600">
          Naši klijenti u proseku povećaju prodaju za 40-60% u prvoj godini rada
          web shopa.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaCog className="text-2xl text-green-600" />
        </div>
        <h4 className="text-xl font-bold mb-3">Automatizacija</h4>
        <p className="text-gray-600">
          Automatski procesi za porudžbine, fakturisanje i upravljanje zalihama
          štede vreme i novac.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg text-center">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaLock className="text-2xl text-purple-600" />
        </div>
        <h4 className="text-xl font-bold mb-3">Sigurnost</h4>
        <p className="text-gray-600">
          Najviši standardi sigurnosti za zaštitu vaših i podataka vaših kupaca.
        </p>
      </div>
    </div>
  );
};

export default BenefitsWebshop;
