"use client";

import { motion } from "framer-motion";

import Image from "@/node_modules/next/image";
import React from "react";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="absolute inset-0 z-10">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <div className="container mx-auto px-[5px] md:px-4 h-screen flex items-center">
        <div className="">
          <h1 className="relative text-gray-900 mt-[250px] md:mt-0 text-[33px] md:text-6xl xl:text-[80px] z-20">
            Manikam<span className="font-bold text-red-700">Web</span>
            Solutions{" "}
            <span className="text-[21px] md:text-3xl xl:text-[55px] py-2 block xl:py-4">
              mi pomazemo vasem biznisu da raste
            </span>
          </h1>
        </div>
      </div>
      <div className="absolute top-0 z-0 w-full h-screen">
        <Image
          src="/images/laptop.jpg"
          alt="Background image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gray-100 via-gray-100/60 to-transparent" />
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
