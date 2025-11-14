"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

type WorkItem = {
  title: string;
  description: string;
  image: string;
};

type OurWorkProps = {
  title: string;
  subtitle: string;
  works: WorkItem[];
};

const OurWork = ({ title, subtitle, works }: OurWorkProps) => {
  return (
    <section className="w-full py-16 md:py-24 overflow-hidden relative">
      {/* Animated text - gornji red ide DESNO */}
      <div className="mb-8 overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          <h2 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent whitespace-nowrap">
            {title} • {title} • {title} • {title} • {title} • {title} •&nbsp;
          </h2>
          <h2 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent whitespace-nowrap">
            {title} • {title} • {title} • {title} • {title} • {title} •&nbsp;
          </h2>
        </motion.div>
      </div>

      {/* Animated text - donji red ide LEVO */}
      <div className="mb-12 overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          <p className="text-3xl md:text-5xl text-gray-400 font-light whitespace-nowrap">
            {title} • {title} • {title} • {title} • {title} •&nbsp;
          </p>
          <p className="text-3xl md:text-5xl text-gray-400 font-light whitespace-nowrap">
            {title} • {title} • {title} • {title} • {title} •&nbsp;
          </p>
        </motion.div>
      </div>

      {/* Ukošeni slider - desna strana podignuta */}
      <div className="w-full relative">
        {/* Perspektiva container koji diže desnu stranu */}
        <div
          className="w-full"
          style={{
            transform: "perspective(2000px) rotateX(2deg)",
            transformOrigin: "center left",
          }}
        >
          {/* Dodatni transform da se desna strana podigne */}
          <div
            className="w-full transition-transform duration-500 hover:scale-[1.02]"
            style={{
              transform: "skewY(-1deg)",
            }}
          >
            <Swiper
              modules={[Autoplay, FreeMode]}
              spaceBetween={20}
              slidesPerView="auto"
              freeMode={true}
              loop={true}
              speed={8000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: false,
              }}
              className="ourwork-slider"
            >
              {[...works, ...works].map((work, index) => (
                <SwiperSlide
                  key={`${work.title}-${index}`}
                  className="!w-[350px] md:!w-[500px]"
                >
                  <div className="relative group h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl">
                    {/* Slika */}
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Text overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {work.title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {work.description}
                      </p>
                    </div>

                    {/* Orange accent border */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Dekorativni blur elementi */}
        <div className="absolute -top-20 right-0 w-60 h-60 bg-orange-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-20 left-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl -z-10" />
      </div>

      {/* Custom CSS za slider */}
      <style jsx global>{`
        .ourwork-slider {
          padding: 20px 0;
        }

        .ourwork-slider .swiper-wrapper {
          transition-timing-function: linear !important;
        }

        .ourwork-slider .swiper-slide {
          height: auto;
        }
      `}</style>
    </section>
  );
};

export default OurWork;
