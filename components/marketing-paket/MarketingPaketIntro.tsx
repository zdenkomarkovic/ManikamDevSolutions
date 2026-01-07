"use client";

import { useMessages } from "@/lib/MessagesContext";

export default function MarketingPaketIntro() {
  const intl = useMessages();

  return (
    <div className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 rounded-3xl p-8 md:p-12 shadow-xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
          {intl.formatMessage({ id: "marketingPaket.intro.title" })}
        </h2>
        <p className="text-base md:text-lg text-gray-800 mb-4 leading-relaxed">
          {intl.formatMessage({ id: "marketingPaket.intro.paragraph1" })}
        </p>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
          {intl.formatMessage({ id: "marketingPaket.intro.paragraph2" })}
        </p>
      </div>
    </div>
  );
}
