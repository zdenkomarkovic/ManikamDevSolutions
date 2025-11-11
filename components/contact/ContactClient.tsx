"use client";

import React, { useEffect, useState } from "react";
import { MessagesProvider } from "@/lib/MessagesContext";
import { useLocale } from "@/lib/LocaleContext";
import ContactForm from "../ContactForm";

// Type for the message structure
type MessageValue = string | { [key: string]: MessageValue };
type Messages = Record<string, MessageValue>;

export default function ContactClient() {
  const { locale } = useLocale();
  const [messages, setMessages] = useState<Messages | null>(null);

  useEffect(() => {
    async function loadMessages() {
      try {
        // Load main messages
        const mainMsgs = await import(`@/lang/${locale}.json`);
        // Load contact messages
        const contactMsgs = await import(`@/lang/contact/${locale}.json`);

        // Merge messages
        const mergedMessages = {
          ...mainMsgs.default,
          ...contactMsgs.default,
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
      <div className="bg-gray-900/90">
        <ContactForm />
      </div>
    </MessagesProvider>
  );
}
