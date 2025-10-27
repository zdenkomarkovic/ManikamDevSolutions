"use client";

import { motion } from "framer-motion";

const ProcesWebshop = () => {
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
    <div className="mt-16 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-5 md:p-8 shadow-lg border border-gray-100">
      <div className="flex justify-center mb-12">
        <motion.h2
          className="text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Kako izgleda proces izrade web shopa?
        </motion.h2>
      </div>
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
              className="text-xl font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              Analiza i Planiranje
            </motion.h3>
          </div>
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Detaljno analiziramo vaše potrebe, ciljnu grupu, konkurenciju i
            poslovne ciljeve. Kreiramo strategiju za vaš web shop koja uključuje
            izbor proizvoda, cenovnu politiku, marketing strategiju i plan za
            implementaciju svih potrebnih funkcionalnosti.
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
              className="text-xl font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              Dizajn i UX/UI
            </motion.h3>
          </div>
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Kreiramo moderan, funkcionalan i konverzioni dizajn. Dizajn web
            shopa mora biti intuitivan, lako se navigirati i optimizovan za
            konverziju posetilaca u kupce. Fokusiramo se na korisničko iskustvo
            koje vodi do kupovine.
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
              className="text-xl font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              Razvoj i Integracije
            </motion.h3>
          </div>
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Koristimo najnovije e-commerce tehnologije za razvoj vašeg web
            shopa. Integrišemo sve potrebne sisteme: payment gateway, kurirske
            službe, CRM, email marketing, analitiku i druge third-party servise.
            Implementiramo sve dogovorene funkcionalnosti.
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
              className="text-xl font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              Unos Proizvoda i Sadržaja
            </motion.h3>
          </div>
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Pomažemo vam u unosu proizvoda, kategorija, opisa, slika i svih
            potrebnih informacija. Optimizujemo sadržaj za SEO i konverzije.
            Možete sami dodavati proizvode kroz intuitivan admin panel ili
            možemo to uraditi za vas.
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
              className="text-xl font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              Testiranje i Optimizacija
            </motion.h3>
          </div>
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Detaljno testiramo sve funkcionalnosti: proces kupovine, plaćanje,
            dostavu, email notifikacije, mobilnu verziju. Optimizujemo brzinu
            učitavanja, proveravamo sigurnost i testiramo na različitim
            uređajima i pretraživačima.
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
              className="text-xl font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              Lansiranje i Obuka
            </motion.h3>
          </div>
          <motion.p
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Lansiramo vaš web shop, podešavamo Google Analytics, Search Console
            i druge alate za praćenje. Obučavamo vas za rad sa admin panelom,
            upravljanje porudžbinama, proizvodima i svim ostalim funkcijama.
            Pružamo podršku nakon lansiranja.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProcesWebshop;
