import React from "react";
import type { Metadata } from "next";
import WebShopComponent from "@/components/WebShopComponent";

export const metadata: Metadata = {
  title: "Izrada web shopa - Online prodavnica | Manikam Web Solutions",
  description: "Profesionalna izrada web shopova i online prodavnica. E-commerce rešenja prilagođena vašem biznisu. Integrisano plaćanje, upravljanje zalihama, SEO optimizacija.",
  keywords: [
    "izrada web shopa",
    "online prodavnica",
    "e-commerce",
    "web shop",
    "internet prodavnica",
    "online trgovina",
    "prodaja online",
    "elektronska trgovina"
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
    <div className="pt-20 md:py-20 space-y-10">
      <div className="container px-2 md:px-4 mx-auto space-y-5 md:space-y-20">
        <div className="md:px-32 py-4 text-base md:text-[22px] mx-auto space-y-8">
          <h1 className="text-center text-3xl md:text-6xl md:pb-20">
            Izrada web shopa i online prodavnica
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="md:hidden">
              <p className="first-letter:pl-6">
                Specijalizovani smo za <strong>izradu web shopova</strong> koji donose rezultate. 
                Koristimo najnovije tehnologije <span className="font-bold">React.js, Node.js i Next.js</span> 
                za kreiranje brzih, sigurnih i SEO optimizovanih online prodavnica. Naši web shopovi 
                nisu samo lepi - oni su dizajnirani da povećaju prodaju i poboljšaju korisničko iskustvo.
              </p>
            </div>
            
            <WebShopComponent />
            
            <div className="md:space-y-20">
              <p className="first-letter:pl-6 hidden md:block">
                Specijalizovani smo za <strong>izradu web shopova</strong> koji donose rezultate. 
                Koristimo najnovije tehnologije <span className="font-bold">React.js, Node.js i Next.js</span> 
                za kreiranje brzih, sigurnih i SEO optimizovanih online prodavnica. Naši web shopovi 
                nisu samo lepi - oni su dizajnirani da povećaju prodaju i poboljšaju korisničko iskustvo.
              </p>
              
              <p className="first-letter:pl-6">
                Svaki web shop koji kreiramo je potpuno prilagođen vašim potrebama. Od jednostavnih 
                kataloga proizvoda do kompleksnih B2B platformi, pružamo kompletna e-commerce rešenja 
                koja rastu sa vašim biznisom.
              </p>
            </div>
          </div>

          {/* Detaljne sekcije */}
          <div className="space-y-16 md:space-y-24 mt-16">
            {/* Zašto izabrati naš web shop */}
            <section>
              <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
                Zašto izabrati naše web shop rešenje?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-semibold">Napredne funkcionalnosti</h3>
                  <p>
                    Naši web shopovi dolaze sa svim potrebnim funkcionalnostima za uspešnu online prodaju: 
                    upravljanje zalihama, različiti načini plaćanja, praćenje porudžbina, sistem popusta, 
                    wishlist, poređenje proizvoda i mnogo više.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-semibold">Mobilno optimizovano</h3>
                  <p>
                    Više od 60% online kupovina se vrši sa mobilnih uređaja. Naši web shopovi su 
                    potpuno responzivni i optimizovani za sve uređaje, što osigurava savršeno 
                    korisničko iskustvo bez obzira na veličinu ekrana.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-semibold">SEO optimizacija</h3>
                  <p>
                    Svaki web shop kreiramo sa fokusom na SEO optimizaciju. Brze stranice, 
                    optimizovane slike, strukturirani podaci i tehnička SEO optimizacija 
                    osiguravaju bolju vidljivost u pretraživačima.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-semibold">Sigurnost i pouzdanost</h3>
                  <p>
                    Implementiramo najnovije sigurnosne standarde, SSL sertifikate, sigurno 
                    plaćanje i redovne backup-ove. Vaši podaci i podaci vaših kupaca su 
                    potpuno zaštićeni.
                  </p>
                </div>
              </div>
            </section>

            {/* Funkcionalnosti */}
            <section className="bg-gray-50 p-8 md:p-16 rounded-3xl">
              <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
                Ključne funkcionalnosti naših web shopova
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <h4 className="font-semibold text-lg">Upravljanje proizvodima</h4>
                  <p className="text-sm">Lako dodavanje, editovanje i organizovanje proizvoda sa kategorijama i varijantama</p>
                </div>
                <div className="text-center space-y-3">
                  <h4 className="font-semibold text-lg">Sistem plaćanja</h4>
                  <p className="text-sm">Integracija sa PayPal, Stripe, bankarske kartice i pouzeće</p>
                </div>
                <div className="text-center space-y-3">
                  <h4 className="font-semibold text-lg">Upravljanje zalihama</h4>
                  <p className="text-sm">Automatsko praćenje zaliha sa upozorenjima i izveštajima</p>
                </div>
                <div className="text-center space-y-3">
                  <h4 className="font-semibold text-lg">Korisnički nalozi</h4>
                  <p className="text-sm">Registracija, prijava, istorija kupovina i wishlist</p>
                </div>
                <div className="text-center space-y-3">
                  <h4 className="font-semibold text-lg">Analitika i izveštaji</h4>
                  <p className="text-sm">Detaljni izveštaji o prodaji, najpopularnijim proizvodima i kupcima</p>
                </div>
                <div className="text-center space-y-3">
                  <h4 className="font-semibold text-lg">Marketing alati</h4>
                  <p className="text-sm">Kuponi, popusti, newsletter integracija i social media povezivanje</p>
                </div>
              </div>
            </section>

            {/* Proces izrade */}
            <section>
              <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
                Naš proces izrade web shopa
              </h2>
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/4 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                    <h4 className="font-semibold">Analiza i planiranje</h4>
                  </div>
                  <div className="md:w-3/4">
                    <p>Detaljno analiziramo vaše potrebe, ciljnu grupu i konkurenciju. Kreiramo strategiju i plan funkcionalnosti koji će najbolje služiti vašem biznisu.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
                  <div className="md:w-1/4 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                    <h4 className="font-semibold">Dizajn i UX/UI</h4>
                  </div>
                  <div className="md:w-3/4">
                    <p>Kreiramo atraktivan i funkcionalan dizajn koji odražava vaš brend. Fokus je na korisničkom iskustvu koje vodi ka konverziji.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/4 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                    <h4 className="font-semibold">Razvoj i testiranje</h4>
                  </div>
                  <div className="md:w-3/4">
                    <p>Programiramo web shop koristeći najnovije tehnologije. Svaka funkcionalnost se temeljno testira pre lansiranja.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
                  <div className="md:w-1/4 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                    <h4 className="font-semibold">Lansiranje i podrška</h4>
                  </div>
                  <div className="md:w-3/4">
                    <p>Lansiramo vaš web shop i pružamo obuku za korišćenje. Nudimo kontinuiranu podršku i održavanje.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SEO optimizacija */}
            <section className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 md:p-16 rounded-3xl">
              <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
                SEO optimizacija za web shopove
              </h2>
              <p className="text-center mb-8 text-lg">
                Naši web shopovi su optimizovani za pretraživače od prvog dana
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4">Tehnička SEO optimizacija</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Brze stranice (Core Web Vitals optimizacija)</li>
                    <li>• Mobilno optimizovane stranice</li>
                    <li>• SSL sertifikat i HTTPS</li>
                    <li>• XML sitemap i robots.txt</li>
                    <li>• Strukturirani podaci (Schema markup)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-4">Content SEO optimizacija</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Optimizovani naslovi i meta opisi</li>
                    <li>• SEO friendly URL struktura</li>
                    <li>• Optimizovane slike sa alt tekstovima</li>
                    <li>• Interna linkovanja</li>
                    <li>• Rich snippets za proizvode</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA sekcija */}
            <section className="text-center bg-gradient-to-r from-gray-700 to-red-700 text-white p-8 md:p-16 rounded-3xl">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                Spremni ste da pokrenete svoj web shop?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Kontaktirajte nas danas za besplatnu konsultaciju i cenovnik prilagođen vašim potrebama
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+381641967267"
                  className="inline-flex items-center gap-3 bg-white text-gray-800 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Pozovite nas
                </a>
                <a
                  href="mailto:manikamwebsolutions@gmail.com"
                  className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Pošaljite email
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;