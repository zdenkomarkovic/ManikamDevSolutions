"use client";
import Image from "@/node_modules/next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const MiSmoTu = () => {
  return (
    <div className=" container px-4 mx-auto my-20 relative flex ">
      <div
        className={`w-[500px] h-[500px] bg-gray-200 shadow-lg p-5 sticky top-16`}
      >
        <h2 className="text-4xl">
          Mi smo tu da vam pomognemo da da ostvarite veci{" "}
          <span className="text-red-700">uspeh</span> preko interneta
        </h2>
      </div>
      <div className={` relative z-10 w-full pl-auto text-2xl `}>
        <div className="flex justify-end">
          <div className="  w-[20%] p-5 space-y-5 hover:text-gray-100 hover:bg-gray-800 mt-40">
            <Image
              src={"/11434263_4706355.svg"}
              alt=""
              width={200}
              height={200}
            />
            <h3 className="text-xl">
              Vaš sajt ne generiše dovoljno potencijalnih klijenata?
            </h3>
            <p>
              Ne prepustite dizajn svog sajta slučaju – dozvolite nam da
              napravimo besplatan demo dizajn sa predlozima koji će vam doneti
              više potencijalnih klijenata! Bićete oduševljeni onim što vidite.
            </p>
          </div>
          <div className="w-[20%] p-5 space-y-5 mt-60">
            <Image
              src={"/11434263_4706355.svg"}
              alt=""
              width={200}
              height={200}
            />
            <h3>Moj sajt ne dobija dovoljno poseta?</h3>
            <p>
              Moj sajt ne dobija dovoljno poseta? Naš visokokvalitetni SEO pruža
              vam maksimalnu vrednost za uloženi novac. Izbacujemo suvišne
              stvari za maksimalan efekat. Mi to zovemo Pametni SEO.
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="w-[20%] p-5 space-y-5">
            <Image
              src={"/11434263_4706355.svg"}
              alt=""
              width={200}
              height={200}
            />
            <h3>
              Niste sigurni koga da angažujete za unapređenje vaše online
              prisutnosti?
            </h3>
            <p>
              Niste sigurni koga da angažujete za unapređenje vaše online
              prisutnosti? Imamo stotine recenzija sa 5 zvezdica. Svakog meseca
              zakazujemo 250 sastanaka za naš prodajni tim koristeći oglase, SEO
              i dobre stope konverzije. Omogućavamo vam da nas isprobate
              besplatno. Ne odlučujte na osnovu emocija, već na osnovu podataka.
            </p>
          </div>
          <div className="w-[20%] p-5 space-y-5">
            <Image
              src={"/11434263_4706355.svg"}
              alt=""
              width={200}
              height={200}
            />
            <h3>Moji marketing i prodajni podaci nisu povezani?</h3>
            <p>
              Naše digitalno oglašavanje je kao espresso za vaš brend – pružiće
              vam energiju i pažnju potrebnu da nadmašite konkurenciju.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiSmoTu;

// const [isFixed, setIsFixed] = useState(false); // Da li je leva kartica fiksirana
//   const componentRef = useRef(null); // Referenca na celu komponentu
//   const [isOutOfView, setIsOutOfView] = useState(false); // Kada leva kartica izađe iz pogleda

//   useEffect(() => {
//     const handleScroll = () => {
//       const componentTop =
//         componentRef.current?.getBoundingClientRect().top || 0;
//       const componentBottom =
//         componentRef.current?.getBoundingClientRect().bottom || 0;

//       // Kada je skrolovan do visine navbara (pretpostavka 80px visina navbara)
//       if (componentTop <= 110) {
//         setIsFixed(true);
//       } else {
//         setIsFixed(false);
//       }

//       // Kada se cela komponenta iskroluje do kraja
//       if (componentBottom <= 800) {
//         setIsOutOfView(true);
//       } else {
//         setIsOutOfView(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
{
  /* <motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.5, delay: 0.3 }} */
}
