"use client";

import { useMessages } from "@/lib/MessagesContext";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function MarketingPaketCTA() {
  const intl = useMessages();

  return (
    <div className="bg-gradient-to-br from-orange-600 to-orange-400 rounded-3xl p-8 md:p-12 shadow-2xl text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
        {intl.formatMessage({ id: "marketingPaket.cta.title" })}
      </h2>
      <p className="text-base md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
        {intl.formatMessage({ id: "marketingPaket.cta.subtitle" })}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          href="https://wa.me/381641967267"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2 shadow-lg"
        >
          <FaWhatsapp className="text-2xl" />
          {intl.formatMessage({ id: "marketingPaket.cta.whatsappButton" })}
        </Link>
        <Link
          href="mailto:manikamwebsolutions@gmail.com"
          className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2 shadow-lg"
        >
          <FaEnvelope className="text-xl" />
          {intl.formatMessage({ id: "marketingPaket.cta.emailButton" })}
        </Link>
      </div>
    </div>
  );
}
