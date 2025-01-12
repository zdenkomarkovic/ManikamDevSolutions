import Image from "@/node_modules/next/image";
import React from "react";

const Usluge = () => {
  const class1 =
    " relative w-[49%] md:w-[48%] text-md md:text-xl text-center  bg-white h-[450px] md:h-[500px] p-2 md:p-10 space-y-5 md:space-y-10 hover:text-white hover:bg-gray-800 transition-colors duration-700 rounded-xl pt-[72px] md:pt-24";
  const imageClass =
    "w-[150px] h-[150px] md:w-[200px] md:h-[200px] mx-auto absolute -top-16 md:-top-24 left-0 right-0";

  const h3Class = "text-2xl md:text-3xl font-bold";

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
        <div className="flex justify-between">
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
              Ne prepustite dizajn svog sajta slučaju – dozvolite nam da
              napravimo besplatan demo dizajn sa predlozima koji će vam doneti
              više potencijalnih klijenata! Bićete oduševljeni onim što vidite.
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
            <h3 className={`${h3Class} `}>SAJT KOJI SAMI AZURIRATE</h3>
            <p>
              Moj sajt ne dobija dovoljno poseta? Naš visokokvalitetni SEO pruža
              vam maksimalnu vrednost za uloženi novac. Izbacujemo suvišne
              stvari za maksimalan efekat. Mi to zovemo Pametni SEO.
            </p>
          </div>
        </div>
        <div className="flex justify-between">
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
              Ne prepustite dizajn svog sajta slučaju – dozvolite nam da
              napravimo besplatan demo dizajn sa predlozima koji će vam doneti
              više potencijalnih klijenata! Bićete oduševljeni onim što vidite.
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
            <p>
              Moj sajt ne dobija dovoljno poseta? Naš visokokvalitetni SEO pruža
              vam maksimalnu vrednost za uloženi novac. Izbacujemo suvišne
              stvari za maksimalan efekat. Mi to zovemo Pametni SEO.
            </p>
          </div>
        </div>
        <div className="flex justify-between">
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
              Ne prepustite dizajn svog sajta slučaju – dozvolite nam da
              napravimo besplatan demo dizajn sa predlozima koji će vam doneti
              više potencijalnih klijenata! Bićete oduševljeni onim što vidite.
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
              Moj sajt ne dobija dovoljno poseta? Naš visokokvalitetni SEO pruža
              vam maksimalnu vrednost za uloženi novac. Izbacujemo suvišne
              stvari za maksimalan efekat. Mi to zovemo Pametni SEO.
            </p>
          </div>
        </div>
        <div className="flex justify-between">
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
              Ne prepustite dizajn svog sajta slučaju – dozvolite nam da
              napravimo besplatan demo dizajn sa predlozima koji će vam doneti
              više potencijalnih klijenata! Bićete oduševljeni onim što vidite.
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
              Moj sajt ne dobija dovoljno poseta? Naš visokokvalitetni SEO pruža
              vam maksimalnu vrednost za uloženi novac. Izbacujemo suvišne
              stvari za maksimalan efekat. Mi to zovemo Pametni SEO.
            </p>
          </div>
        </div>
        <div className="flex justify-between">
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
