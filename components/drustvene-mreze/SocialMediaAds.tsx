"use client";

import { FaBullseye, FaDollarSign, FaChartBar, FaCrosshairs } from "react-icons/fa";

export default function SocialMediaAds() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">
        Facebook i Instagram Oglašavanje
      </h2>
      <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto">
        Plaćeno oglašavanje na društvenim mrežama omogućava vam da dosegnete tačno onu
        publiku koja je zainteresovana za vaš proizvod ili uslugu.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaBullseye className="text-2xl text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3">Precizno Targetiranje</h3>
          <p className="text-gray-600">
            Targetirajte po demografiji, interesovanjima, ponašanju, lokaciji i
            custom audiences.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaDollarSign className="text-2xl text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3">Kontrola Budžeta</h3>
          <p className="text-gray-600">
            Postavite dnevni ili mesečni budžet. Plaćate samo za rezultate koje želite.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaChartBar className="text-2xl text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3">Merljivi Rezultati</h3>
          <p className="text-gray-600">
            Detaljne analytics - tačno znate koliko ste potrošili i šta ste dobili.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaCrosshairs className="text-2xl text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3">Retargeting</h3>
          <p className="text-gray-600">
            Ponovo dosegnite posetioce sajta ili one koji su već angažovani sa vašim sadržajem.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-800 text-center md:text-left">
          Tipovi Reklamnih Kampanja
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                FB
              </span>
              Facebook Ads Kampanje
            </h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Lead Generation Ads</strong> - prikupljanje email adresa i kontakt informacija</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Traffic Ads</strong> - slanje posetilaca na vaš sajt ili landing page</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Engagement Ads</strong> - povećanje lajkova, komentara, deljenja</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Conversion Ads</strong> - direktna prodaja proizvoda ili usluga</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Video Views Ads</strong> - promovisanje video sadržaja</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Page Likes Ads</strong> - rast broja pratilaca stranice</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center text-sm">
                IG
              </span>
              Instagram Ads Kampanje
            </h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Feed Ads</strong> - reklame u glavnom Instagram feed-u</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Stories Ads</strong> - full-screen vertikalne reklame između Stories</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Reels Ads</strong> - reklame u Instagram Reels (viralni video format)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Explore Ads</strong> - reklame u Explore sekciji</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Shopping Ads</strong> - direktna prodaja proizvoda preko Instagram Shopping</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Carousel Ads</strong> - višestruke slike/video u jednoj reklami</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl text-white">
          <p className="font-semibold mb-2">💡 Savet za uspešne kampanje:</p>
          <p className="text-sm opacity-90">
            Najbolji rezultati se postižu kombinovanjem organskog sadržaja i plaćenog oglašavanja.
            Redovno objavljujte kvalitetan sadržaj, gradite angažovanu publiku, a zatim koristite
            reklame da pojačate doseg i targetirate nove potencijalne kupce.
          </p>
        </div>
      </div>
    </div>
  );
}
