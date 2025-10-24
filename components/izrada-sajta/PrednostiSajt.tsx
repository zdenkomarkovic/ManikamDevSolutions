import React from "react";
import {
  FaRocket,
  FaMobile,
  FaSearch,
  FaShieldAlt,
  FaCog,
  FaTools,
} from "react-icons/fa";
const PrednostiSajt = () => {
  return (
    <div className="bg-gradient-to-bl from-gray-900 via-gray-700 to-orange-500 rounded-2xl p-4 md:p-12 shadow-lg border border-gray-100">
      <div className=" grid md:grid-cols-2 items-center gap-4 md:gap-12">
        <div className="">
          <h3 className="text-2xl font-extrabold mb-6 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent text-center">
            Prednosti naših sajtova nad WordPress rešenjima
          </h3>
          <div className="grid md:grid-cols-1 gap-4 md:gap-6">
            <div className="flex items-start p-4 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 h-full rounded-lg">
              <FaRocket className="text-orange-500 mt-1 -mr-6 flex-shrink-0" />
              <div className="first-letter:ml-10">
                <strong>Brzina performansi:</strong> Next.js tehnologija
                omogućava server-side rendering i statičku generaciju, što
                rezultuje brzinom učitavanja do 10 puta bržom od WordPress
                sajtova.
              </div>
            </div>
            <div className="flex items-start p-4 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 h-full rounded-lg">
              <FaSearch className="text-orange-500 mt-1 -mr-6 flex-shrink-0" />
              <div className="first-letter:ml-10">
                <strong>SEO optimizacija:</strong> Ugrađena SEO optimizacija na
                nivou koda, meta tagovi, strukturirani podaci i optimizacija za
                Core Web Vitals garantuju bolje rangiranje na Google-u.
              </div>
            </div>
            <div className="flex items-start p-4 bg-gray-100 h-full rounded-lg">
              <FaShieldAlt className="text-orange-500 mt-1 -mr-6 flex-shrink-0" />
              <div className="first-letter:ml-10">
                <strong>Sigurnost:</strong> Za razliku od WordPress-a koji je
                čest cilj hakera, naši custom sajtovi imaju minimalnu površinu
                za napade i redovno se ažuriraju sa najnovijim sigurnosnim
                standardima.
              </div>
            </div>
            <div className="flex items-start p-4 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 h-full rounded-lg">
              <FaMobile className="text-orange-500 mt-1 -mr-6 flex-shrink-0" />
              <div className="first-letter:ml-10">
                <strong>Mobilna optimizacija:</strong> Responsive dizajn koji se
                savršeno prilagođava svim uređajima, od mobilnih telefona do
                desktop računara, bez kompromisa u funkcionalnosti.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-red-600 flex flex-col justify-between rounded-2xl py-8 px-3 md:px-10 shadow-lg text-white">
          <div>
            <h3 className="text-2xl font-bold mb-5">
              Modernizacija & Migracija - cena po projektu
            </h3>
            <p className="mb-2 opacity-90">
              Transformacija WordPress sajta u Next.js
            </p>
            <div className="w-full h-1 bg-gray-200 mb-4"></div>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <FaTools className="text-gray-200 mt-1 mr-2 flex-shrink-0 " />
                <span>Kompletna migracija sadržaja</span>
              </div>
              <div className="flex items-start">
                <FaRocket className="text-gray-200 mt-1 mr-2 flex-shrink-0" />
                <span> I do 10x brži sajt</span>
              </div>
              <div className="flex items-start">
                <FaShieldAlt className="text-gray-200 mt-1 mr-2 flex-shrink-0" />
                <span>Eliminacija sigurnosnih rizika</span>
              </div>
              <div className="flex items-start">
                <FaSearch className="text-gray-200 mt-1 mr-2 flex-shrink-0" />
                <span>Poboljšanje SEO rangiranja</span>
              </div>
              <div className="flex items-start">
                <FaCog className="text-gray-200 mt-1 mr-2 flex-shrink-0" />
                <span>Moderniji dizajn</span>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur rounded-xl p-4 mb-4">
              <h4 className="font-bold mb-2">
                Zašto migrirati sa WordPress-a?
              </h4>
              <ul className="text-base space-y-1">
                <li>• Eliminacija čestih hakovanja</li>
                <li>• Prestanak plaćanja skupih plugin-ova</li>
                <li>• Drastično poboljšanje brzine</li>
                <li>• Bolje Google rangiranje</li>
                <li>• Smanjenje troškova održavanja</li>
              </ul>
            </div>
          </div>
          <div>
            <strong>Vreme migracije:</strong> 7-14 dana
            <br />
            <strong>Garancija:</strong> Potpuna funkcionalnost
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrednostiSajt;
