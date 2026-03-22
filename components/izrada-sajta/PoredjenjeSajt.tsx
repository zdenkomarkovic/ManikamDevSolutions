"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const prosecneSlike = [
  "/images/lighthouse1.PNG",
  "/images/lighthouse2.PNG",
  "/images/lighthouse3.PNG",
  "/images/lighthouse4.PNG",
  "/images/lighthouse5.PNG",
];

const PoredjenjeSajt = () => {
  return (
    <div>
      {/* Naslov sekcije */}
      <div className="flex justify-center mb-10">
        <motion.h2
          className="text-xl md:text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Pogledajte razliku između proseka i našeg rada
        </motion.h2>
      </div>

      {/* Opis ispod naslova */}
      <motion.p
        className="text-gray-400 text-sm md:text-base text-center max-w-2xl mx-auto -mt-6 mb-10 leading-relaxed"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Brzina učitavanja sajta merena alatom Google Lighthouse koji meri
        performanse i Core Web Vitals metrike važne za rangiranje na Google
        pretrazi. Skor ide od 0 do 100.
      </motion.p>

      {/* Dve kolone */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Leva kolona — Prosečan sajt */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base md:text-lg font-bold text-gray-300 text-center">
            Prosečni sajtovi na internetu (Google Lighthouse)
          </h3>
          {prosecneSlike.map((src, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-gray-700"
            >
              <Image
                src={src}
                alt={`Prosečan sajt ${i + 1}`}
                width={0}
                height={0}
                sizes="(max-width: 768px) 90vw, 45vw"
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>

        {/* Desna kolona — Naš rezultat */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base md:text-lg font-bold text-orange-400 text-center">
            Manikam Web Solutions (Google Lighthouse)
          </h3>
          <div className="rounded-xl overflow-hidden border border-orange-500/30">
            <Image
              src="/images/lighthousemanikam.PNG"
              alt="Manikam rezultat"
              width={0}
              height={0}
              sizes="(max-width: 768px) 90vw, 45vw"
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-gray-400 text-base md:text-xl">
            Svaki sajt koji isporučimo prolazi Lighthouse proveru kvaliteta.{" "}
            <span className="text-orange-400 font-semibold">
              Garantujemo skor 95+
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PoredjenjeSajt;
