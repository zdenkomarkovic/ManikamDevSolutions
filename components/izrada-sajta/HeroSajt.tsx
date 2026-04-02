"use client";

import React from "react";
import { useMessages } from "@/lib/MessagesContext";

const HeroSajt = () => {
  const intl = useMessages();

  return (
    <div className="container mx-auto text-center">
      <h1 className="py-6 md:py-14 flex flex-col items-center gap-2">
        <span className="text-[36px] leading-tight md:text-7xl bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent font-[1000]">
          {intl.formatMessage({ id: "websiteDevelopment.hero.titleLine1" })}
        </span>
        <span className="text-[17px] leading-tight md:text-5xl bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent font-[800] pb-2">
          {intl.formatMessage({ id: "websiteDevelopment.hero.titleLine2" })}
        </span>
      </h1>
      <p className="text-base md:text-2xl text-gray-100 mb-6 md:mb-10 max-w-4xl mx-auto leading-relaxed">
        {intl.formatMessage({ id: "websiteDevelopment.hero.subtitlePre" })}{" "}
        <span className="font-bold">
          {intl.formatMessage({ id: "websiteDevelopment.hero.subtitleTech" })}
        </span>{" "}
        {intl.formatMessage({ id: "websiteDevelopment.hero.subtitleTechSuffix" })}{" "}
        {intl.formatMessage({ id: "websiteDevelopment.hero.subtitleMid" })}{" "}
        <span className="font-bold">
          {intl.formatMessage({ id: "websiteDevelopment.hero.subtitleCompanies" })}
        </span>
        {intl.formatMessage({ id: "websiteDevelopment.hero.subtitlePost" })}
      </p>
      <button
        onClick={() => {
          const el = document.getElementById("kontakt-forma");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        className="bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-700 hover:to-orange-500 text-white font-semibold text-base md:text-lg px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-orange-500/30"
      >
        Zatražite besplatnu ponudu
      </button>
    </div>
  );
};

export default HeroSajt;
