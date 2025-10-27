import React from "react";
import {
  FaShoppingCart,
  FaCreditCard,
  FaBoxes,
  FaTruck,
  FaUserFriends,
  FaChartLine,
  FaSearch,
  FaBell,
  FaMobile,
} from "react-icons/fa";

const FeaturesWebshop = () => {
  return (
    <div className="mt-16 bg-gradient-to-br from-gray-900 via-gray-700 to-orange-600 rounded-2xl p-8 shadow-lg border border-gray-100">
      <div className="flex justify-center mb-8">
        <h2 className="text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
          Ključne funkcionalnosti našeg web shopa
        </h2>
      </div>
      <p className="text-center text-gray-100 mb-12 max-w-3xl mx-auto">
        Naša platforma obuhvata sve što vam je potrebno za uspešan online
        biznis. Svaka funkcionalnost je pažljivo dizajnirana da pruži najbolje
        iskustvo kako vama tako i vašim kupcima.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-2">
            <FaShoppingCart className="text-2xl text-orange-600" />
            <h3 className="text-lg font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Katalog Proizvoda
            </h3>
          </div>
          <p className="text-sm">
            Neograničen broj proizvoda sa kategorijama, filterima, varijantama
            (veličine, boje), galerijom slika i detaljnim opisima. Podrška za
            virtuelne i digitalne proizvode.
          </p>
        </div>

        <div className="p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-2">
            <FaCreditCard className="text-2xl text-orange-600" />
            <h3 className="text-lg font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Sistemi Plaćanja
            </h3>
          </div>
          <p className="text-sm">
            Integracija sa svim popularnim gateway-ima: kartice (Visa,
            MasterCard), PayPal, bankarske uplate, pouzeće. Sigurno i brzo
            procesiranje svih transakcija.
          </p>
        </div>

        <div className="p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-2">
            <FaBoxes className="text-2xl text-orange-600" />
            <h3 className="text-lg font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Upravljanje Zalihama
            </h3>
          </div>
          <p className="text-sm">
            Automatsko praćenje stanja zaliha, notifikacije kada je zaliha pri
            kraju, upravljanje varijantama proizvoda i skladišnim lokacijama.
          </p>
        </div>

        <div className="p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-2">
            <FaTruck className="text-2xl text-orange-600" />
            <h3 className="text-lg font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Dostava i Logistika
            </h3>
          </div>
          <p className="text-sm">
            Integracija sa kurirskim službama (Post Express, AKS, BEX),
            automatsko kreiranje nalepnica, praćenje pošiljki i kalkulacija
            troškova dostave.
          </p>
        </div>

        <div className="p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-2">
            <FaUserFriends className="text-2xl text-orange-600" />
            <h3 className="text-lg font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Korisnički Nalozi
            </h3>
          </div>
          <p className="text-sm">
            Registracija i prijava kupaca, history porudžbina, wish liste,
            sačuvane adrese, praćenje statusa narudžbina u realnom vremenu.
          </p>
        </div>

        <div className="p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-2">
            <FaChartLine className="text-2xl text-orange-600" />
            <h3 className="text-lg font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Analitika i Izveštaji
            </h3>
          </div>
          <p className="text-sm">
            Detaljni izveštaji o prodaji, najprodavaniji proizvodi, analiza
            korisničkog ponašanja, konverzije, napuštene korpe i ROI praćenje.
          </p>
        </div>

        <div className="p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-2">
            <FaSearch className="text-2xl text-orange-600" />
            <h3 className="text-lg font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              SEO Optimizacija
            </h3>
          </div>
          <p className="text-sm">
            Ugrađena SEO optimizacija za sve stranice, meta tagovi za proizvode,
            rich snippets, sitemap, optimizovane URL strukture i schema markup.
          </p>
        </div>

        <div className="p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-2">
            <FaBell className="text-2xl text-orange-600" />
            <h3 className="text-lg font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Email Notifikacije
            </h3>
          </div>
          <p className="text-sm">
            Automatski emailovi za potvrde porudžbina, promene statusa, tracking
            informacije, newsletter kampanje i personalizovane ponude.
          </p>
        </div>

        <div className="p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-2">
            <FaMobile className="text-2xl text-orange-600" />
            <h3 className="text-lg font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Mobilna Aplikacija
            </h3>
          </div>
          <p className="text-sm">
            Opciono: Native mobilne aplikacije za iOS i Android sa push
            notifikacijama, QR skeniranjem i offline mogućnostima.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesWebshop;
