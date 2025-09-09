import React from "react";
import type { Metadata } from "next";
import {
  FaCode,
  FaRocket,
  FaMobile,
  FaSearch,
  FaShieldAlt,
  FaCog,
  FaTools,
  FaPaintBrush,
  FaShareAlt,
} from "react-icons/fa";
import { MdDevices, MdEmail, MdLanguage } from "react-icons/md";

export const metadata: Metadata = {
  title: "Izrada Sajta - Profesionalna Web Rešenja | Manikam Web Solutions",
  description:
    "Profesionalna izrada sajtova u Next.js tehnologiji. Brži, sigurniji i SEO optimizovani sajtovi za vaš biznis. Modernizacija WordPress sajtova i migracija na napredne tehnologije.",
  keywords: [
    "izrada sajta",
    "web sajt",
    "web dizajn",
    "Next.js",
    "React.js",
    "SEO optimizacija",
    "responzivni dizajn",
    "brzi sajt",
    "modernizacija sajta",
    "WordPress migracija",
    "web development",
    "profesionalni sajt",
  ],
  alternates: {
    canonical: "https://manikamwebsolutions.com/sr/izrada-sajta",
    languages: {
      sr: "https://manikamwebsolutions.com/sr/izrada-sajta",
      en: "https://manikamwebsolutions.com/en/website-development",
    },
  },
};

