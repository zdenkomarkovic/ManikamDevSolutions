"use client";

const faqs = [
  {
    question: "Koliko dugo traje da se vide rezultati SEO optimizacije?",
    answer:
      "Prva vidljiva poboljšanja se obično pojavljuju nakon 3-6 meseci, dok značajniji rezultati dolaze nakon 6-12 meseci kontinuiranog rada. SEO je dugoročna strategija koja zahteva strpljenje, ali rezultati su trajni i isplativi.",
  },
  {
    question: "Šta je razlika između SEO i Google Ads oglašavanja?",
    answer:
      "SEO je organski način poboljšanja vidljivosti u rezultatima pretrage bez plaćanja po kliku, dok Google Ads predstavlja plaćeno oglašavanje. SEO donosi dugoročne rezultate, dok su Google Ads rezultati trenutni ali prestaju kad prestane plaćanje.",
  },
  {
    question: "Da li garantujete prvu poziciju na Google-u?",
    answer:
      "Ne možemo garantovati tačne pozicije jer Google algoritam konstantno evoluira, ali garantujemo profesionalan pristup, transparentnost i merljiva poboljšanja. Fokusiramo se na povećanje kvalitetnog saobraćaja i konverzija, ne samo na rangiranje.",
  },
  {
    question: "Šta uključa vaš SEO paket?",
    answer:
      "Naši paketi uključuju tehnički SEO audit, on-page optimizaciju, kvalitetan sadržaj, link building, lokalnu SEO optimizaciju, mesečne izveštaje i kontinuiranu podršku. Svaki paket prilagođavamo specifičnim potrebama klijenta.",
  },
  {
    question: "Da li radite lokalni SEO?",
    answer:
      "Da! Specijalizujemo se za lokalni SEO uključujući Google My Business optimizaciju, lokalne citacije, optimizaciju za 'near me' pretrage i upravljanje recenzijama. Ovo je idealno za lokalne biznise koji žele da privuku klijente iz svoje oblasti.",
  },
  {
    question: "Koliko košta SEO optimizacija?",
    answer:
      "Cena zavisi od trenutnog stanja sajta, konkurentnosti industrije i ciljeva. Nudimo različite pakete prilagođene različitim budžetima. Kontaktirajte nas za besplatnu konsultaciju i personalizovanu ponudu.",
  },
  {
    question: "Da li mogu da radim SEO sam?",
    answer:
      "Možete raditi osnovni SEO sami, ali profesionalna SEO optimizacija zahteva duboko poznavanje algoritama, tehničkih aspekata, alata i konstantno praćenje promena. Naš tim ima iskustvo i resurse da postigne rezultate brže i efikasnije.",
  },
  {
    question: "Kako merite uspeh SEO kampanje?",
    answer:
      "Pratimo više metrika: organski saobraćaj, rangiranje ključnih reči, kvalitet posetilaca, konverzije, bounce rate, domain autoritet i ROI. Dostavljamo detaljne mesečne izveštaje sa jasnim objašnjenjima napretka.",
  },
];

export default function SEOFAQ() {
  return (
    <div className="mt-16 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-4 md:p-8 shadow-lg border border-gray-100">
      <h2 className="text-3xl font-extrabold text-center mb-12 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
        Često Postavljana Pitanja
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={index !== faqs.length - 1 ? "border-b border-gray-200 pb-6" : "pb-6"}
          >
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              {faq.question}
            </h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
