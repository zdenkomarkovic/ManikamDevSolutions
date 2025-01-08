import Image from "@/node_modules/next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative ">
      <div className="container mx-auto px-4 h-screen flex items-center">
        <div className="">
          <h1 className="relative text-2xl md:text-6xl z-10">
            Manikam<span className="font-bold text-red-700">Web</span>
            Solutions{" "}
            <span className="text-1xl md:text-3xl block pl-1">
              mi pomazemo vasem biznisu da raste
            </span>
          </h1>
        </div>
      </div>
      <div className="absolute top-0 z-0 w-full h-screen">
        <Image
          src={"/hero.jpg"}
          alt="hero"
          fill
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className=" absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-100/90 to-transparent object-cover"></div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <p>Dobro dosli</p>
<p>
  <span className="font-bold">
    Mi nismo samo agencija za izradu sajtova.
  </span>{" "}
  Nas primarni posao je razvoj kompleksnih web resenja za domace i strane
  investitore, pored toga radimo na jos par projekata koji treba ubrzo da
  ugledaju svetlost dana i budu nasi osnovni proizvodi. Jedan od njih koji
  je gotov i vec uveliko se koristi je{" "}
  <span className="font-bold">Taxi Report</span> - softver koji se
  iznajmljuje na mesecnom nivou omogucava dobijanje raznoraznih izvestaja
  i olaksava vlasnicima vozila kontrolu vozaca.
</p>
<p>
  I drugi deo naseg posla je izrada sajtova, web shopova i SEO
  (optimizacija za pretrazivace)
</p> */
}
