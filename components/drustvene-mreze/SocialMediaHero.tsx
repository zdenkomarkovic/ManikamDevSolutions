"use client";

export default function SocialMediaHero() {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Upravljanje Društvenim Mrežama
      </h1>
      <p className="text-base md:text-2xl text-gray-700 mb-5 md:mb-8 max-w-4xl mx-auto md:leading-relaxed">
        Profesionalno upravljanje Facebook i Instagram profilima. Kreiramo sadržaj koji privlači,
        oglašavamo vaš brend i gradimo lojalnu zajednicu oko vašeg biznisa. Povećajte angažman,
        doseg i prodaju preko društvenih mreža.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold">
          Facebook Marketing
        </span>
        <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold">
          Instagram Marketing
        </span>
        <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold">
          Povećanje Angažmana
        </span>
      </div>
    </div>
  );
}
