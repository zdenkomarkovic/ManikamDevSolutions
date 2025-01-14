import { uslugeData } from "@/constants/index";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import React from "react";

const class1 =
  " relative  text-md md:text-xl text-center  bg-white h-[450px] md:h-[500px] p-1 md:p-10 space-y-5 md:space-y-10 hover:text-white hover:bg-gray-800 transition-colors duration-700 rounded-3xl pt-[72px] md:pt-24";
const imageClass =
  "w-[150px] h-[150px] md:w-[200px] md:h-[200px] mx-auto absolute -top-16 md:-top-24 left-0 right-0";

const h3Class = "text-[20px] md:text-3xl font-bold";
const Usluge = () => {
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
        <div className="grid grid-cols-2 gap-2 md:gap-10">
          {uslugeData.map((item, i) => {
            return <Card key={i} item={item} i={i} />;
          })}
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

const Card = ({
  item,
  i,
}: {
  item: { img: string; title: string; text: string; span: string };
  i: number;
}) => {
  return (
    <Link href={"/services"}>
      <div
        className={`${class1} ${i === 0 ? "mt-[140px] md:mt-[180px]" : ""} ${
          i !== 0 && (i === 1 || i % 2 === 0) ? "mt-[70px] md:mt-[90px]" : ""
        }`}
      >
        <Image
          src={item.img}
          alt=""
          width={200}
          height={200}
          className={`${imageClass}`}
        />
        <h3 className={`${h3Class}`}>{item.title}</h3>
        <p>
          {item.text} <span className="font-bold">{item.span}</span>
        </p>
      </div>
    </Link>
  );
};
