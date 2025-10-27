"use client";

import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function SocialMediaPlatforms() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Facebook */}
        <div className="bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <FaFacebook className="text-5xl text-blue-600" />

            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Facebook
            </h3>
          </div>

          <div className="space-y-4">
            <p className="">
              Facebook je najkorišćenija društvena mreža sa{" "}
              <strong>preko 3 milijarde aktivnih korisnika</strong>. Idealna je
              platforma za izgradnju zajednice, komunikaciju sa klijentima i
              precizno targetiranje različitih demografskih grupa.
            </p>

            <h4 className="font-bold text-gray-900">
              Šta radimo na Facebook-u:
            </h4>
            <ul className="space-y-2 ">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Kreiranje i optimizacija Facebook Business stranice</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>
                  Redovno objavljivanje angažujućeg sadržaja (postovi, slike,
                  video)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>
                  Facebook Ads kampanje (Lead Ads, Conversion, Traffic,
                  Engagement)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Facebook Groups upravljanje i moderacija</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Facebook Stories i live video streaming</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Odgovaranje na komentare, poruke i recenzije</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Messenger chatbot integracija za automatizaciju</span>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl p-4 mt-4">
              <p className="font-semibold text-white">
                Facebook je idealan za:
              </p>
              <p className="text-white text-sm mt-2">
                B2C biznise, lokalne kompanije, e-commerce, event marketing,
                community building, customer service i generisanje lead-ova.
              </p>
            </div>
          </div>
        </div>

        {/* Instagram */}
        <div className="bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center">
              <FaInstagram className="text-4xl text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Instagram
            </h3>
          </div>

          <div className="space-y-4">
            <p className="">
              Instagram je vizuelna platforma sa{" "}
              <strong>preko 2 milijarde aktivnih korisnika</strong>, dominantna
              među mlađom publikom (18-34 godine). Idealna je za brendove koji
              se oslanjaju na estetiku, lifestyle proizvode i vizuelno
              pripovedanje priča.
            </p>

            <h4 className="font-bold text-gray-900">
              Šta radimo na Instagram-u:
            </h4>
            <ul className="space-y-2 ">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>
                  Optimizacija Instagram Business profila i bio sekcije
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>
                  Kreiranje profesionalnog feed-a sa konzistentnom estetikom
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>
                  Instagram Stories sa interactive stickers (polls, quiz, Q&A)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Instagram Reels - kratki viralni video sadržaj</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>
                  Instagram Ads kampanje (Feed, Stories, Reels, Explore)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Hashtag research i strategija za organičan doseg</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Influencer marketing i saradnje</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Instagram Shopping i product tagging</span>
              </li>
            </ul>

            <div className="bg-gradient-to-l from-orange-600 to-orange-400 rounded-xl p-4 mt-4">
              <p className="font-semibold text-white">
                Instagram je idealan za:
              </p>
              <p className="text-white text-sm mt-2">
                Fashion, beauty, fitness, food & beverage, travel, lifestyle
                brendove, e-commerce, kreativne industrije i vizuelno
                orijentisane biznise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
