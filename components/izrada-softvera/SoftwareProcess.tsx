"use client";

import { FaComments, FaDrawPolygon, FaCode, FaVial, FaRocket, FaWrench } from "react-icons/fa";

const steps = [
  {
    icon: FaComments,
    title: "Konsultacije i Analiza",
    description: "Razumemo vaše poslovne potrebe, procese i ciljeve. Definišemo requirements i scope projekta.",
  },
  {
    icon: FaDrawPolygon,
    title: "Dizajn i Planiranje",
    description: "Kreiramo wireframes, mockups, arhitekturu sistema i projektni plan sa milestones.",
  },
  {
    icon: FaCode,
    title: "Development",
    description: "Agile development proces sa redovnim sprint-ovima i prikazima napretka.",
  },
  {
    icon: FaVial,
    title: "Testiranje i QA",
    description: "Rigorozno testiranje funkcionalnosti, performansi, sigurnosti i user experience-a.",
  },
  {
    icon: FaRocket,
    title: "Deployment",
    description: "Postavljanje na production, migracija podataka, obuka korisnika i go-live.",
  },
  {
    icon: FaWrench,
    title: "Održavanje i Podrška",
    description: "Kontinuirana tehnička podrška, bugfixes, updates i nova funkcionalnost.",
  },
];

export default function SoftwareProcess() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
        Naš Proces Razvoja Softvera
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
          >
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
              {index + 1}
            </div>
            <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
              <step.icon className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
          Agile Metodologija
        </h3>
        <p className="text-gray-700 mb-4">
          Koristimo <strong>Agile/Scrum metodologiju</strong> koja omogućava fleksibilnost,
          transparentnost i kontinuiranu isporuku vrednosti. Umesto da čekate mesecima na finalni
          proizvod, dobijate funkcionalne verzije softvera svakih 2-3 nedelje.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Sprint Planning</h4>
            <p className="text-gray-600 text-sm">
              Zajedno definišemo prioritete i funkcionalnosti za naredni sprint.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Daily Standups</h4>
            <p className="text-gray-600 text-sm">
              Redovna komunikacija i ažuriranje o napretku projekta.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Sprint Review</h4>
            <p className="text-gray-600 text-sm">
              Prikazujemo gotov rad, prikupljamo feedback i prilagođavamo plan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
