"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Konsultacije i Analiza",
    description:
      "Razumemo vaše poslovne potrebe, procese i ciljeve. Definišemo requirements i scope projekta kroz detaljne razgovore. Analiziramo postojeća rešenja i konkurenciju kako bismo kreirali strategiju koja će vaš softver izdvojiti na tržištu.",
  },
  {
    title: "Dizajn i Planiranje",
    description:
      "Kreiramo wireframes, mockups, arhitekturu sistema i projektni plan sa milestones. Dizajniramo user experience i tehničku arhitekturu. Usklađujemo sve detalje sa vama i vršimo potrebne korekcije dok ne budete potpuno zadovoljni.",
  },
  {
    title: "Development",
    description:
      "Agile development proces sa redovnim sprint-ovima i prikazima napretka. Koristimo najnovije tehnologije (Next.js, React.js, Node.js) za izradu brzog, sigurnog i skalabilnog softvera. Redovno vas ažuriramo o napretku projekta.",
  },
  {
    title: "Testiranje i QA",
    description:
      "Rigorozno testiranje funkcionalnosti, performansi, sigurnosti i user experience-a. Testiramo na različitim platformama i uređajima. Proveravamo sve edge case-ove i optimizujemo za maksimalne performanse.",
  },
  {
    title: "Deployment",
    description:
      "Postavljanje na production, migracija podataka, obuka korisnika i go-live. Podešavamo cloud infrastructure, CI/CD pipeline i monitoring. Osiguravamo glatku tranziciju i stabilno pokretanje sistema.",
  },
  {
    title: "Održavanje i Podrška",
    description:
      "Kontinuirana tehnička podrška, bugfixes, updates i nova funkcionalnost. Pratimo performanse sistema i predlažemo poboljšanja. Tu smo da vam pomognemo sa bilo kakvim pitanjima ili potrebnim izmenama.",
  },
];

export default function SoftwareProcess() {
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
    <div>
      <div className="mt-16 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-4 md:p-8 shadow-lg border border-gray-100">
        <div className="flex justify-center mb-12">
          <motion.h2
            className="text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Naš Proces Razvoja Softvera
          </motion.h2>
        </div>
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
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
                  {index + 1}
                </motion.div>
                <motion.h3
                  className="text-xl font-bold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  {step.title}
                </motion.h3>
              </div>
              <motion.p
                className=""
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="mt-8 p-4 md:p-6 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.01,
          y: -3,
          boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)",
        }}
      >
        <motion.h3
          className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Agile Metodologija
        </motion.h3>
        <p className="mb-6 text-center">
          Koristimo <strong>Agile/Scrum metodologiju</strong> koja omogućava
          fleksibilnost, transparentnost i kontinuiranu isporuku vrednosti.
          Umesto da čekate mesecima na finalni proizvod, dobijate funkcionalne
          verzije softvera svakih 2-3 nedelje.
        </p>
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-gray-900 mb-2 text-lg">
              Sprint Planning
            </h4>
            <p className="text-sm">
              Zajedno definišemo prioritete i funkcionalnosti za naredni sprint.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-gray-900 mb-2 text-lg">
              Daily Standups
            </h4>
            <p className="text-sm">
              Redovna komunikacija i ažuriranje o napretku projekta.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-gray-900 mb-2 text-lg">
              Sprint Review
            </h4>
            <p className="text-sm">
              Prikazujemo gotov rad, prikupljamo feedback i prilagođavamo plan.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
