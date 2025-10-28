"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Search,
  Smartphone,
  DollarSign,
  Lock,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    title: "Neuporedive Performanse",
    description:
      "Next.js koristi najmodernije tehnologije kao što su Server-Side Rendering (SSR), Static Site Generation (SSG) i Incremental Static Regeneration (ISR). Ovo znači da se vaš sajt učitava munjevitom brzinom, što direktno utiče na zadovoljstvo korisnika i stopu konverzije. Studije pokazuju da čak 40% korisnika napusti sajt ako se ne učita za 3 sekunde - sa Next.js, vaš sajt će se učitavati za manje od sekunde.",
  },
  {
    icon: Search,
    title: "Superioran SEO i Vidljivost",
    description:
      "Google rangira brze sajtove više u rezultatima pretrage. Next.js omogućava server-side rendering što znači da pretraživači mogu odmah da indeksiraju vaš sadržaj, za razliku od tradicionalnih Single Page Applications. Automatska optimizacija slika, meta tagova i strukturiranih podataka osigurava da vaš sajt dobije maksimalnu vidljivost. Klijenti koji su migrirali na Next.js u proseku beleže 30-50% povećanje organskog saobraćaja.",
  },
  {
    icon: Smartphone,
    title: "Perfektno Mobilno Iskustvo",
    description:
      "Više od 60% internet saobraćaja dolazi sa mobilnih uređaja. Next.js obezbeđuje savršen responsive dizajn koji se automatski prilagođava svim veličinama ekrana. Progressive Web App (PWA) funkcionalnosti omogućavaju da vaš sajt radi čak i offline, šalje push notifikacije i pruža iskustvo koje nadmašuje native aplikacije. Google Core Web VitalsScore od 90+ garantovan.",
  },
  {
    icon: DollarSign,
    title: "Značajna Ušteda Novca",
    description:
      "Eliminišite mesečne troškove skupih WordPress plugin-ova, tema i dodataka. Next.js aplikacije mogu se hostovati na platformama kao što su Vercel, Netlify ili Cloudflare Pages potpuno BESPLATNO za male i srednje sajtove. Nema potrebe za skupim managed hosting-om ili VPS serverima. Automatsko skaliranje znači da plaćate samo ono što koristite. Klijenti u proseku štede 200-500€ godišnje nakon migracije.",
  },
  {
    icon: Lock,
    title: "Maksimalna Sigurnost",
    description:
      "WordPress sajtovi su česta meta hakera zbog popularnosti i brojnih ranjivosti u plugin-ima. Next.js aplikacije su značajno sigurnije jer ne koriste baze podataka na tradicionalan način i nemaju admin panel koji može biti hakovan. Nema potrebe za stalnim ažuriranjem pluginova i brigom o sigurnosnim zakrpama. Built-in zaštita od XSS, CSRF i SQL injection napada. Automatsko HTTPS i najbolje sigurnosne prakse iz kutije.",
  },
  {
    icon: Users,
    title: "Bolja Konverzija i Angažman",
    description:
      "Brži sajt znači više zadovoljnih korisnika i više konverzija. Svako smanjenje vremena učitavanja za 100ms rezultuje povećanjem konverzije za 1%. Moderna animacija i interakcije prave nezaboravno korisničko iskustvo. Real-time funkcionalnosti, personalizacija sadržaja i brzo navigacija između stranica drže korisnike angažovanim. Analytics pokazuju da Next.js sajtovi imaju 25-40% nižu bounce rate od tradicionalnih platformi.",
  },
];

export default function RedesignBenefits() {
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <div className="mt-16">
      <motion.h2
        className="text-3xl font-extrabold text-center mb-12 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Ključne Prednosti Migracije na Next.js
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {benefits.map((benefit, index) => {
          const gradients = [
            "bg-gradient-to-bl from-gray-900 via-gray-800 to-orange-600",
            "bg-gradient-to-br from-gray-900 via-gray-800 to-orange-600",
            "bg-gradient-to-bl from-gray-900 via-gray-800 to-orange-600",
            "bg-gradient-to-br from-gray-900 via-gray-800 to-orange-600",
            "bg-gradient-to-bl from-gray-900 via-gray-800 to-orange-600",
            "bg-gradient-to-br from-gray-900 via-gray-800 to-orange-600",
          ];
          return (
            <motion.div
              key={index}
              className={`${
                gradients[index % 6]
              } rounded-xl p-6 shadow-lg text-center`}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4"
                variants={iconVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <benefit.icon className="text-2xl text-white" />
              </motion.div>
              <h4 className="text-xl font-bold mb-3 text-gray-100">
                {benefit.title}
              </h4>
              <p className="text-gray-100 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
