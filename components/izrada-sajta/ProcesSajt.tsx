"use client";

import { motion } from "framer-motion";

const ProcesSajt = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      x: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="mt-16 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-4 md:p-8 shadow-lg border border-gray-100">
      <motion.h2
        className="text-3xl font-extrabold text-center mb-12 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Kako izgleda proces izrade sajta?
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
            transition: { duration: 0.3 }
          }}
        >
          <div className="flex gap-6 items-center">
            <motion.div
              className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center text-white font-bold text-xl"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            >
              1
            </motion.div>
            <motion.h3
              className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              Inicijalna konsultacija i analiza potreba
            </motion.h3>
          </div>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Detaljno razgovaramo o vašim poslovnim ciljevima, ciljnoj grupi i
            funkcionalnostima koje vam trebaju. Analiziramo konkurenciju i
            tržište kako bismo kreirali strategiju koja će vaš sajt izdvojiti.
            Ova faza je ključna jer nam pomaže da razumemo vašu viziju i
            kreiramo sajt koji će doneti rezultate.
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-5"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 }
          }}
        >
          <div className="flex gap-6 items-center">
            <motion.div
              className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center text-white font-bold text-xl"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            >
              2
            </motion.div>
            <motion.h3
              className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              Dizajn i prototip
            </motion.h3>
          </div>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Kreiramo moderan i funkcionalan dizajn koji odražava identitet vašeg
            brenda. Pravimo wireframe-ove i prototipove kako biste vizualizovali
            kako će sajt izgledati pre nego što počnemo sa razvojem. Usklađujemo
            sve detalje sa vama i vršimo potrebne korekcije dok ne budete
            potpuno zadovoljni.
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-5"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 }
          }}
        >
          <div className="flex gap-6 items-center">
            <motion.div
              className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center text-white font-bold text-xl"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            >
              3
            </motion.div>
            <motion.h3
              className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              Razvoj i programiranje
            </motion.h3>
          </div>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Naš tim programera koristi najnovije tehnologije (Next.js, React.js,
            Node.js) za izradu brzog, sigurnog i skalabilnog sajta. Tokom
            razvoja pažljivo integrišemo sve dogovorene funkcionalnosti,
            optimizujemo kod za brzinu i SEO, i redovno vas ažuriramo o napretku
            projekta.
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-5"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 }
          }}
        >
          <div className="flex gap-6 items-center">
            <motion.div
              className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center text-white font-bold text-xl"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            >
              4
            </motion.div>
            <motion.h3
              className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              Testiranje i optimizacija
            </motion.h3>
          </div>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Pre lansiranja, detaljno testiramo sajt na različitim uređajima i
            pretraživačima. Proveravamo brzinu učitavanja, funkcionalnost svih
            formi i linkova, SEO postavke, i responsivnost dizajna. Optimizujemo
            slike i kod za maksimalne performanse.
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-5"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 }
          }}
        >
          <div className="flex gap-6 items-center">
            <motion.div
              className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center text-white font-bold text-xl"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            >
              5
            </motion.div>
            <motion.h3
              className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              Lansiranje i obuka
            </motion.h3>
          </div>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nakon vašeg odobrenja, sajt lansiramo na željeni hosting i domen.
            Pružamo vam detaljnu obuku za upravljanje sadržajem (ako paket
            uključuje CMS), podešavamo analitiku i alate za praćenje
            performansi. Ostajemo dostupni za podršku i nakon lansiranja.
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-5"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 }
          }}
        >
          <div className="flex gap-6 items-center">
            <motion.div
              className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center text-white font-bold text-xl"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            >
              6
            </motion.div>
            <motion.h3
              className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              Održavanje i podrška
            </motion.h3>
          </div>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nudimo redovno održavanje, sigurnosne ažuriranja i tehničku podršku.
            Pratimo performanse sajta i predlažemo poboljšanja. Tu smo da vam
            pomognemo sa bilo kakvim pitanjima ili potrebnim izmenama.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProcesSajt;
