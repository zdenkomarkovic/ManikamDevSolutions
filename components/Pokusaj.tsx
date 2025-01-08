"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";

const Pokusaj = () => {
  const targetRef = useRef(null);
  const { size } = useWindowSize();

  const { scrollY } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const titleHeight = 1500;

  // Napravi niz koji sadrži sve transformacije unapred
  const animations = cardData.map((_, i) => {
    const start = titleHeight + i * size.height;
    const end = titleHeight + (i + 1) * size.height;

    return {
      scale: useTransform(scrollY, [start, end], [1, 0.8]),
      opacity: useTransform(scrollY, [start, end], [1, 0]),
    };
  });

  // Dodajemo i transformacije za naslov
  const titleAnimation = {
    scale: useTransform(scrollY, [0, titleHeight], [1, 0.8]),
    opacity: useTransform(scrollY, [0, titleHeight], [1, 0]),
  };

  return (
    <div ref={targetRef} className="mx-auto container px-4 text-center">
      {/* Naslov */}
      <motion.div
        style={{
          scale: titleAnimation.scale,
          opacity: titleAnimation.opacity,
        }}
        className="h-[500px] sticky top-0"
      >
        <h1 className="text-8xl py-32">naslov</h1>
      </motion.div>

      {/* Karte */}
      <div>
        {cardData.map((text, i) => {
          const animation = animations[i]; // Dohvatamo odgovarajuću animaciju
          return (
            <motion.div
              key={i}
              style={{
                scale: animation.scale,
                opacity: animation.opacity,
              }}
              className="h-dvh py-20 sticky top-0"
            >
              <Card text={text} />
            </motion.div>
          );
        })}

        {/* Dodatni sadržaj */}
        <div className="h-[1000px]">
          <h1 className="text-4xl pt-[500px]">
            Mnogi mali biznisi potcenjuju vrednost svojih veb-sajtova, što
            dovodi do gubitka prilika vrednih miliona.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Pokusaj;

const Card = ({ text }) => {
  return (
    <div className="bg-green-700 w-[80%] h-[600px] mx-auto space-y-10 p-10">
      <h2 className="text-8xl">{text.title}</h2>
      <h2 className="text-3xl">{text.mim}</h2>
    </div>
  );
};

interface CardData {
  title: string;
  mim: string;
}

const cardData: CardData[] = [
  {
    title: "mrk ovo ono",
    mim: "Naša misija je da budemo najkul igrači u svetu veba. Pravimo sajtove tako privlačne da ćete poželeti da ih oženite, uz usluge tako povoljne da možete zadržati svoju drugu hipoteku.",
  },
  {
    title: "mrk ovo ono",
    mim: "Najbolji deo? Pobrinemo se da vaš sajt postane magnet za mušterije koje ne mogu da odole vašem šarmu. Dakle, ako ste mali ili srednji biznis koji želi da izgleda sjajno, bude lako pronađen i vlada online džunglom, mi smo tim za vas!",
  },
  { title: "mrk ovo ono", mim: "munem" },
];
