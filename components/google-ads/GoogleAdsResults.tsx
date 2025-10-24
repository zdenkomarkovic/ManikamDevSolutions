export default function GoogleAdsResults() {
  const results = [
    "Prosečno povećanje konverzija za 150-300% u prvih 6 meseci",
    "Smanjenje troška po konverziji za 30-50% kroz kontinuiranu optimizaciju",
    "ROI (povrat investicije) od 300% do 800% zavisno od industrije",
    "Prosečan Quality Score oglasa 8/10, što znači niže troškove i bolje pozicije",
  ];

  return (
    <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Rezultati koje Postižemo
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Kroz godine rada sa klijentima iz različitih industrija - od e-commerce sajtova,
        preko IT kompanija, do turističkih agencija i proizvođača - konstantno postižemo
        izvanredne rezultate:
      </p>

      <ul className="space-y-3 text-gray-700">
        {results.map((result, index) => (
          <li key={index} className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>{result}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
