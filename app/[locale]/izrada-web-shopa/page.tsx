"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const WebShopPage = () => {
  const features = [
    {
      title: "Upravljanje proizvodima",
      description: "Lako dodavanje, editovanje i organizovanje proizvoda sa kategorijama i varijantama",
      icon: "📦"
    },
    {
      title: "Sistem plaćanja",
      description: "Integracija sa PayPal, Stripe, bankarske kartice i pouzeće",
      icon: "💳"
    },
    {
      title: "Upravljanje zalihama",
      description: "Automatsko praćenje zaliha sa upozorenjima i izveštajima",
      icon: "📊"
    },
    {
      title: "Korisnički nalozi",
      description: "Registracija, prijava, istorija kupovina i wishlist",
      icon: "👤"
    },
    {
      title: "Analitika i izveštaji",
      description: "Detaljni izveštaji o prodaji, najpopularnijim proizvodima i kupcima",
      icon: "📈"
    },
    {
      title: "Marketing alati",
      description: "Kuponi, popusti, newsletter integracija i social media povezivanje",
      icon: "🎯"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Analiza i planiranje",
      description: "Detaljno analiziramo vaše potrebe, ciljnu grupu i konkurenciju. Kreiramo strategiju i plan funkcionalnosti koji će najbolje služiti vašem biznisu."
    },
    {
      number: "02", 
      title: "Dizajn i UX/UI",
      description: "Kreiramo atraktivan i funkcionalan dizajn koji odražava vaš brend. Fokus je na korisničkom iskustvu koje vodi ka konverziji."
    },
    {
      number: "03",
      title: "Razvoj i testiranje", 
      description: "Programiramo web shop koristeći najnovije tehnologije. Svaka funkcionalnost se temeljno testira pre lansiranja."
    },
    {
      number: "04",
      title: "Lansiranje i podrška",
      description: "Lansiramo vaš web shop i pružamo obuku za korišćenje. Nudimo kontinuiranu podršku i održavanje."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero sekcija */}
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 h-screen flex items-center">
          <div className="w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gray-900 text-4xl md:text-6xl xl:text-7xl mb-6 relative z-20"
            >
              Izrada <span className="font-bold bg-gradient-to-r from-gray-700 via-red-800 to-red-800 bg-clip-text text-transparent">Web Shopa</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-3xl text-gray-700 mb-8 relative z-20 max-w-4xl"
            >
              Profesionalne online prodavnice koje povećavaju prodaju i pružaju savršeno korisničko iskustvo
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col md:flex-row gap-4 relative z-20"
            >
              <a
                href="tel:+381641967267"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-700 to-red-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-gray-800 hover:to-red-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Pozovite nas
              </a>
              <a
                href="mailto:manikamwebsolutions@gmail.com"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-gray-700 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Pošaljite email
              </a>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute top-0 z-0 w-full h-screen">
          <Image
            src="/images/laptop.jpg"
            alt="Web shop development background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gray-100 via-gray-100/60 to-transparent" />
        </div>
      </div>

      {/* Zašto web shop sekcija */}
      <div className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Zašto vam je potreban <span className="bg-gradient-to-r from-gray-700 via-red-800 to-red-800 bg-clip-text text-transparent">web shop</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              U digitalnom dobu, online prodaja nije opcija - to je neophodnost. Naši web shopovi 
              omogućavaju vašem biznisu da raste 24/7, dosegne nove kupce i poveća prihode.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4">Povećanje prodaje</h3>
              <p className="text-gray-600">
                Web shop omogućava prodaju 24/7 bez ograničenja. Dosegnite kupce iz celog sveta 
                i povećajte prihode do 300%.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4">Ciljana publika</h3>
              <p className="text-gray-600">
                Precizno targetiranje kupaca kroz SEO, društvene mreže i Google oglase. 
                Privucite prave kupce za vaše proizvode.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-4">Analitika i uvidi</h3>
              <p className="text-gray-600">
                Detaljni izveštaji o prodaji, ponašanju kupaca i performansama. 
                Donosite poslovne odluke na osnovu podataka.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Funkcionalnosti sekcija */}
      <div className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Napredne <span className="bg-gradient-to-r from-gray-700 via-red-800 to-red-800 bg-clip-text text-transparent">funkcionalnosti</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Svaki web shop koji kreiramo dolazi sa kompletnim setom funkcionalnosti 
              potrebnih za uspešnu online prodaju.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Proces izrade sekcija */}
      <div className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Naš <span className="bg-gradient-to-r from-gray-700 via-red-800 to-red-800 bg-clip-text text-transparent">proces</span> izrade
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Od ideje do lansiranja - transparentan proces koji osigurava uspeh vašeg web shopa.
            </p>
          </motion.div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                <div className="md:w-1/2">
                  <div className="bg-white p-8 rounded-3xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-red-700 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center">
                    <div className="text-6xl opacity-50">{step.number}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Tehnologije sekcija */}
      <div className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Moderne <span className="bg-gradient-to-r from-gray-700 via-red-800 to-red-800 bg-clip-text text-transparent">tehnologije</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Koristimo najnovije tehnologije <strong>React.js, Node.js i Next.js</strong> za kreiranje 
              brzih, sigurnih i SEO optimizovanih web shopova.
            </p>
            
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 md:p-16 rounded-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-bold text-lg mb-4">Zašto ne WordPress?</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Brže učitavanje stranica</li>
                    <li>• Bolja SEO optimizacija</li>
                    <li>• Veća sigurnost</li>
                    <li>• Skalabilnost</li>
                    <li>• Moderne funkcionalnosti</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-4">Prednosti naših tehnologija</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Server-side rendering za brzinu</li>
                    <li>• Automatska optimizacija slika</li>
                    <li>• Progressive Web App mogućnosti</li>
                    <li>• Najbolje Core Web Vitals rezultate</li>
                    <li>• Mobilno-first pristup</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA sekcija */}
      <div className="py-20 md:py-32 bg-gradient-to-r from-gray-700 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Spremni ste da pokrenete svoj web shop?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Kontaktirajte nas danas za besplatnu konsultaciju i cenovnik prilagođen vašim potrebama. 
              Vaš uspeh u online prodaji počinje ovde!
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+381641967267"
                className="inline-flex items-center gap-3 bg-white text-gray-800 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +381 64 1967 267
              </a>
              <a
                href="mailto:manikamwebsolutions@gmail.com"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                manikamwebsolutions@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WebShopPage;