"use client";

export default function SoftwareHero() {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-[45px] leading-tight md:text-8xl bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent font-[1000] py-6 md:py-14">
        Izrada Softvera po Meri
      </h1>
      <p className="text-base md:text-2xl text-gray-100 mb-5 md:mb-8 max-w-4xl mx-auto md:first-letter:leading-relaxed">
        Razvijamo custom softverska rešenja koja automatizuju vaše poslovne procese,
        povećavaju efikasnost i omogućavaju rast. Od web i mobilnih aplikacija do
        kompleksnih ERP i CRM sistema - kreiramo softver koji radi za vas.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <span className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 px-4 py-2 rounded-full text-sm font-semibold">
          Custom Software
        </span>
        <span className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 px-4 py-2 rounded-full text-sm font-semibold">
          Web & Mobile Apps
        </span>
        <span className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 px-4 py-2 rounded-full text-sm font-semibold">
          Automatizacija Procesa
        </span>
      </div>
    </div>
  );
}
