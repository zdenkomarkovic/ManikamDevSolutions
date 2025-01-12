import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import React from "react";
import { Button } from "./ui/button";

const Usluge = () => {
  const class1 =
    " relative  text-md md:text-xl text-center  bg-white h-[450px] md:h-[500px] p-1 md:p-10 space-y-5 md:space-y-10 hover:text-white hover:bg-gray-800 transition-colors duration-700 rounded-xl pt-[72px] md:pt-24";
  const imageClass =
    "w-[150px] h-[150px] md:w-[200px] md:h-[200px] mx-auto absolute -top-16 md:-top-24 left-0 right-0";

  const h3Class = "text-[20px] md:text-3xl font-bold";

  return (
    <div className=" top container px-2 md:px-4 mx-auto my-20 relative md:flex justify-around ">
      <div
        className={`md:w-[35%] h-[500px] rounded-xl  px-5 pt-9 sticky top-10 md:top-20 flex flex-col gap-12 hover:scale-110 transition-transform duration-500 `}
      >
        <h2 className="text-[33px] md:text-6xl text-center">NASE USLUGE</h2>
        <div>
          <Image
            src={"/images/nik-MAgPyHRO0AA-unsplash.jpg"}
            alt="usluge"
            width={300}
            height={200}
            priority
            className="mx-auto rotate-90 md:rotate-0 rounded-xl py-10 md:py-0 w-[350px] h-auto object-cover"
          />
        </div>
      </div>
      <div className={` relative z-10 md:w-[50%] bg-gray-100/75 `}>
        <div className="grid grid-cols-2 gap-2 md:gap-3">
          <div className={`${class1} mt mt-40 md:mt-64`}>
            <Image
              src={"/11434263_4706355.svg"}
              alt=""
              width={200}
              height={200}
              className={`${imageClass}`}
            />
            <h3 className={`${h3Class}`}>SAJT</h3>
            <p>
              U ponudi imamo osnovnu verziju sajta do 10 stranica, koja
              zadovoljava potrebe i prilicno zahtevnih klijenata, ali ako
              klijent ima specificne zelje i potrebe radimo napredna custom
              resenja.
            </p>
            <Link href={"/services"} className=" ">
              <Button className="bg-gray-800 text-gray-100 px-3 py-[6px] rounded-md ">
                Saznajte vise...
              </Button>
            </Link>
          </div>
          <div className={`${class1} mt-20 md:mt-32`}>
            <Image
              src={"/11434263_4706355.svg"}
              alt=""
              width={200}
              height={200}
              className={`${imageClass}`}
            />
            <h3 className={`${h3Class} `}>SAJT KOJI SAMI AZURIRATE</h3>
            <p>
              CMS Content Manager System je vrsta sajta gde korisnik ima pristup
              azuriranju stranica, moze da dodaje i da brise stranice i kontent.
              Pogodno za blogove i portale
            </p>
            <p>
              <Link href={"/services"} className=" ">
                <Button className="bg-gray-800 hover:bg-gray-200 text-gray-100 hover:text-gray-800 px-3 py-[6px] rounded-md ">
                  Saznajte vise...
                </Button>
              </Link>
            </p>
          </div>
          <div className={`${class1} mt-20 md:mt-32`}>
            <Image
              src={"/11434263_4706355.svg"}
              alt=""
              width={200}
              height={200}
              className={`${imageClass}`}
            />
            <h3 className={`${h3Class}`}>ONLINE PRODAVNICA</h3>
            <p>
              Custom pravljene online prodavnice omogucavaju prikaz kakav je bas
              potreban za odredjenu grupu proizvoda uz mogucnost dodatnih
              podesavanja. Najbolji su izbor za online prodaju
            </p>
          </div>
          <div className={`${class1}`}>
            <Image
              src={"/11434263_4706355.svg"}
              alt=""
              width={200}
              height={200}
              className={`${imageClass}`}
            />
            <h3 className={`${h3Class}`}>SEO</h3>
            <p>Vas sajt ne dobija dovoljno poseta?</p>
            <p>
              Mi imamo resenje za vas! Naš visokokvalitetni SEO resava vasu
              poziciju u pretrazi.
            </p>
          </div>

          <div className={`${class1} mt-20 md:mt-32`}>
            <Image
              src={"/11434263_4706355.svg"}
              alt=""
              width={200}
              height={200}
              className={`${imageClass}`}
            />
            <h3 className={`${h3Class}`}>ODRZAVANJE</h3>
            <p>
              Posle nekog vremena svakom sajtu je potrebno odrzavanje.
              Tehnologije napreduju velikom brzinom i mora se ici u korak sa
              tehnologijama, da bi sve radilo kako treba.
            </p>
          </div>
          <div className={`${class1}`}>
            <Image
              src={"/11434263_4706355.svg"}
              alt=""
              width={200}
              height={200}
              className={`${imageClass}`}
            />
            <h3 className={`${h3Class}`}>TRANZICIJA SAJTA</h3>
            <p>
              Iz nekog razloga zelite da promenite hosting provajdera. Nas tim
              ce premestiti vas sajt kod provajdera kog odaberete
            </p>
          </div>
          <div className={`${class1} mt-20 md:mt-32`}>
            <Image
              src={"/11434263_4706355.svg"}
              alt=""
              width={200}
              height={200}
              className={`${imageClass}`}
            />
            <h3 className={`${h3Class}`}>REDIZAJN SAJTA</h3>
            <p>
              Ukoliko je vas sajt pravljen pre par godina verovatno je vreme za
              njegov redizajn. Redizajn se radi uglavnom sa zadrzavanjem vecine
              kontenta, ali uklopljeno na moderniji nacin.
            </p>
          </div>
          <div className={`${class1}`}>
            <Image
              src={"/11434263_4706355.svg"}
              alt=""
              width={200}
              height={200}
              className={`${imageClass}`}
            />
            <h3 className={`${h3Class}`}>KONSALTING</h3>
            <p>
              Niste sigurni sta je vama potrebno. Zakazite sastanak, rado cemo
              vam prezentovati sta mozemo da uradimo za vas.
            </p>
          </div>

          <div className={`${class1} mt-20 md:mt-32`}>
            <Image
              src={"/11434263_4706355.svg"}
              alt=""
              width={200}
              height={200}
              className={`${imageClass}`}
            />
            <h3 className={`${h3Class}`}>HOSTING</h3>
            <p>
              U saradnji sa nasim partnerima omogucavamo hosting i domene za
              sajtove uradjene ili redizajnirane kod nas
            </p>
          </div>
          <div className={`${class1}`}>
            <Image
              src={"/11434263_4706355.svg"}
              alt=""
              width={200}
              height={200}
              className={`${imageClass}`}
            />
            <h3 className={`${h3Class}`}>GOOGLE OGLASAVANJE</h3>
            <p>
              Naše digitalno oglašavanje je kao espresso za vaš brend – pružiće
              vam energiju i pažnju potrebnu da nadmašite konkurenciju.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usluge;

// Moj sajt ne dobija dovoljno poseta? Naš visokokvalitetni SEO pruža
// vam maksimalnu vrednost za uloženi novac. Izbacujemo suvišne
// stvari za maksimalan efekat. Mi to zovemo Pametni SEO.

// Ne prepustite dizajn svog sajta slučaju – dozvolite nam da
//               napravimo besplatan demo dizajn sa predlozima koji će vam doneti
//               više potencijalnih klijenata! Bićete oduševljeni onim što vidite.
