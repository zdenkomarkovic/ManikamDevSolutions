"use client";

import React, { useEffect, useState } from "react";
import { MessagesProvider } from "@/lib/MessagesContext";
import { useLocale } from "@/lib/LocaleContext";
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

export default function SoftwareClient() {
  const { locale } = useLocale();
  const [messages, setMessages] = useState<Messages | null>(null);

  useEffect(() => {
    async function loadMessages() {
      try {
        // Load main messages
        const mainMsgs = await import(`@/lang/${locale}.json`);
        // Load software messages
        const softwareMsgs = await import(`@/lang/software/${locale}.json`);

        // Merge messages
        const mergedMessages = {
          ...mainMsgs.default,
          ...softwareMsgs.default,
        };

        setMessages(mergedMessages);
      } catch (error) {
        console.error("Failed to load messages:", error);
      }
    }
    loadMessages();
  }, [locale]);

  if (!messages) {
    return null; // or loading spinner
  }

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
