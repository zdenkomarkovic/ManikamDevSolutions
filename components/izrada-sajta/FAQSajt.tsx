import React from "react";

const FAQSajt = () => {
  return (
    <div className="mt-16 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-8 shadow-lg border border-gray-100">
      <h2 className="text-3xl font-extrabold text-center mb-12 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
        Često postavljana pitanja o izradi sajtova
      </h2>
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Koliko traje proces izrade sajta?
          </h3>
          <p className="text-gray-600">
            Vreme izrade zavisi od izabranog paketa i složenosti projekta.
            Osnovni sajt izrađujemo za 7-10 dana, profesionalni i premium paketi
            obično traju 10-14 dana. Za složenije projekte sa custom
            funkcionalnostima, rok može biti duži. Tokom inicijalne konsultacije
            dajemo vam precizan vremenski okvir za vaš projekat.
          </p>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Da li moram da imam tehničko znanje da upravljam sajtom?
          </h3>
          <p className="text-gray-600">
            Ne, nije potrebno tehničko znanje. Ako izaberete paket sa CMS
            sistemom (Profesionalni ili Premium), dobićete intuitivan sistem za
            upravljanje sadržajem i detaljnu obuku. Moći ćete da menjate
            tekstove, slike i osnovne elemente bez potrebe za programiranjem. Za
            složenije izmene, naš tim je uvek dostupan za pomoć.
          </p>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Šta je uključeno u hosting i koliko košta nakon prve godine?
          </h3>
          <p className="text-gray-600">
            Prva godina hostinga je uključena u cenu svih naših paketa. Hosting
            uključuje SSD prostor, SSL sertifikat, redovne backup-e i tehničku
            podršku.
          </p>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Zašto je Next.js bolji izbor od WordPress-a?
          </h3>
          <p className="text-gray-600">
            Next.js nudi superiorne performanse sa brzinom učitavanja do 10 puta
            većom od WordPress-a. Sigurnost je znatno bolja jer nema plugin-ova
            koji su čest cilj hakera. SEO optimizacija je ugrađena na nivou koda
            što garantuje bolje rangiranje. Takođe, ne plaćate skupe premium
            plugin-ove koji su često neophodni za WordPress. Naši Next.js
            sajtovi se lakše održavaju i skaliraju sa rastom vašeg poslovanja.
          </p>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Da li mogu da migriram postojeći WordPress sajt na Next.js?
          </h3>
          <p className="text-gray-600">
            Apsolutno! Nudimo specijalizovanu uslugu modernizacije i migracije
            WordPress sajtova na Next.js platformu. Migriramo celokupan sadržaj,
            optimizujemo slike, poboljšavamo SEO, i dodatno ubrzavamo
            performanse. Većina klijenata primeti poboljšanje Google rangiranja
            za 50-80% nakon migracije, uz dramatično povećanje brzine sajta.
          </p>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Šta ako mi treba dodatna funkcionalnost koja nije navedena u
            paketima?
          </h3>
          <p className="text-gray-600">
            Svi naši paketi su prilagodljivi i možemo dodati custom
            funkcionalnosti prema vašim potrebama. To može uključivati
            rezervacione sisteme, integraciju sa eksternim API-jima, custom
            forme, kalkulator cena, članarine, galerije, blog sistem i mnogo
            više. Tokom konzultacije ćemo razgovarati o vašim potrebama i dati
            precenu za dodatne funkcionalnosti.
          </p>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Da li je sajt prilagođen za mobilne telefone?
          </h3>
          <p className="text-gray-600">
            Da, svi naši sajtovi su potpuno responzivni i savršeno se
            prilagođavaju svim uređajima - od mobilnih telefona do desktop
            računara. Više od 60% korisnika danas koristi mobilne uređaje za
            pretragu interneta, zato je mobilna optimizacija jedna od naših
            prioriteta. Sajt će se brzo učitavati i biti lak za korišćenje bez
            obzira na veličinu ekrana.
          </p>
        </div>

        <div className="pb-6">
          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Kako SEO optimizacija pomaže mom biznisu?
          </h3>
          <p className="text-gray-600">
            SEO optimizacija je ključna za vidljivost na Google-u i drugim
            pretraživačima. Kvalitetna SEO optimizacija donosi organsku
            besplatnu posetu vašem sajtu od ljudi koji aktivno traže vaše
            proizvode ili usluge. To znači više potencijalnih klijenata bez
            troškova plaćenog oglašavanja. Naši sajtovi imaju ugrađenu SEO
            optimizaciju koja uključuje meta tagove, strukturirane podatke,
            optimizaciju brzine, mobilnu prilagodljivost i Core Web Vitals - sve
            faktore koje Google koristi za rangiranje.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQSajt;
