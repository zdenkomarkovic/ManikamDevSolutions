export default function GoogleAdsIndustries() {
  const industries = [
    {
      title: "E-commerce",
      description: "Online prodavnice, dropshipping, B2C trgovina",
    },
    {
      title: "Uslužni Sektor",
      description: "Pravnici, konsultanti, agencije, frizeri, majstori",
    },
    {
      title: "Zdravstvo",
      description: "Klinike, ordinacije, wellness centri, fitnes",
    },
    {
      title: "Turizam",
      description: "Agencije, hoteli, rent-a-car, restorani",
    },
    {
      title: "IT & SaaS",
      description: "Softverske kompanije, web aplikacije, SaaS platforme",
    },
    {
      title: "Proizvodnja",
      description: "B2B proizvodnja, veleprodaja, distributeri",
    },
  ];

  return (
    <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Za Koje Industrije Radimo Google Ads Kampanje?
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        {industries.map((industry, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">{industry.title}</h4>
            <p className="text-sm text-gray-600">{industry.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
