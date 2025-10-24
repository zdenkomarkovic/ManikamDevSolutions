export default function GoogleAdsServices() {
  const services = [
    {
      title: "Search Kampanje (Pretraživačke Kampanje)",
      description:
        "Najefektivniji način da se pojavite na vrhu Google pretrage kada potencijalni klijenti traže vaše proizvode ili usluge. Naše search kampanje su optimizovane za maksimalnu konverziju uz minimalan trošak. Detaljno istražujemo ključne reči, analiziramo konkurenciju i kreiramo oglase koji privlače klikove i donose prodaju.",
    },
    {
      title: "Display Kampanje (Baneri)",
      description:
        "Povećajte svest o brendu kroz vizuelno privlačne oglase koji se prikazuju na preko 2 miliona sajtova u Google Display mreži. Idealno za remarketing i građenje prepoznatljivosti brenda. Naš dizajn tim kreira profesionalne banere koji privlače pažnju i podstiču akciju.",
    },
    {
      title: "YouTube Oglašavanje",
      description:
        "Video oglašavanje na najvećoj video platformi na svetu. Kreiranje video kampanja koje targetiraju pravu publiku na osnovu demografskih podataka, interesovanja i ponašanja. Proizvodni i montažni tim može kreirati profesionalan video sadržaj po vašoj želji.",
    },
    {
      title: "Shopping Kampanje",
      description:
        "Savršeno rešenje za online prodavnice. Vaši proizvodi se prikazuju direktno u Google pretrazi sa slikom, cenom i nazivom. Optimizujemo vaš product feed, postavljamo konkurentne cene i maksimizujemo broj prodaja kroz Google Shopping oglase.",
    },
    {
      title: "Remarketing Kampanje",
      description:
        "Ponovo dosegnite posetioce koji su već bili na vašem sajtu ali nisu izvršili kupovinu. Remarketing kampanje imaju značajno veću stopu konverzije jer se obraćate ljudima koji već poznaju vaš brend. Kreiramo personalizovane poruke za različite segmente posetilaca.",
    },
  ];

  return (
    <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Naše Usluge Google Oglašavanja
      </h2>

      <div className="space-y-8">
        {services.map((service, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {service.title}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
