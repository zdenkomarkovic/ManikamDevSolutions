"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Koliko košta izrada custom softvera?",
    answer:
      "Cena zavisi od kompleksnosti projekta, broja funkcionalnosti i vremena razvoja. Jednostavnije web aplikacije počinju od 5,000-10,000€, srednje složeni sistemi (CRM, ERP) od 15,000-30,000€, dok kompleksni enterprise sistemi mogu koštati 50,000€+. Važno je napomenuti da je ovo jednokratna investicija - nakon toga plaćate samo održavanje (~10-15% godišnje od inicijalne cene). Za poređenje, SaaS rešenja vas koštaju 1,000-5,000€ godišnje i ti troškovi se gomilaju bez kraja.",
  },
  {
    question: "Koliko dugo traje razvoj custom softvera?",
    answer:
      "Vreme zavisi od scope-a projekta. MVP (Minimum Viable Product) verzija može biti gotova za 2-3 meseca. Srednje složeni projekti traju 4-6 meseci, dok kompleksni enterprise sistemi mogu trajati 6-12+ meseci. Koristimo Agile metodologiju, tako da dobijate funkcionalne verzije svakih 2-3 nedelje umesto da čekate mesecima na finalni proizvod.",
  },
  {
    question: "Da li mogu da vidim napredak tokom razvoja?",
    answer:
      "Apsolutno! Radimo u sprint-ovima od 2-3 nedelje. Na kraju svakog sprint-a dobijate demo funkcionalne verzije softvera, možete da testirate, date feedback i zajedno definišemo prioritete za sledeći sprint. Imate pristup project management tool-u (Jira, Trello) gde pratite napredak u realnom vremenu. Takođe imamo redovne sastanke (weekly/bi-weekly) gde razgovaramo o napretku.",
  },
  {
    question: "Šta ako kasnije želim da dodam nove funkcionalnosti?",
    answer:
      "To je jedna od najvećih prednosti custom softvera! Kako vaš biznis raste i menja se, možete dodavati nove funkcionalnosti. Mi kreiramo softver sa modularnom arhitekturom koja omogućava lako proširivanje. Možete naručiti development po potrebi (hourly/daily rate) ili dogovoriti retainer za kontinuiranu podršku i razvoj. Niste ograničeni kao kod SaaS rešenja gde morate čekati da provajder doda funkciju (ako je ikad dodaju).",
  },
  {
    question: "Ko će biti vlasnik source code-a?",
    answer:
      "Vi! Nakon finalne uplate, kompletan source code postaje vaša intelektualna svojina. Dobijate potpuno vlasništvo nad softverom i možete raditi šta god želite - dati ga drugom developeru na održavanje, prodati, licencirati, itd. Ovo je velika razlika u odnosu na SaaS rešenja gde nikad ne posedujete softver.",
  },
  {
    question: "Da li nudite održavanje i podršku nakon lansiranja?",
    answer:
      "Da. Nudimo različite support pakete - od basic support-a (bug fixes, security updates) do full-service paketa (bug fixes, updates, nove funkcionalnosti, 24/7 monitoring). Obično naplaćujemo 10-15% od inicijalne cene softvera godišnje za kontinuiranu podršku. Takođe možete da birate da li želite mesečni retainer ili pay-as-you-go model gde plaćate samo po potrebi.",
  },
  {
    question: "Šta ako imam već postojeći sistem koji treba integrisati?",
    answer:
      "Specijalizujemo se za integracije! Možemo integrisati novi softver sa vašim postojećim sistemima - accounting softverom (QuickBooks, Xero), CRM-om, ERP-om, e-commerce platformama, payment gateway-ima, shipping API-jima, email servisima i bilo kojim sistemom koji ima API. Takođe možemo kreirati API za vaš novi softver da bi se drugi sistemi mogli povezati sa njim.",
  },
  {
    question: "Da li mogu da vidim portfolio vaših projekata?",
    answer:
      "Zbog NDA sporazuma sa klijentima ne možemo javno prikazati sve projekte. Međutim, možemo organizovati call gde ćemo vam pokazati case studies sličnih projekata, dijeliti reference od zadovoljnih klijenata i demonstrirati našu ekspertizu. Mnogi naši klijenti su spremni da podele svoje iskustvo sa potencijalnim klijentima.",
  },
  {
    question: "Šta se dešava ako nisam zadovoljan tokom razvoja?",
    answer:
      "Naš Agile pristup minimizuje ovaj rizik jer konstantno dobijate feedback i kontrolu nad projektom. Plaćanje radimo u milestone-ima (npr. 30% početak, 30% nakon MVP-a, 30% nakon beta verzije, 10% finalizacija), tako da plaćate tek kada vidite rezultate. Ako niste zadovoljni, radimo revizije dok ne budete. Imamo satisfaction guarantee - ako funkcionalnost ne radi kako je specifikovan, ispravljamo bez dodatne naplate.",
  },
];

export default function SoftwareFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
        Često Postavljana Pitanja
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="font-semibold text-gray-900 pr-4">
                {faq.question}
              </span>
              <FaChevronDown
                className={`text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