const page = () => {
  return (
    <div className=" bg-gradient-to-br from-gray-300 via-gray-50  to-white">
      {/* Hero sekcija */}
      <div className="pt-24 pb-6 md:pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Profesionalna Izrada Sajtova
          </h1>
          <p className="text-base md:text-2xl text-gray-700 mb-5 md:mb-8 max-w-4xl mx-auto md:first-letter:leading-relaxed">
            Kreiramo moderne, brze i SEO optimizovane sajtove koji privlače
            klijente i povećavaju vašu online prisutnost. Koristimo najnovije
            tehnologije za maksimalne rezultate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold">
              Next.js Eksperti
            </span>
            <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold">
              SEO Optimizovano
            </span>
            <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold">
              Mobilno Prilagođeno
            </span>
          </div>
        </div>
      </div>

      {/* Glavna sekcija sa sadržajem */}
      <div className="container mx-auto px-2 md:px-4 pb-16">
        <div className="space-y-8 mb-8">
          <div className="bg-white  text-center md:text-left rounded-2xl p-3 md:p-8 shadow-lg border border-gray-100">
            <h2 className="text-xl md:text-3xl font-bold mb-6 text-gray-800">
              Zašto je profesionalan sajt ključan za vaš uspeh?
            </h2>
            <div className="space-y-4">
              <p className="">
                U digitalnom svetu, vaš sajt je često prvi kontakt sa
                potencijalnim klijentima. Profesionalno izrađen sajt ne samo da
                predstavlja vaš brend, već aktivno radi na privlačenju novih
                kupaca 24 sata dnevno, 7 dana u nedelji.
              </p>
              <p>
                <strong>
                  Tehnologije koje koristimo - React.js, Node.js i Next.js
                </strong>{" "}
                - nisu slučajan izbor. Ove napredne tehnologije garantuju da će
                vaš sajt biti tehnički superiorniji, brži i bolje optimizovan od
                konkurencije koja koristi WordPress ili druge popularne sajt
                bildere.
              </p>
              <p>
                Brzina učitavanja sajta direktno utiče na SEO rangiranje i
                korisničko iskustvo. Google favorizuje brze sajtove, što znači
                bolju poziciju u rezultatima pretrage i veću vidljivost za vaš
                biznis. Naši sajtovi se učitavaju za manje od 2 sekunde, što je
                značajno brže od proseka industrije.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {" "}
            <div className="bg-white flex flex-col justify-between rounded-2xl py-8 px-3 shadow-lg border border-gray-200">
              <div>
                <h3 className="ml-5 text-2xl font-bold mb-5">Osnovni paket</h3>
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
                      Responzivni pregled prilagodjen za mobilne i desktop
                      uredjaje
                    </span>
                  </div>
                  <div className="flex items-start">
                    <FaPaintBrush className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Moderni dizajn pravljen po vasim zeljama i potrebama
                    </span>
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
                </div>
              </div>
              <div className=" text-gray-600">
                <strong>Vreme izrade:</strong> 7-10 dana
                <br />
                <strong>Hosting:</strong> 1 godina uključena
                <br />
                <strong>Domen:</strong> 1 godina uključena
              </div>
            </div>
            {/* Profesionalni paket - NAJPOPULARNIJI */}
            <div className="bg-white flex flex-col justify-between rounded-2xl py-8 px-3 shadow-xl border-2 border-blue-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-500 to-purple-600 text-white px-4 py-1 rounded-bl-2xl text-xs">
                <span className="font-bold">NAJPOPULARNIJI</span>
              </div>

              <div className="">
                <h3 className="ml-5 text-2xl font-bold mb-5 text-gray-800">
                  Profesionalni Sajt
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
                      Responzivni pregled prilagodjen za mobilne i desktop
                      uredjaje
                    </span>
                  </div>
                  <div className="flex items-start">
                    <FaPaintBrush className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Moderni dizajn pravljen po vasim zeljama i potrebama
                    </span>
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
                </div>
              </div>
              <div className=" text-gray-600">
                <strong>Vreme izrade:</strong> 10-14 dana
                <br />
                <strong>Hosting:</strong> 1 godina uključena
                <br />
                <strong>Domen:</strong> 1 godina uključena
              </div>
            </div>
            {/* Premium paket */}
            <div className="bg-white flex flex-col justify-between rounded-2xl py-8 px-3  shadow-lg border border-gray-200">
              <div>
                <h3 className="ml-5 text-2xl font-bold mb-5 text-gray-800">
                  Premium Sajt
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
                      Responzivni pregled prilagodjen za mobilne i desktop
                      uredjaje
                    </span>
                  </div>
                  <div className="flex items-start">
                    <FaPaintBrush className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Moderni dizajn pravljen po vasim zeljama i potrebama
                    </span>
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
                </div>
              </div>
              <div className=" text-gray-600 ">
                <strong>Vreme izrade:</strong> 10-14 dana
                <br />
                <strong>Hosting:</strong> 1 godina uključena
                <br />
                <strong>Domen:</strong> 1 godina uključena
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-600 flex flex-col justify-between rounded-2xl py-8 px-3 shadow-lg text-white">
              <div>
                <h3 className="text-2xl font-bold mb-5">
                  Modernizacija & Migracija
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

                <div className="bg-white/15 backdrop-blur rounded-xl p-4 mb-4">
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
              <div className=" ">
                <strong>Vreme migracije:</strong> 7-14 dana
                <br />
                <strong>Garancija:</strong> Potpuna funkcionalnost
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 md:text-center">
              Prednosti naših sajtova nad WordPress rešenjima
            </h3>
            <div className=" grid md:grid-cols-4 gap-4 items-start">
              <div className="flex items-start p-4 bg-gray-100 h-full rounded-lg">
                <FaRocket className="text-blue-500 mt-1 -mr-6 flex-shrink-0" />
                <div className="first-letter:ml-10">
                  <strong>Brzina performansi:</strong> Next.js tehnologija
                  omogućava server-side rendering i statičku generaciju, što
                  rezultuje brzinom učitavanja do 10 puta bržom od WordPress
                  sajtova.
                </div>
              </div>
              <div className="flex items-start p-4 bg-gray-100 h-full rounded-lg">
                <FaSearch className="text-green-500 mt-1 -mr-6 flex-shrink-0" />
                <div className="first-letter:ml-10">
                  <strong>SEO optimizacija:</strong> Ugrađena SEO optimizacija
                  na nivou koda, meta tagovi, strukturirani podaci i
                  optimizacija za Core Web Vitals garantuju bolje rangiranje na
                  Google-u.
                </div>
              </div>
              <div className="flex items-start p-4 bg-gray-100 h-full rounded-lg">
                <FaShieldAlt className="text-red-500 mt-1 -mr-6 flex-shrink-0" />
                <div className="first-letter:ml-10">
                  <strong>Sigurnost:</strong> Za razliku od WordPress-a koji je
                  čest cilj hakera, naši custom sajtovi imaju minimalnu površinu
                  za napade i redovno se ažuriraju sa najnovijim sigurnosnim
                  standardima.
                </div>
              </div>
              <div className="flex items-start p-4 bg-gray-100 h-full rounded-lg">
                <FaMobile className="text-purple-500 mt-1 -mr-6 flex-shrink-0" />
                <div className="first-letter:ml-10">
                  <strong>Mobilna optimizacija:</strong> Responsive dizajn koji
                  se savršeno prilagođava svim uređajima, od mobilnih telefona
                  do desktop računara, bez kompromisa u funkcionalnosti.
                </div>
              </div>
            </div>
          </div>

          {/* CTA sekcija */}
          <div className="bg-gradient-to-br from-gray-400 to-white rounded-2xl p-6  text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              Spremni za digitalni uspeh?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:space-y-8 md:px-20">
                <div className="">
                  <h3 className="text-xl font-bold mb-4">
                    Rezultati koje možete očekivati
                  </h3>
                  <ul className="space-y-1 md:space-y-3 mx-auto w-fit">
                    <li className="flex items-center">
                      <FaSearch className="mr-3 text-red-700" />
                      Poboljšanje Google rangiranja za 50-80%
                    </li>
                    <li className="flex items-center">
                      <FaRocket className="mr-3 text-red-700" />
                      Povećanje brzine sajta za 300-500%
                    </li>
                    <li className="flex items-center">
                      <FaMobile className="mr-3 text-red-700" />
                      Bolje korisničko iskustvo na svim uređajima
                    </li>
                    <li className="flex items-center">
                      <FaShieldAlt className="mr-3 text-red-700" />
                      Maksimalna sigurnost i stabilnost
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <p className="mb-4 text-2xl md:text-3xl opacity-90 font-bold">
                  Kontaktirajte nas za besplatnu konsultaciju
                </p>

                <div className="flex flex-col  gap-4  justify-center items-center">
                  {/* Phone Call Button */}
                  <a
                    href={`tel:+381641967267`}
                    className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-red-900 to-red-700 text-white px-4 md:px-8 py-2 md:py-3 rounded-xl text-base md:text-3xl font-semibold hover:from-red-950 hover:to-red-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
                    className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-red-900 to-red-700 text-white px-4 md:px-8 py-2 md:py-3 rounded-xl text-base md:text-3xl font-semibold hover:from-red-950 hover:to-red-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
        </div>

        {/* Leva kolona - SEO optimizovan tekst */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Desna kolona - 4 Paketa */}
          <div className="lg:sticky lg:top-24 space-y-6">
            {/* Modernizacija i Migracija paket */}
          </div>
        </div>

        {/* Dodatna sekcija sa benefitima */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Zašto klijenti biraju naše usluge?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRocket className="text-2xl text-blue-600" />
              </div>
              <h4 className="text-xl font-bold mb-3">Brzina i Performanse</h4>
              <p className="text-gray-600">
                Naši sajtovi se učitavaju 5-10 puta brže od WordPress sajtova,
                što direktno utiče na SEO i korisničko iskustvo.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSearch className="text-2xl text-green-600" />
              </div>
              <h4 className="text-xl font-bold mb-3">SEO Optimizacija</h4>
              <p className="text-gray-600">
                Ugrađena SEO optimizacija na nivou koda garantuje bolje
                rangiranje i veću vidljivost na Google-u.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-2xl text-red-600" />
              </div>
              <h4 className="text-xl font-bold mb-3">Sigurnost</h4>
              <p className="text-gray-600">
                Custom kod i najnoviji sigurnosni standardi štite vaš sajt od
                hakovanja i malware napada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
