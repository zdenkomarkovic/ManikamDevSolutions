"use client";

import React from "react";
import { useMessages } from "@/lib/MessagesContext";

const HeroSajt = () => {
  const intl = useMessages();

  return (
    <div className="container mx-auto text-center">
      <h1 className="text-[41px] leading-tight md:text-8xl bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent font-[1000] py-6 md:py-14">
        {intl.formatMessage({ id: "websiteDevelopment.hero.title" })}
      </h1>
      <p className="text-base md:text-2xl text-gray-100 mb-5 md:mb-8 max-w-4xl mx-auto md:first-letter:leading-relaxed">
        {intl.formatMessage({ id: "websiteDevelopment.hero.subtitle" })}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <span className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 px-4 py-2 rounded-full text-sm font-semibold">
          {intl.formatMessage({ id: "websiteDevelopment.hero.badge1" })}
        </span>
        <span className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 px-4 py-2 rounded-full text-sm font-semibold">
          {intl.formatMessage({ id: "websiteDevelopment.hero.badge2" })}
        </span>
        <span className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 px-4 py-2 rounded-full text-sm font-semibold">
          {intl.formatMessage({ id: "websiteDevelopment.hero.badge3" })}
        </span>
      </div>
    </div>
  );
};

export default HeroSajt;
