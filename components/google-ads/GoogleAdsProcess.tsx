export default function GoogleAdsProcess() {
  const steps = [
    {
      number: 1,
      title: "Analiza i Strategija",
      description:
        "Detaljno analiziramo vaš biznis, konkurenciju, ciljnu grupu i postavljamo jasne, merljive ciljeve kampanje.",
    },
    {
      number: 2,
      title: "Istraživanje Ključnih Reči",
      description:
        "Pronalazimo najrelevantnije ključne reči sa najboljim potencijalom za konverziju, analizirajući obim pretrage i konkurenciju.",
    },
    {
      number: 3,
      title: "Kreiranje Kampanje",
      description:
        "Postavljamo kampanju u Google Ads nalogu, kreiramo atraktivne oglase, podešavamo budžet i targetiranje.",
    },
    {
      number: 4,
      title: "Praćenje i Optimizacija",
      description:
        "Dnevno pratimo performanse, testiramo različite verzije oglasa, optimizujemo ponude i kontinuirano unapređujemo rezultate.",
    },
    {
      number: 5,
      title: "Izveštavanje i Analiza",
      description:
        "Mesečno dobijate detaljan izveštaj sa svim ključnim metrikama i našim preporukama za sledeći period.",
    },
  ];

  return (
    <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Naš Proces Rada</h2>

      <ol className="space-y-6">
        {steps.map((step) => (
          <li key={step.number} className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center font-bold">
              {step.number}
            </span>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h4>
              <p className="text-gray-700">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
