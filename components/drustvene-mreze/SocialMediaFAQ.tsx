"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Koliko često treba objavljivati sadržaj na Facebook i Instagram?",
    answer:
      "Preporučujemo minimum 3-5 puta nedeljno na Facebook-u i 4-7 puta nedeljno na Instagram-u (uključujući Stories). Konzistentnost je ključna - bolje je redovno objavljivati kvalitetan sadržaj nego sporadično objavljivati veliku količinu. Instagram Reels i Stories mogu se koristiti češće jer imaju kraći životni vek.",
  },
  {
    question: "Koliko traje da se vide rezultati na društvenim mrežama?",
    answer:
      "Prvi vidljivi rezultati (rast pratilaca, povećan angažman) obično dolaze nakon 1-3 meseca konzistentnog rada. Značajniji rezultati kao što su povećane konverzije i prodaja dolaze nakon 3-6 meseci. Social media marketing je maraton, ne sprint - potrebno je vreme da izgradite angažovanu zajednicu i etablirate brend.",
  },
  {
    question: "Da li je potreban budžet za plaćeno oglašavanje?",
    answer:
      "Dok je moguće postići rezultate i sa organskim sadržajem, plaćeno oglašavanje značajno ubrzava rast. Organski doseg na Facebook-u i Instagram-u je drastično opao (obično 1-6% vaših pratilaca vidi organsku objavu). Preporučujemo mesečni oglasni budžet od minimum 100-200€ za male biznise, 300-500€ za srednje i 500€+ za velike biznise.",
  },
  {
    question: "Šta je razlika između organskog i plaćenog sadržaja?",
    answer:
      "Organski sadržaj je sve što objavite bez plaćanja - vidljiv je vašim pratiocima i može se pojaviti u Explore/Discover sekcijama. Plaćeni sadržaj (reklame) omogućava vam da targetirate specifičnu publiku koja možda ne prati vaš profil, ali odgovara vašoj buyer personi. Najbolji rezultati dolaze kombinovanjem oba pristupa.",
  },
  {
    question: "Da li mogu sam da upravljam svojim društvenim mrežama?",
    answer:
      "Možete, ali profesionalno upravljanje zahteva značajno vreme, kreativne veštine (dizajn, copywriting, video editing), poznavanje algoritama, advertising platformi, analytics alata i konstantno praćenje trendova. Većina vlasnika biznisa nema vreme ni resurse za kvalitetno upravljanje društvenim mrežama pored vođenja biznisa. Mi imamo tim specijalista i alate koji garantuju rezultate.",
  },
  {
    question: "Kako merite uspeh na društvenim mrežama?",
    answer:
      "Pratimo više metrika: rast pratilaca, engagement rate (lajkovi, komentari, deljenja, čuvanja), reach i impressions, click-through rate (CTR), website traffic sa društvenih mreža, lead generisanje, konverzije i ROI na reklamne kampanje. Fokusiramo se na metrike koje direktno utiču na vaš biznis, ne samo na taštine metrike (vanity metrics).",
  },
  {
    question: "Da li radite i sa drugim platformama osim Facebook i Instagram?",
    answer:
      "Naša primarna specijalizacija su Facebook i Instagram jer su to najkorišćenije platforme u Srbiji i regionu sa najvećim potencijalom za većinu biznisa. Ove dve platforme pokrivaju širok spektar demografskih grupa i industrija. Za specifične potrebe možemo razmotriti i druge platforme u dogovoru sa klijentom.",
  },
  {
    question: "Šta ako nisam zadovoljan sadržajem?",
    answer:
      "Pre svake objave šaljemo vam sadržaj na odobrenje. Imate mogućnost da tražite izmene i prilagođavanja dok ne budete potpuno zadovoljni. Radimo revizije sve dok sadržaj ne bude savršen. Takođe, nakon prvog meseca saradnje upoznajemo vaš brend i ton komunikacije, što rezultira sadržajem koji u potpunosti odgovara vašoj viziji.",
  },
];

export default function SocialMediaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
        Često Postavljana Pitanja
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="font-semibold text-gray-900 pr-4">
                {faq.question}
              </span>
              <FaChevronDown
                className={`text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
