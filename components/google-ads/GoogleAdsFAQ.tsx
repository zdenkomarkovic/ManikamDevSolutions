export default function GoogleAdsFAQ() {
  const faqs = [
    {
      question: "Koliki budžet je potreban za Google Ads kampanju?",
      answer:
        "Minimalni preporučeni mesečni budžet zavisi od industrije i konkurencije, ali uglavnom kreće od 300-500 EUR mesečno. Za kompetitivnije oblasti može biti potrebno 1000+ EUR da bi se videli značajni rezultati.",
    },
    {
      question: "Koliko brzo mogu videti rezultate?",
      answer:
        "Prvi rezultati (klikovi i saobraćaj) su vidljivi odmah po pokretanju kampanje. Međutim, za optimalne performanse i najbolji ROI, potrebno je 2-3 meseca kontinuiranog rada i optimizacije.",
    },
    {
      question: "Da li radite samo setup ili i upravljanje kampanjom?",
      answer:
        "Nudimo obe opcije - možemo samo napraviti početni setup kampanje, ili možete angažovati naš tim za kontinuirano upravljanje, optimizaciju i mesečne izveštaje. Većina klijenata bira opciju potpunog upravljanja jer donosi najbolje rezultate.",
    },
    {
      question: "Šta ako kampanja ne donese rezultate?",
      answer:
        "Radimo transparentno i dajemo realne procene. Ako nakon inicijalnog perioda vidimo da rezultati nisu zadovoljavajući, zajedno analiziramo razloge i prilagođavamo strategiju ili budžet. Naš cilj je uvek maksimalan ROI za vaš budžet.",
    },
  ];

  return (
    <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Često Postavljana Pitanja
      </h2>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-l-4 border-orange-500 pl-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {faq.question}
            </h4>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
