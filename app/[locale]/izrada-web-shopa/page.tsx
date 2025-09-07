import React from "react";
import type { Metadata } from "next";
import { FaShoppingCart, FaCreditCard, FaChartLine, FaMobile, FaLock, FaCog } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Izrada Web Shopa - Profesionalne Online Prodavnice | Manikam Web Solutions",
  description: "Profesionalna izrada web shopova i e-commerce rešenja. Kompletne online prodavnice sa integrisanim plaćanjem, upravljanjem zalihama, SEO optimizacijom i mobilnom prilagodbom za maksimalne rezultate.",
  keywords: [
    "izrada web shopa",
    "online prodavnica",
    "e-commerce",
    "web shop",
    "internet prodavnica",
    "online trgovina",
    "e-commerce rešenja",
    "web shop development",
    "online store",
    "digitalna prodavnica"
  ],
  alternates: {
    canonical: "https://manikamwebsolutions.com/sr/izrada-web-shopa",
    languages: {
      sr: "https://manikamwebsolutions.com/sr/izrada-web-shopa",
      en: "https://manikamwebsolutions.com/en/webshop-development",
    },
  },
};

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero sekcija */}
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Izrada Web Shopa
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transformišite svoj biznis sa profesionalnom online prodavnicom koja radi 24/7. 
            Kreiramo e-commerce rešenja koja povećavaju prodaju i automatizuju vaš posao.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              E-commerce Eksperti
            </span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
              Integrisano Plaćanje
            </span>
            <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold">
              SEO Optimizovano
            </span>
          </div>
        </div>
      </div>

      {/* Glavna sekcija sa sadržajem */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Leva kolona - Tekst */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Zašto je web shop ključan za vaš uspeh?
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  U digitalnom dobu, online prodavnica nije luksuz već neophodnost. Vaši konkurenti već prodaju online 24 sata dnevno, 
                  7 dana u nedelji. Web shop vam omogućava da dosegnete kupce širom sveta, povećate prihode i automatizujete prodajni proces.
                </p>
                <p>
                  Naši web shopovi nisu samo digitalne prodavnice - to su moćni poslovni alati koji transformišu način na koji vodite biznis. 
                  Sa naprednim funkcionalnostima za upravljanje zalihama, automatskim procesiranjem porudžbina i detaljnim analitikama, 
                  vaš web shop postaje srce vašeg digitalnog poslovanja.
                </p>
                <p>
                  Koristimo najnovije tehnologije poput React.js i Next.js koje garantuju brzinu, sigurnost i odličnu poziciju na Google pretraživačima. 
                  Za razliku od WordPress ili drugih template rešenja, naši custom web shopovi su optimizovani za performanse i SEO od prvog dana.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Šta čini naše web shopove posebnim?
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Mobilna optimizacija:</strong> Preko 60% kupovina se vrši sa mobilnih uređaja. Naši web shopovi su potpuno responzivni 
                  i pružaju savršeno korisničko iskustvo na svim uređajima.
                </p>
                <p>
                  <strong>Brzina učitavanja:</strong> Svaka sekunda kašnjenja košta vas kupce. Naši web shopovi se učitavaju za manje od 3 sekunde, 
                  što značajno povećava konverzije.
                </p>
                <p>
                  <strong>SEO optimizacija:</strong> Vaš web shop mora biti pronađen. Implementiramo napredne SEO tehnike koje osiguravaju 
                  visoku poziciju na Google pretraživačima i više organskog saobraćaja.
                </p>
                <p>
                  <strong>Sigurnost:</strong> SSL sertifikati, sigurno čuvanje podataka i PCI DSS kompatibilnost garantuju bezbednost 
                  vaših kupaca i njihovih finansijskih informacija.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Rezultati koje možete očekivati
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaChartLine className="mr-3 text-yellow-300" />
                  Povećanje prodaje za 40-60% u prvoj godini
                </li>
                <li className="flex items-center">
                  <FaShoppingCart className="mr-3 text-yellow-300" />
                  Automatizacija 80% prodajnih procesa
                </li>
                <li className="flex items-center">
                  <FaMobile className="mr-3 text-yellow-300" />
                  Pristup globalnom tržištu 24/7
                </li>
                <li className="flex items-center">
                  <FaCog className="mr-3 text-yellow-300" />
                  Smanjenje operativnih troškova za 30%
                </li>
              </ul>
            </div>
          </div>

          {/* Desna kolona - 3 Paketa */}
          <div className="lg:sticky lg:top-24 space-y-6">
            
            {/* Osnovni paket */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                Osnovni Web Shop
              </h3>
              <p className="text-gray-600 mb-4">
                Idealno za manje biznise koji počinju online prodaju
              </p>
              <div className="text-3xl font-bold text-blue-600 mb-4">€1,200</div>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-start">
                  <FaShoppingCart className="text-blue-500 mt-1 mr-2 flex-shrink-0 text-xs" />
                  <span>Do 50 proizvoda</span>
                </div>
                <div className="flex items-start">
                  <FaCreditCard className="text-green-500 mt-1 mr-2 flex-shrink-0 text-xs" />
                  <span>Osnovno plaćanje (kartice, pouzeće)</span>
                </div>
                <div className="flex items-start">
                  <FaMobile className="text-orange-500 mt-1 mr-2 flex-shrink-0 text-xs" />
                  <span>Mobilna optimizacija</span>
                </div>
                <div className="flex items-start">
                  <FaLock className="text-red-500 mt-1 mr-2 flex-shrink-0 text-xs" />
                  <span>SSL sertifikat</span>
                </div>
              </div>

              <div className="text-xs text-gray-600 mb-4">
                <strong>Vreme izrade:</strong> 10-14 dana<br/>
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
                  Profesionalni Web Shop
                </h3>
                <p className="text-gray-600 mb-4">
                  Kompletno e-commerce rešenje za ozbiljan biznis
                </p>
                <div className="text-3xl font-bold text-purple-600 mb-4">€2,500</div>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-start">
                    <FaShoppingCart className="text-blue-500 mt-1 mr-2 flex-shrink-0 text-xs" />
                    <span>Neograničen broj proizvoda</span>
                  </div>
                  <div className="flex items-start">
                    <FaCreditCard className="text-green-500 mt-1 mr-2 flex-shrink-0 text-xs" />
                    <span>Sva plaćanja (kartice, PayPal, banke)</span>
                  </div>
                  <div className="flex items-start">
                    <FaCog className="text-purple-500 mt-1 mr-2 flex-shrink-0 text-xs" />
                    <span>Upravljanje zalihama</span>
                  </div>
                  <div className="flex items-start">
                    <FaMobile className="text-orange-500 mt-1 mr-2 flex-shrink-0 text-xs" />
                    <span>Napredna mobilna optimizacija</span>
                  </div>
                  <div className="flex items-start">
                    <FaChartLine className="text-indigo-500 mt-1 mr-2 flex-shrink-0 text-xs" />
                    <span>Analytics i izveštaji</span>
                  </div>
                </div>

                <div className="text-xs text-gray-600 mb-4">
                  <strong>Vreme izrade:</strong> 14-21 dan<br/>
                  <strong>Podrška:</strong> 3 meseca besplatno
                </div>
              </div>
            </div>

            {/* Premium paket */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-2">
                Premium Web Shop
              </h3>
              <p className="mb-4 opacity-90">
                Enterprise rešenje sa naprednim funkcionalnostima
              </p>
              <div className="text-3xl font-bold mb-4">€4,500</div>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-start">
                  <FaShoppingCart className="text-yellow-300 mt-1 mr-2 flex-shrink-0 text-xs" />
                  <span>Neograničeno + Multi-store</span>
                </div>
                <div className="flex items-start">
                  <FaCreditCard className="text-yellow-300 mt-1 mr-2 flex-shrink-0 text-xs" />
                  <span>Sva plaćanja + Kriptovalute</span>
                </div>
                <div className="flex items-start">
                  <FaCog className="text-yellow-300 mt-1 mr-2 flex-shrink-0 text-xs" />
                  <span>AI preporuke proizvoda</span>
                </div>
                <div className="flex items-start">
                  <FaChartLine className="text-yellow-300 mt-1 mr-2 flex-shrink-0 text-xs" />
                  <span>Napredna analitika + CRM</span>
                </div>
                <div className="flex items-start">
                  <FaLock className="text-yellow-300 mt-1 mr-2 flex-shrink-0 text-xs" />
                  <span>Enterprise sigurnost</span>
                </div>
              </div>

              <div className="text-xs opacity-90 mb-4">
                <strong>Vreme izrade:</strong> 21-30 dana<br/>
                <strong>Podrška:</strong> 6 meseci + prioritet
              </div>
            </div>

            {/* CTA sekcija */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center">
              <h4 className="text-xl font-bold mb-3">
                Spremni za digitalni uspeh?
              </h4>
              <p className="mb-4 opacity-90">
                Kontaktirajte nas za besplatnu konsultaciju
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+381641967267"
                  className="block bg-white text-blue-600 font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  📞 +381 64 1967 267
                </a>
                <a
                  href="mailto:manikamwebsolutions@gmail.com"
                  className="block bg-white/20 backdrop-blur text-white font-bold py-3 px-6 rounded-xl hover:bg-white/30 transition-colors"
                >
                  ✉️ manikamwebsolutions@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Dodatna sekcija sa benefitima */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaChartLine className="text-2xl text-blue-600" />
            </div>
            <h4 className="text-xl font-bold mb-3">Povećanje Prodaje</h4>
            <p className="text-gray-600">
              Naši klijenti u proseku povećaju prodaju za 40-60% u prvoj godini rada web shopa.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCog className="text-2xl text-green-600" />
            </div>
            <h4 className="text-xl font-bold mb-3">Automatizacija</h4>
            <p className="text-gray-600">
              Automatski procesi za porudžbine, fakturisanje i upravljanje zalihama štede vreme i novac.
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
      </div>
    </div>
  );
};

export default page;