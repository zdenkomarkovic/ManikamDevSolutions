"use client";

import { motion } from "framer-motion";
import { Rocket, Search, Smartphone, DollarSign, Lock, Users } from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    title: "Neuporedive Performanse",
    description: "Next.js koristi najmodernije tehnologije kao što su Server-Side Rendering (SSR), Static Site Generation (SSG) i Incremental Static Regeneration (ISR). Ovo znači da se vaš sajt učitava munjevitom brzinom, što direktno utiče na zadovoljstvo korisnika i stopu konverzije. Studije pokazuju da čak 40% korisnika napusti sajt ako se ne učita za 3 sekunde - sa Next.js, vaš sajt će se učitavati za manje od sekunde.",
  },
  {
    icon: Search,
    title: "Superioran SEO i Vidljivost",
    description: "Google rangira brze sajtove više u rezultatima pretrage. Next.js omogućava server-side rendering što znači da pretraživači mogu odmah da indeksiraju vaš sadržaj, za razliku od tradicionalnih Single Page Applications. Automatska optimizacija slika, meta tagova i strukturiranih podataka osigurava da vaš sajt dobije maksimalnu vidljivost. Klijenti koji su migrirali na Next.js u proseku beleže 30-50% povećanje organskog saobraćaja.",
  },
  {
    icon: Smartphone,
    title: "Perfektno Mobilno Iskustvo",
    description: "Više od 60% internet saobraćaja dolazi sa mobilnih uređaja. Next.js obezbeđuje savršen responsive dizajn koji se automatski prilagođava svim veličinama ekrana. Progressive Web App (PWA) funkcionalnosti omogućavaju da vaš sajt radi čak i offline, šalje push notifikacije i pruža iskustvo koje nadmašuje native aplikacije. Google Core Web VitalsScore od 90+ garantovan.",
  },
  {
    icon: DollarSign,
    title: "Značajna Ušteda Novca",
    description: "Eliminišite mesečne troškove skupih WordPress plugin-ova, tema i dodataka. Next.js aplikacije mogu se hostovati na platformama kao što su Vercel, Netlify ili Cloudflare Pages potpuno BESPLATNO za male i srednje sajtove. Nema potrebe za skupim managed hosting-om ili VPS serverima. Automatsko skaliranje znači da plaćate samo ono što koristite. Klijenti u proseku štede 200-500€ godišnje nakon migracije.",
  },
  {
    icon: Lock,
    title: "Maksimalna Sigurnost",
    description: "WordPress sajtovi su česta meta hakera zbog popularnosti i brojnih ranjivosti u plugin-ima. Next.js aplikacije su značajno sigurnije jer ne koriste baze podataka na tradicionalan način i nemaju admin panel koji može biti hakovan. Nema potrebe za stalnim ažuriranjem pluginova i brigom o sigurnosnim zakrpama. Built-in zaštita od XSS, CSRF i SQL injection napada. Automatsko HTTPS i najbolje sigurnosne prakse iz kutije.",
  },
  {
    icon: Users,
    title: "Bolja Konverzija i Angažman",
    description: "Brži sajt znači više zadovoljnih korisnika i više konverzija. Svako smanjenje vremena učitavanja za 100ms rezultuje povećanjem konverzije za 1%. Moderna animacija i interakcije prave nezaboravno korisničko iskustvo. Real-time funkcionalnosti, personalizacija sadržaja i brzo navigacija između stranica drže korisnike angažovanim. Analytics pokazuju da Next.js sajtovi imaju 25-40% nižu bounce rate od tradicionalnih platformi.",
  },
];

export default function RedesignBenefits() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Ključne Prednosti Migracije na Next.js
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Otkrijte kako Next.js može transformisati vaš sajt u moćan digitalni alat koji donosi realne poslovne rezultate
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <benefit.icon className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
