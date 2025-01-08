import Image from "@/node_modules/next/image";
import React from "react";
import HeroImg from "../public/bg.jpg";

const BgImage = () => {
  return (
    <div className="relative flex justify-center ">
      <Image
        src={HeroImg}
        alt="Vinarija Davidović"
        className="top-0 left-0 w-[100vw] h-[100dvh] object-cover absolute z-0"
      />
    </div>
  );
};

export default BgImage;
