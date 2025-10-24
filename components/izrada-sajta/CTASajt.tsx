import React from "react";
import { FaRocket, FaSearch, FaMobile, FaShieldAlt } from "react-icons/fa";

const CTASajt = () => {
  return (
    <>
      <div className="text-gray-50 bg-gradient-to-br from-gray-700 via-gray-500 to-gray-200 rounded-2xl py-3 md:p-6  text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-5 bg-gradient-to-l from-orange-500 to-orange-300 bg-clip-text text-transparent">
          Spremni za digitalni uspeh?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="md:space-y-8 md:px-20">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Rezultati koje možete očekivati
              </h3>
              <ul className="space-y-1 md:space-y-3 mx-auto w-fit">
                <li className="flex items-center">
                  <FaSearch className="mr-3 text-orange-500" />
                  Poboljšanje Google rangiranja za 50-80%
                </li>
                <li className="flex items-center">
                  <FaRocket className="mr-3 text-orange-500" />
                  Povećanje brzine sajta za 300-500%
                </li>
                <li className="flex items-center">
                  <FaMobile className="mr-3 text-orange-500" />
                  Bolje korisničko iskustvo na svim uređajima
                </li>
                <li className="flex items-center">
                  <FaShieldAlt className="mr-3 text-orange-500" />
                  Maksimalna sigurnost i stabilnost
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className="mb-4 text-2xl md:text-3xl opacity-90 font-bold px-2">
              Kontaktirajte nas za besplatnu konsultaciju
            </p>

            <div className="flex flex-col  gap-4  justify-center items-center">
              {/* Phone Call Button */}
              <a
                href={`tel:+381641967267`}
                className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-orange-500 to-orange-300 text-white px-2 md:px-8 py-1 md:py-3 rounded-xl text-base md:text-3xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="block text-lg md:text-2xl font-normal opacity-90">
                  +381641967267
                </span>
              </a>

              {/* Email Button */}
              <a
                href="mailto:manikamwebsolutions@gmailcom"
                className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-orange-500 to-orange-300 text-white px-2 md:px-8 py-1 md:py-3 rounded-xl text-base md:text-3xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>

                <span className="block text-lg md:text-2xl font-normal opacity-90">
                  manikamwebsolutions@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dodatna sekcija sa benefitima */}
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
              Ugrađena SEO optimizacija na nivou koda garantuje bolje rangiranje
              i veću vidljivost na Google-u.
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
    </>
  );
};

export default CTASajt;
