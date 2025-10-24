export default function GoogleAdsTrust() {
  const stats = [
    { number: "10+", label: "Godina Iskustva" },
    { number: "200+", label: "Uspešnih Projekata" },
    { number: "95%", label: "Zadovoljnih Klijenata" },
    { number: "24/7", label: "Podrška" },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50 rounded-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
