"use client";

import Image from "@/node_modules/next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/LocaleContext";
import heroImg from "../public/images/laptop.jpg";

type HeroProps = {
  title?: string;
};

const Hero = ({ title }: HeroProps) => {
  const locale = useLocale();
  
  // Lokalizovani tekstovi za usluge
  const services = locale === "sr" 
    ? [
        "Izrada web sajta",
        "Izrada web shopa", 
        "Izrada softvera",
        "Google oglasavanje",
        "SEO optimizacija"
      ]
    : [
        "Website Development",
        "Web Shop Development",
        "Software Development", 
        "Google Advertising",
        "SEO Optimization"
      ];

  const [visibleServices, setVisibleServices] = useState<number[]>([]);

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];
    
    // Dodajemo usluge jednu po jednu sa razlicitim kasnjenjima
    services.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setVisibleServices(prev => [...prev, index]);
      }, index * 400); // 800ms izmedu svake usluge
      
      intervals.push(timeout);
    });

    return () => {
      intervals.forEach(clearTimeout);
    };
  }, [services.length]);

  return (
    <div className="relative h-screen w-full bg-white dark:bg-neutral-950">
     <div className="relative container mx-auto px-[5px] md:px-4 h-full">
      {/* H1 naslov - pozicioniran apsolutno */}
      <div className="absolute bottom-10 md:bottom-16 left-10 md:left-24 z-20">
        <h1 className="relative text-gray-900 text-[33px] md:text-6xl xl:text-[80px]">
          Manikam<span className="font-bold text-red-700 block">Web <span className="text-gray-900 font-normal">
          Solutions  </span></span>
         
          <span className="text-[21px] md:text-3xl xl:text-[55px] py-2 block xl:py-4">
            {title}
          </span>
        </h1>
      </div>

      {/* Animacija usluga - pozicionirana apsolutno */}
      <div className="absolute top-20 right-24 z-20 hidden md:block">
        <div className="space-y-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ 
                opacity: visibleServices.includes(index) ? 1 : 0,
                x: visibleServices.includes(index) ? 0 : 100
              }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut"
              }}
              className="md:text-2xl text-gray-900 text-left border border-gray-900 px-4 py-1 rounded-lg w-fit"
            >
              {service}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobilna verzija usluga - iznad h1 */}
      <div className="absolute top-24 right-6 z-20 md:hidden">
        <div className="space-y-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ 
                opacity: visibleServices.includes(index) ? 1 : 0,
                x: visibleServices.includes(index) ? 0 : 100
              }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut"
              }}
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-900 text-left border border-gray-900 px-3 py-1 rounded-lg w-fit"
            >
              {service}
            </motion.div>
          ))}
        </div>
      </div>
      </div>
      <div className="absolute top-0 z-0 w-full h-screen">
        <Image
          src={heroImg}
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