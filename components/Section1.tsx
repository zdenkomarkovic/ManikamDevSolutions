"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";
import { MotionValue } from "@/node_modules/framer-motion/dist/index";
import Image from "@/node_modules/next/image";

type CardData = {
  title: string;
  mim: string;
  img: string;
};
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
  email_button: string;
  email_address: string;
  call_button: string;
};

const Section1 = ({
  cards,
  section,
}: {
  cards: CardData[];
  section: SectionData;
}) => {
  const targetRef = useRef(null);
  const { size } = useWindowSize();

  const { scrollY } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const titleHeight = 1750;

  // Animacije za naslov
  const titleAnimation = {
    scale: useTransform(scrollY, [0, titleHeight], [1, 0.8]),
    opacity: useTransform(scrollY, [0, titleHeight], [1, 0]),
  };

  return (
    <div
      ref={targetRef}
      className=" mx-auto container px-2 md:px-4 text-center py-24"
    >
      <motion.div
        style={{
          scale: titleAnimation.scale,
          opacity: titleAnimation.opacity,
        }}
        className="hidden md:block py-16 sticky top-10  z-20"
      >
        <div className="container px-4 rounded-3xl mx-auto  bg-gradient-to-br from-gray-400 to-white relative z-20  py-8 md:py-16 shadow-xl border-8 border-white text-center ">
          <div className="py-10 px-0 mx-auto relative z-20">
            <h2 className="text-xl italic md:text-5xl pb-8 md:pb-12">
              <div className="">
                {section.title} {section.title3}
                <span className="font-bold bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent">
                  {section.span}
                </span>
              </div>
              <div className="block">{section.title2}</div>
            </h2>
            <a
              href={`tel:${section.phone}`}
              className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-red-900 to-red-700 text-white px-4 md:px-8 py-2 md:py-4 rounded-xl text-base md:text-4xl font-semibold hover:from-red-950 hover:to-red-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
      </motion.div>

      <div>
        {cards.map((text, i) => (
          <AnimatedCard
            key={i}
            index={i}
            text={text}
            animationHeight={animationHeight}
            screenHeight={size.height}
            scrollY={scrollY}
          />
        ))}

        {/* Dodatni sadržaj */}
        <div className="h-[500px] md:h-[700px] md:px-20 py-16 ">
          <div className="sticky top-32 z-20">
            <div className="relative border-8 border-white container mx-auto px-4 rounded-3xl overflow-hidden z-20 bg-gradient-to-br from-gray-400 to-white py-8 md:py-16 shadow-xl text-center">
              <p className="container mx-auto text-center text-xl italic md:text-5xl mb-8 md:mb-12 leading-tight">
                {section.subtitle}
                <span className=" font-bold bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent">
                  {section.span3}
                </span>
                ,{section.subtitle2}
              </p>

              <p className="text-xl italic md:text-4xl mb-8 font-bold  text-center">
                {section.span4} {section.subtitle3}{" "}
                <span className="">{section.span5}</span>
              </p>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
                <a
                  href={`tel:${section.phone}`}
                  className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-red-900 to-red-700 text-white px-4 md:px-8 py-2 md:py-4 rounded-xl text-base md:text-3xl font-semibold hover:from-red-950 hover:to-red-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="block text-lg md:text-2xl font-normal opacity-90">
                    {section.span2}
                  </span>
                </a>

                <a
                  href="mailto:manikamwebsolutions@gmailcom"
                  className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-red-900 to-red-700 text-white px-4 md:px-8 py-2 md:py-4 rounded-xl text-base md:text-3xl font-semibold hover:from-red-950 hover:to-red-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="block text-lg md:text-2xl font-normal opacity-90">
                    {section.email_address}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;

const animationHeight = 1500;
const AnimatedCard = ({
  index,
  text,
  animationHeight,
  screenHeight,
  scrollY,
}: {
  index: number;
  text: { title: string; mim: string; img: string };
  animationHeight: number;
  screenHeight: number;
  scrollY: MotionValue<number>;
}) => {
  const start = animationHeight + index * screenHeight;
  const end = animationHeight + (index + 1) * screenHeight;

  const scale = useTransform(scrollY, [start, end], [1, 0.8]);
  const opacity = useTransform(scrollY, [start, end], [1, 0]);

  return (
    <motion.div
      style={{
        scale,
        opacity,
      }}
      className="h-dvh py-20 sticky top-0"
    >
      <Card text={text} index={index} />
    </motion.div>
  );
};

const Card = ({
  text,
  index,
}: {
  text: { title: string; mim: string; img: string };
  index: number;
}) => {
  return (
    <div className="p-1 md:p-2 bg-white rounded-3xl md:w-[90%] mx-auto">
      <div
        className={`flex flex-col gap-6 pt-7  ${
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        }  justify-between items-center rounded-3xl bg-gray-100   h-[600px] mx-auto p-2 md:p-7`}
      >
        <div className="md:w-[45%] space-y-5 md:space-y-10">
          <h3 className=" text-2xl md:text-3xl xl:text-4xl">{text.title}</h3>
          <p className="">{text.mim}</p>
        </div>
        <div className="relative w-full md:w-[50%] h-full">
          <Image
            src={text.img}
            alt=""
            fill
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};
