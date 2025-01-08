import Cenovnik from "@/components/Cenovnik";
import Hero from "@/components/Hero";
import MiSmoTu from "@/components/mismotu/page";
import Pokusaj from "@/components/Pokusaj";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className=" py-20">
        <Hero />
        <Pokusaj />
        <MiSmoTu />
        <Cenovnik />
      </div>
    </div>
  );
};

export default Home;
