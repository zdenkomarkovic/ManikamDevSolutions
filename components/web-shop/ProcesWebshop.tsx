import React from "react";

const ProcesWebshop = () => {
  return (
    <div className="mt-16 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-5 md:p-8 shadow-lg border border-gray-100">
      <h2 className="text-3xl font-extrabold text-center mb-12 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
        Kako izgleda proces izrade web shopa?
      </h2>
      <div className="space-y-8">
        <div className="space-y-5">
          <div className="flex gap-6 items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center text-white font-bold text-xl">
              1
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Analiza i Planiranje
            </h3>
          </div>
          <p className="text-gray-600">
            Detaljno analiziramo vaše potrebe, ciljnu grupu, konkurenciju i
            poslovne ciljeve. Kreiramo strategiju za vaš web shop koja
            uključuje izbor proizvoda, cenovnu politiku, marketing strategiju
            i plan za implementaciju svih potrebnih funkcionalnosti.
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex gap-6 items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center text-white font-bold text-xl">
              2
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Dizajn i UX/UI
            </h3>
          </div>
          <p className="text-gray-600">
            Kreiramo moderan, funkcionalan i konverzioni dizajn. Dizajn web
            shopa mora biti intuitivan, lako se navigirati i optimizovan za
            konverziju posetilaca u kupce. Fokusiramo se na korisničko
            iskustvo koje vodi do kupovine.
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex gap-6 items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center text-white font-bold text-xl">
              3
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Razvoj i Integracije
            </h3>
          </div>
          <p className="text-gray-600">
            Koristimo najnovije e-commerce tehnologije za razvoj vašeg web
            shopa. Integrišemo sve potrebne sisteme: payment gateway, kurirske
            službe, CRM, email marketing, analitiku i druge third-party
            servise. Implementiramo sve dogovorene funkcionalnosti.
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex gap-6 items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center text-white font-bold text-xl">
              4
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Unos Proizvoda i Sadržaja
            </h3>
          </div>
          <p className="text-gray-600">
            Pomažemo vam u unosu proizvoda, kategorija, opisa, slika i svih
            potrebnih informacija. Optimizujemo sadržaj za SEO i konverzije.
            Možete sami dodavati proizvode kroz intuitivan admin panel ili
            možemo to uraditi za vas.
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex gap-6 items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center text-white font-bold text-xl">
              5
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Testiranje i Optimizacija
            </h3>
          </div>
          <p className="text-gray-600">
            Detaljno testiramo sve funkcionalnosti: proces kupovine, plaćanje,
            dostavu, email notifikacije, mobilnu verziju. Optimizujemo brzinu
            učitavanja, proveravamo sigurnost i testiramo na različitim
            uređajima i pretraživačima.
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex gap-6 items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center text-white font-bold text-xl">
              6
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Lansiranje i Obuka
            </h3>
          </div>
          <p className="text-gray-600">
            Lansiramo vaš web shop, podešavamo Google Analytics, Search Console
            i druge alate za praćenje. Obučavamo vas za rad sa admin panelom,
            upravljanje porudžbinama, proizvodima i svim ostalim funkcijama.
            Pružamo podršku nakon lansiranja.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcesWebshop;
