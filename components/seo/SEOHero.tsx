"use client";

export default function SEOHero() {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-[45 px] leading-tight md:text-8xl bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent font-[1000] py-6 md:py-14">
        SEO Optimizacija
      </h1>
      <p className="text-base md:text-2xl text-gray-100 mb-5 md:mb-8 max-w-4xl mx-auto md:first-letter:leading-relaxed">
        Povećajte vidljivost vašeg sajta na Google-u. Profesionalna SEO
        optimizacija koja donosi organsku posećenost i privlači ciljanu publiku.
        Dugoročna strategija za rast vašeg online biznisa.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <span className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 px-4 py-2 rounded-full text-sm font-semibold">
          Organski Rast
        </span>
        <span className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 px-4 py-2 rounded-full text-sm font-semibold">
          Bolje Rangiranje
        </span>
        <span className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 px-4 py-2 rounded-full text-sm font-semibold">
          Veća Konverzija
        </span>
      </div>
    </div>
  );
}
