"use client";

import Image from "@/node_modules/next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/LocaleContext";
import Link from "next/link";
import heroImg from "../public/images/laptop.jpg";

type SectionData = {
  title: string;
  span: string;
  title2: string;
  title3: string;
  span2: string;
  phone: string;
  subtitle: string;
  span3: string;
  subtitle2: string;
  span4: string;
  subtitle3: string;
  span5: string;
  email_button: string; // Added for email button text
  email_address: string; // Added for email address
  call_button: string; // Added for call button text
};

const Hero = ({ title, section }: { title: string; section: SectionData }) => {
  const { locale } = useLocale();

  // Lokalizovani tekstovi za usluge sa linkovima
  const services =
    locale === "sr"
      ? [
          { text: "Izrada web sajta", href: "/sr/izrada-sajta" },
          { text: "Izrada online prodavnica", href: "/sr/izrada-web-shopa" },
          { text: "Redizajn sajta", href: "/sr/redizajn-migracija" },
          { text: "Google Ads kampanje", href: "/sr/google-oglasavanje" },
          { text: "SEO usluge", href: "/sr/seo-optimizacija" },
          { text: "Marketing društvenih mreža", href: "/sr/drustvene-mreze" },
          { text: "Razvoj softvera", href: "/sr/izrada-softvera" },
        ]
      : [
          { text: "Web Development Services", href: "/en/website-development" },
          { text: "Web Shop Development", href: "/en/webshop-development" },
          { text: "Website Redesign", href: "/en/website-redesign" },
          { text: "Google Ads", href: "/en/google-ads" },
          { text: "SEO Services", href: "/en/seo-optimization" },
          { text: "Social Media Marketing", href: "/en/social-media" },
          { text: "Custom Software", href: "/en/software-development" },
        ];

  const [visibleServices, setVisibleServices] = useState<number[]>([]);

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

    // Dodajemo usluge jednu po jednu sa razlicitim kasnjenjima
    services.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setVisibleServices((prev) => [...prev, index]);
      }, index * 400); // 800ms izmedu svake usluge

      intervals.push(timeout);
    });

    return () => {
      intervals.forEach(clearTimeout);
    };
  }, [services.length]);

  return (
    <div className="relative h-[100dvh] w-full   overflow-hidden">
      <div className="relative container mx-auto px-[5px] md:px-4 h-[100dvh] overflow-hidden">
        {/* H1 naslov - pozicioniran apsolutno */}
        <div className="absolute bottom-8 md:bottom-10 left-4 md:left-16 z-20">
          <h1 className="font-extrabold   flex flex-col gap-4 mb:gap-8  relative  text-[3rem] md:text-[8.5rem] pb-5 md:pb-10">
            <span className="w-fit pt-10 pb-3 md:pb-24 bg-gradient-to-r from-white  to-gray-500 bg-clip-text text-transparent">
              {" "}
              Manikam{" "}
            </span>
            <span className="">
              <span className="w-fit bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent ">
                Web{" "}
              </span>
              <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Solutions{" "}
              </span>
            </span>
          </h1>
          <p className="text-[19px] font-bold md:text-6xl  py-2 pt-3 md:pt-8 text-white">
            {title}
          </p>
          <div className="md:hidden">
            <p className="text-[19px] text-white italic md:text-5xl pb-5 md:pb-12">
              {section.title} {section.title3}
              <span className="font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                {section.span}{" "}
              </span>
              {section.title2}
            </p>
            <a
              href={`tel:${section.phone}`}
              className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-orange-600 to-orange-400 text-white px-4 md:px-8 py-2 md:py-4 rounded-xl text-base md:text-4xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg
                className="w-6 h-6 md:w-8 md:h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {section.span4}
              <span className="text-white text-base md:text-3xl font-normal block">
                {section.span2}
              </span>
            </a>
          </div>
        </div>

        {/* Animacija usluga - pozicionirana apsolutno */}
        <div className="absolute top-28 right-16 z-20 hidden md:block">
          <div className="space-y-3 relative z-20">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: visibleServices.includes(index) ? 1 : 0,
                    x: visibleServices.includes(index) ? 0 : 100,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  style={{ marginLeft: `${index * 20}px` }}
                  className="relative z-20 bg-gradient-to-r from-orange-600 to-transparent text-white text-left font-bold px-3 py-1 rounded-lg w-fit hover:from-orange-500 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  {service.text}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobilna verzija usluga - iznad h1 */}
        <div className="absolute top-24 right-2 z-20 md:hidden">
          <div className="space-y-2">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: visibleServices.includes(index) ? 1 : 0,
                    x: visibleServices.includes(index) ? 0 : 100,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  style={{ marginLeft: `${index * 12}px` }}
                  className="text-sm bg-gradient-to-r from-orange-600 to-gray-600 text-white text-left px-3 py-0.5 rounded-lg w-fit hover:from-orange-500 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  {service.text}
                </motion.div>
              </Link>
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
        <div className="absolute inset-0 bg-black/60 " />
      </div>
    </div>
  );
};

export default Hero;
