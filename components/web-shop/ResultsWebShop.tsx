import React from "react";

const ResultsWebShop = () => {
  return (
    <div className="space-y-8">
      {" "}
      <div className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 text-center md:text-left rounded-2xl p-3 md:p-8 shadow-lg border border-gray-100">
        <div className="flex justify-center mb-6">
          <h3 className="text-xl md:text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Šta čini naše web shopove posebnim?
          </h3>
        </div>
        <div className="space-y-4">
          <p>
            <strong>Mobilna optimizacija:</strong> Preko 60% kupovina se vrši sa
            mobilnih uređaja. Naši web shopovi su potpuno responzivni i pružaju
            savršeno korisničko iskustvo na svim uređajima.
          </p>
          <p>
            <strong>Brzina učitavanja:</strong> Svaka sekunda kašnjenja košta
            vas kupce. Naši web shopovi se učitavaju za manje od 3 sekunde, što
            značajno povećava konverzije.
          </p>
          <p>
            <strong>SEO optimizacija:</strong> Vaš web shop mora biti pronađen.
            Implementiramo napredne SEO tehnike koje osiguravaju visoku poziciju
            na Google pretraživačima i više organskog saobraćaja.
          </p>
          <p>
            <strong>Sigurnost:</strong> SSL sertifikati, sigurno čuvanje
            podataka i PCI DSS kompatibilnost garantuju bezbednost vaših kupaca
            i njihovih finansijskih informacija.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsWebShop;
