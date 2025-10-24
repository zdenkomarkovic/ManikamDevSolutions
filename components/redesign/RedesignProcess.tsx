"use client";

import { motion } from "framer-motion";
import { Search, FileText, Palette, Code, TestTube, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Analiza i Procena",
    description: "Detaljno analiziramo vaš trenutni sajt - sadržaj, dizajn, funkcionalnosti, SEO metriku i tehničke aspekte. Identifikujemo sve što treba migirati i šta može biti poboljšano. Pravimo kompletan plan projekta sa realnim rokovima.",
    duration: "1-3 dana",
    deliverables: ["Detaljna analiza sajta", "Lista funkcionalnosti", "Project roadmap", "Procena troškova"],
  },
  {
    icon: FileText,
    title: "2. Izvoz i Backup Sadržaja",
    description: "Kreiramo kompletan backup vašeg sajta i izvozimo sav sadržaj - tekstove, slike, video, bazu podataka. Vaš originalni sajt ostaje potpuno funkcionalan tokom celog procesa migracije. Koristimo automatizovane alate i custom skripte za efikasan prenos podataka.",
    duration: "1-2 dana",
    deliverables: ["Kompletan backup", "Izvezeni sadržaj", "Database dump", "Media library"],
  },
  {
    icon: Palette,
    title: "3. Dizajn i Prototip",
    description: "Kreiramo moderan dizajn koji poštuje vaš brand ali koristi najnovije UI/UX trendove. Možemo zadržati trenutni dizajn ali ga optimizovati, ili kreirati potpuno nov look. Prikazujemo vam prototip u Figma ili direktno u browser-u za odobrenje.",
    duration: "3-7 dana",
    deliverables: ["Design mockups", "Prototype", "Mobile responsive design", "Design approval"],
  },
  {
    icon: Code,
    title: "4. Razvoj i Migracija",
    description: "Razvijamo sajt u Next.js-u, implementiramo sve funkcionalnosti i migriramo sadržaj. Optimizujemo performanse, SEO i sigurnost. Integrišemo sve potrebne third-party servise (analytics, CRM, payment gateways). Postavljamo CMS ako je potrebno za lako upravljanje sadržajem.",
    duration: "2-6 nedelja",
    deliverables: ["Funkcionalan Next.js sajt", "Migriran sadržaj", "CMS setup", "Third-party integracije"],
  },
  {
    icon: TestTube,
    title: "5. Testiranje i Optimizacija",
    description: "Rigorozno testiramo sajt na svim uređajima i browser-ima. Proveravamo sve linkove, forme, funkcionalnosti. Optimizujemo performanse za maksimalan Google PageSpeed score. Setup 301 redirects za sve stare URL-ove. Testiramo SEO, accessibility i sigurnost.",
    duration: "3-5 dana",
    deliverables: ["Test reports", "Performance optimization", "SEO audit", "Security check"],
  },
  {
    icon: Rocket,
    title: "6. Launch i Go-Live",
    description: "Postavljamo sajt na production server (Vercel, Netlify ili vaš izbor). Konfigurišemo DNS i custom domain. Pratimo performanse 24/7 prvih nekoliko dana. Osiguravamo da sve radi besprekorno. Postavljamo monitoring i analytics.",
    duration: "1 dan",
    deliverables: ["Live sajt", "DNS setup", "SSL certificate", "Monitoring setup"],
  },
  {
    icon: HeadphonesIcon,
    title: "7. Obuka i Podrška",
    description: "Obučavamo vas ili vaš tim kako da koristite i ažurirate novi sajt. Pružamo kompletnu dokumentaciju. Nudimo 30 dana besplatne post-launch podrške za sve bugove ili probleme. Opciono: dugoročni maintenance paketi.",
    duration: "Ongoing",
    deliverables: ["Video tutorials", "Dokumentacija", "30 dana support", "Maintenance plan"],
  },
];

export default function RedesignProcess() {
  return (
    <section id="proces" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Naš Proces Migracije
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pažljivo planiran 7-koračni proces koji garantuje glatku migraciju bez downtime-a
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-8 last:mb-0"
            >
              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-orange-600">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      <span className="text-orange-600 font-semibold mt-2 md:mt-0">{step.duration}</span>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4">{step.description}</p>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {step.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                            <span className="text-sm text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-xl text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Zero Downtime Garancija</h3>
          <p className="text-lg mb-2">
            Vaš trenutni sajt ostaje potpuno funkcionalan tokom cele migracije. Prelazak na novi sajt se dešava trenutno bez prekida u radu.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
