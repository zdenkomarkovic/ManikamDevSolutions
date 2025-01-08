"use client";
import React, { useRef } from "react";
import {
  useScroll,
  motion,
  //   useMotionValueEvent,
  useTransform,
} from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";

const Pokusaj = () => {
  const targetRef = useRef(null);
  const { size } = useWindowSize();

  const { scrollY } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  //   useMotionValueEvent(scrollY, "change", () => {
  //     console.log(scrollY.get());
  //   });

  const titleHeight = 1500;

  const cardTimeline = cardData.map((_, i) => {
    const start = titleHeight + i * size.height;
    const end = titleHeight + (i + 1) * size.height;
    return [start, end];
  });

  const timeline = [[0, titleHeight], ...cardTimeline];
  const animation = timeline.map((data, i) => ({
    scale: useTransform(scrollY, data, [1, 0.8]),
    opacity: useTransform(scrollY, data, [1, 0]),
  }));

  return (
    <div ref={targetRef} className="mx-auto container px-4 text-center ">
      <motion.div
        style={{
          scale: animation[0].scale,
          opacity: animation[0].opacity,
          //   height: `${titleHeight}px`,
        }}
        className="h-[500px] sticky top-0"
      >
        <h1 className="text-8xl py-32">naslov</h1>
      </motion.div>
      <div className="">
        {cardData.map((text, i) => {
          return (
            <motion.div
              style={{
                scale: animation[i + 1].scale,
                opacity: animation[i + 1].opacity,
              }}
              key={i}
              className="h-dvh py-20 sticky top-0"
            >
              <Card text={text} />
            </motion.div>
          );
        })}
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
    <div className="bg-green-700 w-[80%]  h-[600px]  mx-auto space-y-10 p-10">
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
