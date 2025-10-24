"use client";

export default function SoftwareHero() {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Izrada Softvera po Meri
      </h1>
      <p className="text-base md:text-2xl text-gray-700 mb-5 md:mb-8 max-w-4xl mx-auto md:leading-relaxed">
        Razvijamo custom softverska rešenja koja automatizuju vaše poslovne procese,
        povećavaju efikasnost i omogućavaju rast. Od web i mobilnih aplikacija do
        kompleksnih ERP i CRM sistema - kreiramo softver koji radi za vas.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold">
          Custom Software
        </span>
        <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold">
          Web & Mobile Apps
        </span>
        <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold">
          Automatizacija Procesa
        </span>
      </div>
    </div>
  );
}
