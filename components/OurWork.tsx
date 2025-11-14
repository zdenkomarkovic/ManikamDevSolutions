"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

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
    <section className="container mx-auto px-4 md:px-16 py-16 md:py-24 overflow-hidden">
      {/* Heading - Prvi red teksta ide desno */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex justify-end mb-4"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent text-right">
          {title}
        </h2>
      </motion.div>

      {/* Subtitle - Drugi red teksta ide levo */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-start mb-12"
      >
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          {subtitle}
        </p>
      </motion.div>

      {/* Ukoso postavljeni slider */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative"
      >
        {/* Ukošeni container */}
        <div className="transform -rotate-2 md:-rotate-1 hover:rotate-0 transition-transform duration-500">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="ourwork-swiper"
          >
            {works.map((work, index) => (
              <SwiperSlide
                key={index}
                className="!w-[300px] md:!w-[500px] bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm"
              >
                <div className="relative group">
                  {/* Slika */}
                  <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {work.title}
                    </h3>
                    <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {work.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Dekorativni elementi */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-orange-600/10 rounded-full blur-3xl -z-10" />
      </motion.div>

      {/* Custom styles za Swiper pagination */}
      <style jsx global>{`
        .ourwork-swiper {
          padding: 50px 20px;
        }

        .ourwork-swiper .swiper-pagination-bullet {
          background: #f97316;
          opacity: 0.5;
        }

        .ourwork-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: linear-gradient(to right, #ea580c, #f97316);
        }

        .ourwork-swiper .swiper-slide-shadow-left,
        .ourwork-swiper .swiper-slide-shadow-right {
          background-image: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0));
        }
      `}</style>
    </section>
  );
};

export default OurWork;
