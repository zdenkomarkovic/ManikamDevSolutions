import React from "react";
import type { Metadata } from "next";
import { FaCode, FaRocket, FaMobile, FaSearch, FaShieldAlt, FaCog, FaExchangeAlt, FaTools } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Izrada Sajta - Profesionalna Web Rešenja | Manikam Web Solutions",
  description: "Profesionalna izrada sajtova u Next.js tehnologiji. Brži, sigurniji i SEO optimizovani sajtovi za vaš biznis. Modernizacija WordPress sajtova i migracija na napredne tehnologije.",
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
    "profesionalni sajt"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero sekcija */}
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-700 via-red-700 to-gray-800 bg-clip-text text-transparent">
            Profesionalna Izrada Sajtova
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Kreiramo moderne, brze i SEO optimizovane sajtove koji privlače klijente i povećavaju vašu online prisutnost. 
            Koristimo najnovije tehnologije za maksimalne rezultate.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              Next.js Eksperti
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
              SEO Optimizovano
            </span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
              Mobilno Prilagođeno
            </span>
          </div>
        </div>
      </div>

      {/* Glavna sekcija sa sadržajem */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Leva kolona - SEO optimizovan tekst */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Zašto je profesionalan sajt ključan za vaš uspeh?
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  U digitalnom svetu, vaš sajt je često prvi kontakt sa potencijalnim klijentima. Profesionalno izrađen sajt 
                  ne samo da predstavlja vaš brend, već aktivno radi na privlačenju novih kupaca 24 sata dnevno, 7 dana u nedelji.
                </p>
                <p>
                  <strong>Tehnologije koje koristimo - React.js, Node.js i Next.js</strong> - nisu slučajan izbor. 
                  Ove napredne tehnologije garantuju da će vaš sajt biti tehnički superiorniji, brži i bolje optimizovan 
                  od konkurencije koja koristi WordPress ili druge popularne graditelje sajtova.
                </p>
                <p>
                  Brzina učitavanja sajta direktno utiče na SEO rangiranje i korisničko iskustvo. Google favorizuje brze sajtove, 
                  što znači bolju poziciju u rezultatima pretrage i veću vidljivost za vaš biznis. Naši sajtovi se učitavaju 
                  za manje od 2 sekunde, što je značajno brže od proseka industrije.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Prednosti naših sajtova nad WordPress rešenjima
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <FaRocket className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Brzina performansi:</strong> Next.js tehnologija omogućava server-side rendering i statičku generaciju, 
                    što rezultuje brzinom učitavanja do 10 puta bržom od WordPress sajtova.
                  </div>
                </div>
                <div className="flex items-start">
                  <FaSearch className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>SEO optimizacija:</strong> Ugrađena SEO optimizacija na nivou koda, meta tagovi, strukturirani podaci 
                    i optimizacija za Core Web Vitals garantuju bolje rangiranje na Google-u.
                  </div>
                </div>
                <div className="flex items-start">
                  <FaShieldAlt className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Sigurnost:</strong> Za razliku od WordPress-a koji je čest cilj hakera, naši custom sajtovi 
                    imaju minimalnu površinu za napade i redovno se ažuriraju sa najnovijim sigurnosnim standardima.
                  </div>
                </div>
                <div className="flex items-start">
                  <FaMobile className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Mobilna optimizacija:</strong> Responsive dizajn koji se savršeno prilagođava svim uređajima, 
                    od mobilnih telefona do desktop računara, bez kompromisa u funkcionalnosti.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-600 to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Rezultati koje možete očekivati
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaSearch className="mr-3 text-yellow-300" />
                  Poboljšanje Google rangiranja za 50-80%
                </li>
                <li className="flex items-center">
                  <FaRocket className="mr-3 text-yellow-300" />
                  Povećanje brzine sajta za 300-500%
                </li>
                <li className="flex items-center">
                  <FaMobile className="mr-3 text-yellow-300" />
                  Bolje korisničko iskustvo na svim uređajima
                </li>
                <li className="flex items-center">
                  <FaShieldAlt className="mr-3 text-yellow-300" />
                  Maksimalna sigurnost i stabilnost
                </li>
              </ul>
            </div>
          </div>

          {/* Desna kolona - 4 Paketa */}
          <div className="lg:sticky lg:top-24 space-y-6">
            
            {/* Osnovni paket */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                Osnovni Sajt
              </h3>
              <p className="text-gray-600 mb-4">
                Idealno za manje biznise i startove
              </p>
              <div className="text-3xl font-bold text-blue-600 mb-4">€800</div>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-start">
                  <FaCode className="text-blue-500 mt-1 mr-2 flex-shrink-0 text-xs" />
                  <span>Do 5 stranica</span>
                </div>
                <div className="flex items-start">
                  <FaMobile className="text-green-500 mt-1 mr-2 flex-shrink-0 text-xs" />
                  <span>Responzivni dizajn</span>
                </div>
                <div className="flex items-start">
                  <FaSearch className="text-purple-500 mt-1 mr-2 flex-shrink-0 text-xs" />
                  <span>Osnovna SEO optimizacija</span>
                </div>
                <div className="flex items-start">
                  <FaShieldAlt className="text-red-500 mt-1 mr-2 flex-shrink-0 text-xs" />
                  <span>SSL sertifikat</span>
                </div>
              </div>

              <div className="text-xs text-gray-600">
                <strong>Vreme izrade:</strong> 7-10 dana<br/>
                <strong>Hosting:</strong> 1 godina uključena
              </div>
            </div>

            {/* Profesionalni paket - NAJPOPULARNIJI */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-blue-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-500 to-purple-600 text-white px-4 py-1 rounded-bl-2xl text-xs">
                <span className="font-bold">NAJPOPULARNIJI</span>
              </div>
              
              <div className="mt-4">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  Profesionalni Sajt
                </h3>
                <p className="text-gray-600 mb-4">
                  Kompletno rešenje za ozbiljan biznis
                </p>
                <div className="text-3xl font-bold text-purple-600 mb-4">€1,500</div>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-start">
                    <FaCode className="text-blue-500 mt-1 mr-2 flex-shrink-0 text-xs" />
                    <span>Do 10 stranica</span>
                  </div>
                  <div className="flex items-start">
                    <FaMobile className="text-green-500 mt-1 mr-2 flex-shrink-0 text-xs" />
                    <span>Napredni responzivni dizajn</span>
                  </div>
                  <div className="flex items-start">
                    <FaSearch className="text-purple-500 mt-1 mr-2 flex-shrink-0 text-xs" />
                    <span>Napredna SEO optimizacija</span>
                  </div>
                  <div className="flex items-start">
                    <FaCog className="text-orange-500 mt-1 mr-2 flex-shrink-0 text-xs" />
                    <span>Kontakt forma + Google Maps</span>
                  </div>
                  <div className="flex items-start">
                    <FaShieldAlt className="text-red-500 mt-1 mr-2 flex-shrink-0 text-xs" />
                    <span>SSL + sigurnosna zaštita</span>
                  </div>
                </div>

                <div className="text-xs text-gray-600">
                  <strong>Vreme izrade:</strong> 10-14 dana<br/>
                  <strong>Podrška:</strong> 3 meseca besplatno
                </div>
              </div>
            </div>

            {/* Premium paket */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                Premium Sajt
              </h3>
              <p className="text-gray-600 mb-4">
                Za velike biznise sa specifičnim potrebama
              </p>
              <div className="text-3xl font-bold text-green-600 mb-4">€2,800</div>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-start">
                  <FaCode className="text-blue-500 mt-1 mr-2 flex-shrink-0 text-xs" />
                  <span>Neograničen broj stranica</span>
                </div>
                <div className="flex items-start">
                  <FaCog className="text-purple-500 mt-1 mr-2 flex-shrink-0 text-xs" />
                  <span>CMS za samostalno ažuriranje</span>
                </div>
                <div className="flex items-start">
                  <FaSearch className="text-green-500 mt-1 mr-2 flex-shrink-0 text-xs" />
                  <span>Enterprise SEO optimizacija</span>
                </div>
                <div className="flex items-start">
                  <FaRocket className="text-orange-500 mt-1 mr-2 flex-shrink-0 text-xs" />
                  <span>Maksimalne performanse</span>
                </div>
              </div>

              <div className="text-xs text-gray-600">
                <strong>Vreme izrade:</strong> 14-21 dan<br/>
                <strong>Podrška:</strong> 6 meseci + prioritet
              </div>
            </div>

            {/* Modernizacija i Migracija paket */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 shadow-lg text-white">
              <div className="flex items-center mb-3">
                <FaExchangeAlt className="text-2xl mr-3" />
                <h3 className="text-2xl font-bold">
                  Modernizacija & Migracija
                </h3>
              </div>
              <p className="mb-4 opacity-90">
                Transformacija WordPress sajta u Next.js
              </p>
              <div className="text-3xl font-bold mb-4">€1,200</div>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-start">
                  <FaTools className="text-yellow-300 mt-1 mr-2 flex-shrink-0 text-xs" />
                  <span>Kompletna migracija sadržaja</span>
                </div>
                <div className="flex items-start">
                  <FaRocket className="text-yellow-300 mt-1 mr-2 flex-shrink-0 text-xs" />
                  <span>10x brži sajt</span>
                </div>
                <div className="flex items-start">
                  <FaShieldAlt className="text-yellow-300 mt-1 mr-2 flex-shrink-0 text-xs" />
                  <span>Eliminacija sigurnosnih rizika</span>
                </div>
                <div className="flex items-start">
                  <FaSearch className="text-yellow-300 mt-1 mr-2 flex-shrink-0 text-xs" />
                  <span>Poboljšanje SEO rangiranja</span>
                </div>
                <div className="flex items-start">
                  <FaCog className="text-yellow-300 mt-1 mr-2 flex-shrink-0 text-xs" />
                  <span>Zadržavanje postojećeg dizajna</span>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur rounded-xl p-4 mb-4">
                <h4 className="font-bold mb-2">Zašto migrirati sa WordPress-a?</h4>
                <ul className="text-xs space-y-1 opacity-90">
                  <li>• Eliminacija čestih hakovanja</li>
                  <li>• Prestanak plaćanja skupih plugin-ova</li>
                  <li>• Drastično poboljšanje brzine</li>
                  <li>• Bolje Google rangiranje</li>
                  <li>• Smanjenje troškova održavanja</li>
                </ul>
              </div>

              <div className="text-xs opacity-90">
                <strong>Vreme migracije:</strong> 7-14 dana<br/>
                <strong>Garancija:</strong> Potpuna funkcionalnost
              </div>
            </div>

            {/* CTA sekcija */}
            <div className="bg-gradient-to-r from-gray-600 to-red-600 rounded-2xl p-6 text-white text-center">
              <h4 className="text-xl font-bold mb-3">
                Spremni za digitalni uspeh?
              </h4>
              <p className="mb-4 opacity-90">
                Kontaktirajte nas za besplatnu konsultaciju
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+381641967267"
                  className="block bg-white text-gray-600 font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  📞 +381 64 1967 267
                </a>
                <a
                  href="mailto:manikamwebsolutions@gmail.com"
                  className="block bg-white/20 backdrop-blur text-white font-bold py-3 px-6 rounded-xl hover:bg-white/30 transition-colors"
                </a>
              </div>
            </div>
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
                Naši sajtovi se učitavaju 5-10 puta brže od WordPress sajtova, što direktno utiče na SEO i korisničko iskustvo.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSearch className="text-2xl text-green-600" />
              </div>
              <h4 className="text-xl font-bold mb-3">SEO Optimizacija</h4>
              <p className="text-gray-600">
                Ugrađena SEO optimizacija na nivou koda garantuje bolje rangiranje i veću vidljivost na Google-u.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-2xl text-red-600" />
              </div>
              <h4 className="text-xl font-bold mb-3">Sigurnost</h4>
              <p className="text-gray-600">
                Custom kod i najnoviji sigurnosni standardi štite vaš sajt od hakovanja i malware napada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;