import React from "react";
import Hero from "@/components/Hero";
import Pokusaj from "@/components/Pokusaj";
// import Cenovnik from "@/components/Cenovnik";
// import MiSmoTu from "@/components/mismotu/page";
// import Pokusaj from "@/components/Pokusaj";

const Home = () => {
  return (
    <div>
      <div className="">
        <Hero />
        <Pokusaj />
        {/* <MiSmoTu /> */}
        {/* <Cenovnik /> */}
      </div>
    </div>
  );
};

export default Home;
