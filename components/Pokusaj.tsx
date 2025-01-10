"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";
import { MotionValue } from "@/node_modules/framer-motion/dist/index";
import Image from "@/node_modules/next/image";

const Pokusaj = () => {
  const targetRef = useRef(null);
  const { size } = useWindowSize();

  const { scrollY } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const titleHeight = 1700;

  // Animacije za naslov
  const titleAnimation = {
    scale: useTransform(scrollY, [0, titleHeight], [1, 0.8]),
    opacity: useTransform(scrollY, [0, titleHeight], [1, 0]),
  };

  return (
    <div ref={targetRef} className="mx-auto container px-2 md:px-4 text-center">
      {/* Naslov */}
      <motion.div
        style={{
          scale: titleAnimation.scale,
          opacity: titleAnimation.opacity,
        }}
        className="h-[600px] sticky  top-10"
      >
        <h2 className="text-[33px] md:text-6xl xl:text-[80px] py-40">
          Mozemo vam pomoci da ostvarite veci{" "}
          <span className="text-red-700">uspeh</span> preko interneta
        </h2>
      </motion.div>

      {/* Karte */}
      <div>
        {cardData.map((text, i) => (
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
        <div className="h-[1000px] space-y-20">
          <p className="text-2xl xl:text-6xl pt-[500px]">
            Mnogi mali biznisi potcenjuju vrednost svojih{" "}
            <span className="font-bold text-red-700">veb-sajtova</span>, što
            dovodi do gubitka prilika velikih vrednosti.
          </p>
          <p className="text-3xl md:text-7xl">
            <span className=" text-red-700 font-bold">Nemojte</span> biti jedni
            od njih<span className="text-red-700 font-bold">!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pokusaj;

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

// Komponenta za sadržaj kartice
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
          <p className="text-xl">{text.mim}</p>
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

interface CardData {
  title: string;
  mim: string;
  img: string;
}

const cardData: CardData[] = [
  {
    title: "Vaš sajt ne generiše dovoljno potencijalnih klijenata?",
    mim: "Ne prepustite dizajn svog sajta slučaju – dozvolite nam da napravimo besplatan demo dizajn sa predlozima koji će vam doneti više potencijalnih klijenata! Bićete oduševljeni onim što vidite.",
    img: "/images/hero2.jpg",
  },
  {
    title: "Moj sajt ne dobija dovoljno poseta?",
    mim: "Najbolji deo? Pobrinemo se da vaš sajt postane magnet za mušterije koje ne mogu da odole vašem šarmu. Dakle, ako ste mali ili srednji biznis koji želi da izgleda sjajno, bude lako pronađen i vlada online džunglom, mi smo tim za vas!",
    img: "/images/hero.jpg",
  },
  {
    title: "Moj sajt ne dobija dovoljno poseta?",
    mim: "Naš visokokvalitetni SEO pruža vam maksimalnu vrednost za uloženi novac. Izbacujemo suvišne stvari za maksimalan efekat. Mi to zovemo Pametni SEO.",
    img: "/images/sijalica.jpg",
  },
  {
    title:
      "Niste sigurni koga da angažujete za unapređenje vaše online prisutnosti?",
    mim: "Imamo stotine recenzija sa 5 zvezdica. Svakog meseca zakazujemo 250 sastanaka za naš prodajni tim koristeći oglase, SEO i dobre stope konverzije. Omogućavamo vam da nas isprobate besplatno. Ne odlučujte na osnovu emocija, već na osnovu podataka.",
    img: "/images/kljuc.jpg",
  },
  {
    title: "Moji marketing i prodajni podaci nisu povezani?",
    mim: "Naše digitalno oglašavanje je kao espresso za vaš brend – pružiće vam energiju i pažnju potrebnu da nadmašite konkurenciju.",
    img: "/images/planeta.jpg",
  },
];
