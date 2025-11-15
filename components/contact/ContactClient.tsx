"use client";

import React from "react";
import { MessagesProvider } from "@/lib/MessagesContext";
import { useLocale } from "@/lib/LocaleContext";
import ContactForm from "../ContactForm";

// Type for the message structure
type MessageValue = string | { [key: string]: MessageValue };
type Messages = Record<string, MessageValue>;

interface ContactClientProps {
  messages: Messages;
}

export default function ContactClient({ messages }: ContactClientProps) {
  const { locale } = useLocale();

  return (
    <MessagesProvider locale={locale} messages={messages}>
      <div className="bg-gray-900/90">
        <ContactForm />
      </div>
    </MessagesProvider>
  );
}
