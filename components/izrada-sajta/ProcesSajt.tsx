import React from "react";

const ProcesSajt = () => {
  return (
    <div className="mt-16 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-4 md:p-8 shadow-lg border border-gray-100">
      <h2 className="text-3xl font-extrabold text-center mb-12 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
        Kako izgleda proces izrade sajta?
      </h2>
      <div className="space-y-8">
        <div className="space-y-5">
          <div className="flex gap-6 items-center">
            {" "}
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center text-white font-bold text-xl">
              1
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Inicijalna konsultacija i analiza potreba
            </h3>
          </div>
          <p className="text-gray-600">
            Detaljno razgovaramo o vašim poslovnim ciljevima, ciljnoj grupi i
            funkcionalnostima koje vam trebaju. Analiziramo konkurenciju i
            tržište kako bismo kreirali strategiju koja će vaš sajt izdvojiti.
            Ova faza je ključna jer nam pomaže da razumemo vašu viziju i
            kreiramo sajt koji će doneti rezultate.
          </p>
        </div>
        <div className="space-y-5">
          <div className="flex gap-6 items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center text-white font-bold text-xl">
              2
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Dizajn i prototip
            </h3>
          </div>
          <p className="text-gray-600">
            Kreiramo moderan i funkcionalan dizajn koji odražava identitet vašeg
            brenda. Pravimo wireframe-ove i prototipove kako biste vizualizovali
            kako će sajt izgledati pre nego što počnemo sa razvojem. Usklađujemo
            sve detalje sa vama i vršimo potrebne korekcije dok ne budete
            potpuno zadovoljni.
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex gap-6 items-center">
            {" "}
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center text-white font-bold text-xl">
              3
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Razvoj i programiranje
            </h3>
          </div>
          <p className="text-gray-600">
            Naš tim programera koristi najnovije tehnologije (Next.js, React.js,
            Node.js) za izradu brzog, sigurnog i skalabilnog sajta. Tokom
            razvoja pažljivo integrišemo sve dogovorene funkcionalnosti,
            optimizujemo kod za brzinu i SEO, i redovno vas ažuriramo o napretku
            projekta.
          </p>
        </div>

        <div className="space-y-5">
          {" "}
          <div className="flex gap-6 items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center text-white font-bold text-xl">
              4
            </div>

            <h3 className="text-xl font-bold  bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Testiranje i optimizacija
            </h3>
          </div>
          <p className="text-gray-600">
            Pre lansiranja, detaljno testiramo sajt na različitim uređajima i
            pretraživačima. Proveravamo brzinu učitavanja, funkcionalnost svih
            formi i linkova, SEO postavke, i responsivnost dizajna. Optimizujemo
            slike i kod za maksimalne performanse.
          </p>
        </div>
        <div className="space-y-5">
          <div className="flex gap-6 items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center text-white font-bold text-xl">
              5
            </div>

            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Lansiranje i obuka
            </h3>
          </div>
          <p className="text-gray-600">
            Nakon vašeg odobrenja, sajt lansiramo na željeni hosting i domen.
            Pružamo vam detaljnu obuku za upravljanje sadržajem (ako paket
            uključuje CMS), podešavamo analitiku i alate za praćenje
            performansi. Ostajemo dostupni za podršku i nakon lansiranja.
          </p>
        </div>
        <div className="space-y-5">
          <div className="flex gap-6 items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center text-white font-bold text-xl">
              6
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Održavanje i podrška
            </h3>
          </div>
          <p className="text-gray-600">
            Nudimo redovno održavanje, sigurnosne ažuriranja i tehničku podršku.
            Pratimo performanse sajta i predlažemo poboljšanja. Tu smo da vam
            pomognemo sa bilo kakvim pitanjima ili potrebnim izmenama.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcesSajt;
