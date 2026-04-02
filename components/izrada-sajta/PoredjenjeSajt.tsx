"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const prosecneSlike = [
  "/images/lighthouse1.PNG",

  "/images/lighthouse4.PNG",
  "/images/lighthouse5.PNG",
];

const PoredjenjeSajt = () => {
  return (
    <div>
      <motion.p
        className="text-gray-300 text-sm md:text-lg text-center w-full mx-auto mb-10 leading-relaxed md:leading-loose border-t border-t-orange-500 border-b border-b-orange-500 py-4 md:py-6"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Naši sajtovi su optimizovani prema standardima koje preporučuje Google,
        sa fokusom na performanse, brzinu učitavanja i Core Web Vitals metrike
        koje utiču na rangiranje u pretrazi. Rezultati optimizacije proveravaju
        se alatima kao što su Google Lighthouse i Google PageSpeed Insights.
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
        <div className="flex flex-col gap-2">
          <h3 className="text-base md:text-lg font-bold text-gray-300 text-center mb-3">
            Uobičajene performanse sajtova na internetu
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
          <h3 className="text-base md:text-lg font-bold text-gray-300 text-center">
            Naše performanse
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
        </div>
      </motion.div>

      <p className="text-center text-gray-400 text-lg md:text-2xl mt-6">
        Garantujemo performanse iznad 95
      </p>

      <div className="mt-10 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
    </div>
  );
};

export default PoredjenjeSajt;
