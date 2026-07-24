"use client";

import React from "react";
import { MessagesProvider } from "@/lib/MessagesContext";
import type { Locale } from "@/i18n-config";
import ContactForm from "../ContactForm";

// Type for the message structure
type MessageValue = string | { [key: string]: MessageValue };
type Messages = Record<string, MessageValue>;

interface ContactClientProps {
  messages: Messages;
  locale?: Locale;
}

export default function ContactClient({ messages, locale = "sr" }: ContactClientProps) {
  return (
    <MessagesProvider locale={locale} messages={messages}>
      <div className="bg-gray-900/90">
        <ContactForm />
      </div>
    </MessagesProvider>
  );
}
