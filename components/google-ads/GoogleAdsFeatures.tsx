export default function GoogleAdsFeatures() {
  const features = [
    {
      title: "Dokazana Stručnost",
      description:
        "Naš tim Google Ads stručnjaka upravlja kampanjama sa budžetima od nekoliko stotina do više hiljada evra mesečno, uvek postižući optimalne rezultate.",
    },
    {
      title: "Transparentno Poslovanje",
      description:
        "Dobijate detaljne mesečne izveštaje sa svim ključnim metrikama - konverzije, trošak po kliku i preporuke za dalje unapređenje kampanja.",
    },
    {
      title: "Individualni Pristup",
      description:
        "Svaka kampanja je prilagođena vašem biznisu, industriji i ciljanoj publici. Ne koristimo šablone - svaki projekat je jedinstven.",
    },
    {
      title: "Kontinuirana Optimizacija",
      description:
        "Vaše kampanje se konstantno prate, testiraju i optimizuju kako bi performanse bile što bolje. A/B testiranje, analiza ključnih reči i prilagođavanje targetiranja su naša svakodnevica.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 text-center md:text-left rounded-2xl p-3 md:p-8 shadow-lg border border-gray-100">
      <h2 className="text-xl md:text-3xl font-extrabold mb-6 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
        Zašto Izabrati Naše Usluge Google Oglašavanja?
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-200 via-gray-50 to-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
