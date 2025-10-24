import React from "react";

const IntroSajt = () => {
  return (
    <div className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 text-center md:text-left rounded-2xl p-3 md:p-8 shadow-lg border border-gray-100">
      <h2 className="text-xl md:text-3xl font-extrabold mb-6 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
        Zašto je profesionalan sajt ključan za vaš uspeh?
      </h2>
      <div className="space-y-4">
        <p>
          U digitalnom svetu, vaš sajt je često prvi kontakt sa potencijalnim
          klijentima. Profesionalno izrađen sajt ne samo da predstavlja vaš
          brend, već aktivno radi na privlačenju novih kupaca 24 sata dnevno, 7
          dana u nedelji.
        </p>
        <p>
          <strong>
            Tehnologije koje koristimo - React.js, Node.js i Next.js
          </strong>{" "}
          - nisu slučajan izbor. Ove napredne tehnologije garantuju da će vaš
          sajt biti tehnički superiorniji, brži i bolje optimizovan od
          konkurencije koja koristi WordPress ili druge popularne sajt bildere.
        </p>
        <p>
          Brzina učitavanja sajta direktno utiče na SEO rangiranje i korisničko
          iskustvo. Google favorizuje brze sajtove, što znači bolju poziciju u
          rezultatima pretrage i veću vidljivost za vaš biznis. Naši sajtovi se
          učitavaju za manje od 2 sekunde, što je značajno brže od proseka
          industrije.
        </p>
      </div>
    </div>
  );
};

export default IntroSajt;
