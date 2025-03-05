import React from "react";
import Hero from "@/components/Hero";
import Section1 from "@/components/Section1";
import Usluge from "@/components/Usluge";
import Reference from "@/components/Reference";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
        <Section1 />
        <Usluge />
        <Reference />
      </div>
    </div>
  );
};

export default Home;
