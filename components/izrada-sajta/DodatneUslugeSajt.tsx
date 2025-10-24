import React from "react";
import { FaSearch, FaCog, FaPaintBrush } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const DodatneUslugeSajt = () => {
  return (
    <div className="mt-16 bg-gradient-to-br from-gray-700 via-gray-500 to-gray-200 rounded-2xl p-3 py-5 md:p-8 shadow-lg border border-gray-200">
      <h2 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
        Dodatne usluge koje nudimo
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 p-3 md:p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            <FaSearch className="text-orange-500" />
            SEO Optimizacija i Marketing
          </h3>
          <p className="text-gray-600 mb-3">
            Kompleksna SEO optimizacija koja uključuje istraživanje ključnih
            reči, on-page i off-page optimizaciju, link building, i mesečne
            izveštaje o napretku rangiranja.
          </p>
          <ul className=" text-gray-600 space-y-1 ml-4">
            <li>• Keyword research i strategija sadržaja</li>
            <li>• Google My Business optimizacija</li>
            <li>• Local SEO za lokalne biznise</li>
            <li>• Mesečni izveštaji i analitika</li>
          </ul>
        </div>

        {/* <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent font-bold mb-3 flex items-center gap-2">
            <FaPaintBrush className="text-orange-500" />
            Branding i Grafički Dizajn
          </h3>
          <p className="text-gray-600 mb-3">
            Kreiramo kompletnu vizuelni identitet vašeg brenda - od logoa preko
            poslovnih materijala do social media grafika koji će vas izdvojiti
            od konkurencije.
          </p>
          <ul className="text-sm text-gray-600 space-y-1 ml-4">
            <li>• Dizajn logotipa i brand identiteta</li>
            <li>• Vizit karte, flajeri, brošure</li>
            <li>• Social media grafike</li>
            <li>• Brand guidelines dokumentacija</li>
          </ul>
        </div> */}

        <div className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 p-3 md:p-6 rounded-xl shadow-md">
          <h3 className="text-xl bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent font-bold mb-3 flex items-center gap-2">
            <FaCog className="text-orange-500" />
            Održavanje i Podrška
          </h3>
          <p className="text-gray-600 mb-3">
            Redovno održavanje sajta, sigurnosni update-i, backup-ovi,
            monitoring performansi i tehnička podrška koja vam je dostupna kada
            vam zatreba.
          </p>
          <ul className=" text-gray-600 space-y-1 ml-4">
            <li>• Redovni sigurnosni update-i</li>
            <li>• Dnevni automatski backup-i</li>
            <li>• 24/7 monitoring performansi</li>
            <li>• Prioritetna tehnička podrška</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DodatneUslugeSajt;
