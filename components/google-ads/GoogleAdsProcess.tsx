"use client";

import { motion } from "framer-motion";

const GoogleAdsProcess = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      x: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="mt-16 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-4 md:p-8 shadow-lg border border-gray-100">
      <motion.h2
        className="text-3xl font-extrabold text-center mb-12 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Kako izgleda proces Google Ads kampanje?
      </motion.h2>
      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="space-y-5"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 },
          }}
        >
          <div className="flex gap-6 items-center">
            <motion.div
              className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              1
            </motion.div>
            <motion.h3
              className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              Analiza i strategija
            </motion.h3>
          </div>
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Detaljno analiziramo vaš biznis, konkurenciju, ciljnu grupu i
            postavljamo jasne, merljive ciljeve kampanje. Istražujemo tržište,
            analiziramo konkurentske kampanje i kreiramo strategiju koja će vašu
            kampanju izdvojiti. Ova faza je ključna jer nam pomaže da razumemo
            vašu viziju i kreiramo kampanju koja će doneti maksimalne rezultate.
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-5"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 },
          }}
        >
          <div className="flex gap-6 items-center">
            <motion.div
              className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              2
            </motion.div>
            <motion.h3
              className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              Istraživanje ključnih reči
            </motion.h3>
          </div>
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Pronalazimo najrelevantnije ključne reči sa najboljim potencijalom
            za konverziju, analizirajući obim pretrage i konkurenciju. Koristimo
            profesionalne alate za istraživanje ključnih reči i kreiramo listu
            termina koji će privući kvalitetnu posetu. Fokusiramo se na
            long-tail ključne reči koje imaju veći potencijal za konverziju.
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-5"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 },
          }}
        >
          <div className="flex gap-6 items-center">
            <motion.div
              className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              3
            </motion.div>
            <motion.h3
              className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              Kreiranje kampanje
            </motion.h3>
          </div>
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Postavljamo kampanju u Google Ads nalogu, kreiramo atraktivne
            oglase, podešavamo budžet i targetiranje. Kreiramo različite verzije
            oglasa za A/B testiranje, postavljamo geografsko i demografsko
            targetiranje, i optimizujemo landing stranice za maksimalnu
            konverziju. Sve je prilagođeno vašim specifičnim potrebama.
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-5"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 },
          }}
        >
          <div className="flex gap-6 items-center">
            <motion.div
              className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              4
            </motion.div>
            <motion.h3
              className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              Praćenje i optimizacija
            </motion.h3>
          </div>
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Dnevno pratimo performanse, testiramo različite verzije oglasa,
            optimizujemo ponude i kontinuirano unapređujemo rezultate.
            Analiziramo metrike kao što su CTR, conversion rate, cost per
            acquisition i ROI. Redovno prilagođavamo strategiju na osnovu
            podataka i tržišnih trendova.
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-5"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 },
          }}
        >
          <div className="flex gap-6 items-center">
            <motion.div
              className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              5
            </motion.div>
            <motion.h3
              className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              Izveštavanje i analiza
            </motion.h3>
          </div>
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Mesečno dobijate detaljan izveštaj sa svim ključnim metrikama i
            našim preporukama za sledeći period. Izveštaj uključuje analizu
            performansi, poređenje sa prethodnim periodima, konkurentsku analizu
            i konkretne preporuke za poboljšanje. Redovno organizujemo sastanke
            za diskusiju o rezultatima i strategiji.
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-5"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 },
          }}
        >
          <div className="flex gap-6 items-center">
            <motion.div
              className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              6
            </motion.div>
            <motion.h3
              className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              Kontinuirano poboljšanje
            </motion.h3>
          </div>
          <motion.p
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nudimo kontinuiranu optimizaciju i poboljšanje performansi kampanje.
            Pratimo najnovije Google Ads funkcionalnosti, testiramo nove
            pristupe i strategije, i prilagođavamo se promenama na tržištu. Tu
            smo da vam pomognemo sa bilo kakvim pitanjima ili potrebnim
            prilagođavanjima kampanje.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GoogleAdsProcess;
