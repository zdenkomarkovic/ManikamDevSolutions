"use client";

import {
  FaPenFancy,
  FaCalendarAlt,
  FaBullhorn,
  FaChartLine,
  FaUsers,
  FaComments,
  FaCamera,
  FaHashtag,
} from "react-icons/fa";

const services = [
  {
    icon: FaPenFancy,
    title: "Kreiranje Sadržaja",
    description: "Profesionalni tekstovi, grafike i video sadržaj prilagođen vašoj publici.",
  },
  {
    icon: FaCalendarAlt,
    title: "Planiranje i Objava",
    description: "Strateško planiranje sadržaja i redovna objava u optimalna vremena.",
  },
  {
    icon: FaBullhorn,
    title: "Facebook i Instagram Oglašavanje",
    description: "Ciljane reklamne kampanje koje donose merljive rezultate i ROI.",
  },
  {
    icon: FaChartLine,
    title: "Analitika i Izveštaji",
    description: "Praćenje performansi, analiza podataka i detaljni mesečni izveštaji.",
  },
  {
    icon: FaUsers,
    title: "Rast Pratilaca",
    description: "Strategije za organsko i plaćeno povećanje broja kvalitetnih pratilaca.",
  },
  {
    icon: FaComments,
    title: "Community Management",
    description: "Odgovaranje na komentare, poruke i izgradnja angažovane zajednice.",
  },
  {
    icon: FaCamera,
    title: "Stories i Reels",
    description: "Kreiranje dinamičnog vizuelnog sadržaja za Stories i Instagram Reels.",
  },
  {
    icon: FaHashtag,
    title: "Hashtag Strategija",
    description: "Istraživanje i primena optimalnih hashtag-ova za veći doseg.",
  },
];

export default function SocialMediaServices() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
        Naše Usluge Upravljanja Društvenim Mrežama
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <service.icon className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
