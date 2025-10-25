"use client";

import { motion } from "framer-motion";

const FAQSajt = () => {
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
        Često postavljana pitanja o izradi sajtova
      </motion.h2>
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="border-b border-gray-200 pb-6 border-l-4 border-orange-500 rounded-lg pl-4 md:pl-6"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 }
          }}
        >
          <motion.h3
            className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            Koliko traje proces izrade sajta?
          </motion.h3>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Vreme izrade zavisi od izabranog paketa i složenosti projekta.
            Osnovni sajt izrađujemo za 7-10 dana, profesionalni i premium
            paketi obično traju 10-14 dana. Za složenije projekte sa custom
            funkcionalnostima, rok može biti duži. Tokom inicijalne
            konsultacije dajemo vam precizan vremenski okvir za vaš projekat.
          </motion.p>
        </motion.div>

        <motion.div
          className="border-b border-gray-200 pb-6 border-l-4 border-orange-500 rounded-lg pl-4 md:pl-6"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 }
          }}
        >
          <motion.h3
            className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            Da li moram da imam tehničko znanje da upravljam sajtom?
          </motion.h3>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ne, nije potrebno tehničko znanje. Ako izaberete paket sa CMS
            sistemom (Profesionalni ili Premium), dobićete intuitivan sistem
            za upravljanje sadržajem i detaljnu obuku. Moći ćete da menjate
            tekstove, slike i osnovne elemente bez potrebe za programiranjem.
            Za složenije izmene, naš tim je uvek dostupan za pomoć.
          </motion.p>
        </motion.div>

        <motion.div
          className="border-b border-gray-200 pb-6 border-l-4 border-orange-500 rounded-lg pl-4 md:pl-6"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 }
          }}
        >
          <motion.h3
            className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            Šta je uključeno u hosting i koliko košta nakon prve godine?
          </motion.h3>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Prva godina hostinga je uključena u cenu svih naših paketa.
            Hosting uključuje SSD prostor, SSL sertifikat, redovne backup-e i
            tehničku podršku.
          </motion.p>
        </motion.div>

        <motion.div
          className="border-b border-gray-200 pb-6 border-l-4 border-orange-500 rounded-lg pl-4 md:pl-6"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 }
          }}
        >
          <motion.h3
            className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            Zašto je Next.js bolji izbor od WordPress-a?
          </motion.h3>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Next.js nudi superiorne performanse sa brzinom učitavanja do 10
            puta većom od WordPress-a. Sigurnost je znatno bolja jer nema
            plugin-ova koji su čest cilj hakera. SEO optimizacija je ugrađena
            na nivou koda što garantuje bolje rangiranje. Takođe, ne plaćate
            skupe premium plugin-ove koji su često neophodni za WordPress.
            Naši Next.js sajtovi se lakše održavaju i skaliraju sa rastom
            vašeg poslovanja.
          </motion.p>
        </motion.div>

        <motion.div
          className="border-b border-gray-200 pb-6 border-l-4 border-orange-500 rounded-lg pl-4 md:pl-6"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 }
          }}
        >
          <motion.h3
            className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            Da li mogu da migriram postojeći WordPress sajt na Next.js?
          </motion.h3>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Apsolutno! Nudimo specijalizovanu uslugu modernizacije i migracije
            WordPress sajtova na Next.js platformu. Migriramo celokupan
            sadržaj, optimizujemo slike, poboljšavamo SEO, i dodatno ubrzavamo
            performanse. Većina klijenata primeti poboljšanje Google
            rangiranja za 50-80% nakon migracije, uz dramatično povećanje
            brzine sajta.
          </motion.p>
        </motion.div>

        <motion.div
          className="border-b border-gray-200 pb-6 border-l-4 border-orange-500 rounded-lg pl-4 md:pl-6"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 }
          }}
        >
          <motion.h3
            className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            Šta ako mi treba dodatna funkcionalnost koja nije navedena u
            paketima?
          </motion.h3>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Svi naši paketi su prilagodljivi i možemo dodati custom
            funkcionalnosti prema vašim potrebama. To može uključivati
            rezervacione sisteme, integraciju sa eksternim API-jima, custom
            forme, kalkulator cena, članarine, galerije, blog sistem i mnogo
            više. Tokom konzultacije ćemo razgovarati o vašim potrebama i dati
            precenu za dodatne funkcionalnosti.
          </motion.p>
        </motion.div>

        <motion.div
          className="border-b border-gray-200 pb-6 border-l-4 border-orange-500 rounded-lg pl-4 md:pl-6"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 }
          }}
        >
          <motion.h3
            className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            Da li je sajt prilagođen za mobilne telefone?
          </motion.h3>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Da, svi naši sajtovi su potpuno responzivni i savršeno se
            prilagođavaju svim uređajima - od mobilnih telefona do desktop
            računara. Više od 60% korisnika danas koristi mobilne uređaje za
            pretragu interneta, zato je mobilna optimizacija jedna od naših
            prioriteta. Sajt će se brzo učitavati i biti lak za korišćenje bez
            obzira na veličinu ekrana.
          </motion.p>
        </motion.div>

        <motion.div
          className="pb-6 border-l-4 border-orange-500 rounded-lg pl-4 md:pl-6"
          variants={itemVariants}
          whileHover={{
            x: 10,
            transition: { duration: 0.3 }
          }}
        >
          <motion.h3
            className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            Kako SEO optimizacija pomaže mom biznisu?
          </motion.h3>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            SEO optimizacija je ključna za vidljivost na Google-u i drugim
            pretraživačima. Kvalitetna SEO optimizacija donosi organsku
            besplatnu posetu vašem sajtu od ljudi koji aktivno traže vaše
            proizvode ili usluge. To znači više potencijalnih klijenata bez
            troškova plaćenog oglašavanja. Naši sajtovi imaju ugrađenu SEO
            optimizaciju koja uključuje meta tagove, strukturirane podatke,
            optimizaciju brzine, mobilnu prilagodljivost i Core Web Vitals -
            sve faktore koje Google koristi za rangiranje.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FAQSajt;
