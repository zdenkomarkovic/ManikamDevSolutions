import React from "react";

const HeroWebshop = () => {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-4xl md:text-8xl bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent font-[1000] py-6 md:py-14">
        Izrada Web Shopa
      </h1>
      <p className="text-base md:text-2xl text-gray-100 mb-5 md:mb-8 max-w-4xl mx-auto md:first-letter:leading-relaxed">
        Transformišite svoj biznis sa profesionalnom online prodavnicom koja
        radi 24/7. Kreiramo e-commerce rešenja koja povećavaju prodaju i
        automatizuju vaš posao.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <span className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 px-4 py-2 rounded-full text-sm font-semibold">
          E-commerce Eksperti
        </span>
        <span className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 px-4 py-2 rounded-full text-sm font-semibold">
          Integrisano Plaćanje
        </span>
        <span className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 px-4 py-2 rounded-full text-sm font-semibold">
          SEO Optimizovano
        </span>
      </div>
    </div>
  );
};

export default HeroWebshop;
