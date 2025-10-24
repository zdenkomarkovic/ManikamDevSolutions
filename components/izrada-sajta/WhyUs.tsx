import React from "react";
import { FaRocket, FaSearch, FaShieldAlt } from "react-icons/fa";

const WhyUs = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-extrabold text-center mb-12 bg-gradient-to-r from-orange-500 to-gray-300 bg-clip-text text-transparent">
        Zašto klijenti biraju naše usluge?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-bl from-gray-900 via-gray-800 to-orange-500 rounded-xl p-6 shadow-lg text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaRocket className="text-2xl text-white" />
          </div>
          <h4 className="text-xl font-bold mb-3 text-gray-100">
            Brzina i Performanse
          </h4>
          <p className="text-gray-100">
            Naši sajtovi se učitavaju 5-10 puta brže od WordPress sajtova, što
            direktno utiče na SEO i korisničko iskustvo.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-orange-500 rounded-xl p-6 shadow-lg text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaSearch className="text-2xl text-white" />
          </div>
          <h4 className="text-xl font-bold mb-3 text-gray-100">
            SEO Optimizacija
          </h4>
          <p className="text-gray-100">
            Ugrađena SEO optimizacija na nivou koda garantuje bolje rangiranje i
            veću vidljivost na Google-u.
          </p>
        </div>

        <div className="bg-gradient-to-bl from-gray-900 via-gray-800 to-orange-500 rounded-xl p-6 shadow-lg text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaShieldAlt className="text-2xl text-white" />
          </div>
          <h4 className="text-xl font-bold mb-3 text-gray-100">Sigurnost</h4>
          <p className="text-gray-100">
            Custom kod i najnoviji sigurnosni standardi štite vaš sajt od
            hakovanja i malware napada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
