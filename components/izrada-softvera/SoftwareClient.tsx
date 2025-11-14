"use client";

import React from "react";
import { MessagesProvider } from "@/lib/MessagesContext";
import type { Locale } from "@/i18n-config";
import SoftwareHero from "./SoftwareHero";
import SoftwareIntro from "./SoftwareIntro";
import SoftwareTypes from "./SoftwareTypes";
import SoftwareCTA from "./SoftwareCTA";
import SoftwareTechnologies from "./SoftwareTechnologies";
import SoftwareFeatures from "./SoftwareFeatures";
import SoftwareProcess from "./SoftwareProcess";
import SoftwareIndustries from "./SoftwareIndustries";
import SoftwareBenefits from "./SoftwareBenefits";
import SoftwareFAQ from "./SoftwareFAQ";

// Type for the message structure
type MessageValue = string | { [key: string]: MessageValue };
type Messages = Record<string, MessageValue>;

type Props = {
  locale: Locale;
  messages: Messages;
};

export default function SoftwareClient({ locale, messages }: Props) {
  return (
    <MessagesProvider locale={locale} messages={messages}>
      <div className=" bg-gray-900/90  pt-24 pb-6 md:pb-16">
        <div className="container mx-auto px-3 md:px-16 space-y-8 md:space-y-16">
          <SoftwareHero />
          <SoftwareIntro />
          <SoftwareTypes />
          <SoftwareCTA />
          <SoftwareTechnologies />
          <SoftwareFeatures />
          <SoftwareProcess />
          <SoftwareIndustries />
          <SoftwareBenefits />
          <SoftwareFAQ />
        </div>
      </div>
    </MessagesProvider>
  );
}
