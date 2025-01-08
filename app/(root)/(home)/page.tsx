import Cenovnik from "@/components/Cenovnik";
import Hero from "@/components/Hero";
import MiSmoTu from "@/components/mismotu/page";
import Pokusaj from "@/components/Pokusaj";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-20">
        <Hero />
        <Cenovnik />
        <Pokusaj />
        <MiSmoTu />
        <Cenovnik />
      </div>
    </div>
  );
};

export default Home;
