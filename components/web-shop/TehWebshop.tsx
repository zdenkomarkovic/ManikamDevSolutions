import React from "react";

const TehWebshop = () => {
  return (
    <div className="mt-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Tehnologije koje koristimo
      </h2>
      <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
        Koristimo najnovije i najpouzdanije tehnologije za razvoj web shopova.
        Naš tech stack garantuje brzinu, sigurnost, skalabilnost i odličnu SEO
        optimizaciju.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h4 className="font-bold text-lg mb-2 text-gray-800">
            Next.js & React
          </h4>
          <p className="text-sm text-gray-600">
            Frontend framework za ultra brze i dinamične web shopove
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h4 className="font-bold text-lg mb-2 text-gray-800">Node.js</h4>
          <p className="text-sm text-gray-600">
            Backend platforma za skalabilne i pouzdane aplikacije
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h4 className="font-bold text-lg mb-2 text-gray-800">
            PostgreSQL / MongoDB
          </h4>
          <p className="text-sm text-gray-600">
            Pouzdane baze podataka za skladištenje svih informacija
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h4 className="font-bold text-lg mb-2 text-gray-800">
            Stripe / PayPal
          </h4>
          <p className="text-sm text-gray-600">
            Sigurni payment gateway-i za sve vrste plaćanja
          </p>
        </div>
      </div>
    </div>
  );
};

export default TehWebshop;
