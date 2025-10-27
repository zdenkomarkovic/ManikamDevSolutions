"use client";

import { motion } from "framer-motion";

const GoogleAdsFAQ = () => {
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
      <div className="flex justify-center mb-12">
        <motion.h2
          className="text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Često postavljana pitanja o Google Ads oglašavanju
        </motion.h2>
      </div>
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="border-b pb-6 border-l-4 border-orange-500 rounded-lg pl-4 md:pl-6"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 },
          }}
        >
          <motion.h3
            className="text-xl font-bold mb-3 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            Koliki budžet je potreban za Google Ads kampanju?
          </motion.h3>
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Minimalni preporučeni mesečni budžet zavisi od industrije i
            konkurencije, ali uglavnom kreće od 300-500 EUR mesečno. Za
            kompetitivnije oblasti može biti potrebno 1000+ EUR da bi se videli
            značajni rezultati. Tokom konsultacije analiziramo vašu industriju i
            konkurenciju da damo preciznu procenu optimalnog budžeta.
          </motion.p>
        </motion.div>

        <motion.div
          className="border-b  pb-6 border-l-4 border-orange-600 rounded-lg pl-4 md:pl-6"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 },
          }}
        >
          <motion.h3
            className="text-xl font-bold mb-3 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            Koliko brzo mogu videti rezultate?
          </motion.h3>
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Prvi rezultati (klikovi i saobraćaj) su vidljivi odmah po pokretanju
            kampanje. Međutim, za optimalne performanse i najbolji ROI, potrebno
            je 2-3 meseca kontinuiranog rada i optimizacije. Google algoritam
            uči o vašoj kampanji tokom vremena, što rezultuje boljim
            performansama i nižim troškovima po kliku.
          </motion.p>
        </motion.div>

        <motion.div
          className="border-b pb-6 border-l-4 border-orange-600 rounded-lg pl-4 md:pl-6"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 },
          }}
        >
          <motion.h3
            className="text-xl font-bold mb-3 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            Da li radite samo setup ili i upravljanje kampanjom?
          </motion.h3>
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nudimo obe opcije - možemo samo napraviti početni setup kampanje,
            ili možete angažovati naš tim za kontinuirano upravljanje,
            optimizaciju i mesečne izveštaje. Većina klijenata bira opciju
            potpunog upravljanja jer donosi najbolje rezultate. Naš tim redovno
            prati performanse i prilagođava strategiju za maksimalan ROI.
          </motion.p>
        </motion.div>

        <motion.div
          className="border-b pb-6 border-l-4 border-orange-600 rounded-lg pl-4 md:pl-6"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 },
          }}
        >
          <motion.h3
            className="text-xl font-bold mb-3 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            Šta ako kampanja ne donese rezultate?
          </motion.h3>
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Radimo transparentno i dajemo realne procene. Ako nakon inicijalnog
            perioda vidimo da rezultati nisu zadovoljavajući, zajedno
            analiziramo razloge i prilagođavamo strategiju ili budžet. Naš cilj
            je uvek maksimalan ROI za vaš budžet.
          </motion.p>
        </motion.div>

        <motion.div
          className="border-b  pb-6 border-l-4 border-orange-600 rounded-lg pl-4 md:pl-6"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 },
          }}
        >
          <motion.h3
            className="text-xl font-bold mb-3 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            Koje tipove Google Ads kampanja radite?
          </motion.h3>
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Radimo sve tipove Google Ads kampanja: Search kampanje za
            pretraživanje, Display kampanje za vizuelno oglašavanje, Shopping
            kampanje za e-commerce, Video kampanje na YouTube-u, i App kampanje
            za mobilne aplikacije. Izaberemo najbolju kombinaciju prema vašim
            ciljevima i budžetu.
          </motion.p>
        </motion.div>

        <motion.div
          className="border-b pb-6 border-l-4 border-orange-600 rounded-lg pl-4 md:pl-6"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 },
          }}
        >
          <motion.h3
            className="text-xl font-bold mb-3 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            Da li je potrebno da imam Google Ads nalog?
          </motion.h3>
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nije potrebno da imate postojeći Google Ads nalog. Možemo kreirati
            novi nalog za vas ili raditi sa vašim postojećim nalogom.
          </motion.p>
        </motion.div>

        <motion.div
          className="pb-6 border-l-4 border-orange-600 rounded-lg pl-4 md:pl-6"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 },
          }}
        >
          <motion.h3
            className="text-xl font-bold mb-3 inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            Kako merite uspeh kampanje?
          </motion.h3>
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Merimo uspeh kroz ključne metrike kao što su ROI (povrat
            investicije), cost per acquisition (CPA), conversion rate, i
            kvalitet skora. Pored toga, pratimo i poslovne rezultate kao što su
            povećanje prodaje, generisanje leadova, i poboljšanje brand
            awareness-a. Redovno dostavljamo detaljne izveštaje sa analizom
            performansi i preporukama za poboljšanje.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GoogleAdsFAQ;
