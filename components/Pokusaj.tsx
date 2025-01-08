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

  const titleHeight = 1300;

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
    <div ref={targetRef} className="mx-auto text-center ">
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
          <h1 className="text-4xl pt-[500px]">fdsgasdfgsdfgdf</h1>
          <h1 className="text-4xl ">fdsgasdfgsdfgdf</h1>
          <h1 className="text-4xl ">fdsgasdfgsdfgdf</h1>
          <h1 className="text-4xl ">fdsgasdfgsdfgdf</h1>
          <h1 className="text-4xl ">fdsgasdfgsdfgdf</h1>
        </div>
      </div>
    </div>
  );
};

export default Pokusaj;

const Card = ({ text }) => {
  return (
    <div className="bg-green-700 w-[80%]  h-[600px]  mx-auto ">
      <h2 className="text-8xl">{text.title}</h2>
      <h2 className="text-8xl">{text.mim}</h2>
    </div>
  );
};

const cardData = [
  { title: "mrk ovo ono", mim: "munem" },
  { title: "mrk ovo ono", mim: "munem" },
  { title: "mrk ovo ono", mim: "munem" },
];
