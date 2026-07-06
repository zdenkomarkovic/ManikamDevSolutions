"use client";

import React from "react";
import { MessagesProvider } from "@/lib/MessagesContext";
import ContactForm from "../ContactForm";

// Type for the message structure
type MessageValue = string | { [key: string]: MessageValue };
type Messages = Record<string, MessageValue>;

interface ContactClientProps {
  messages: Messages;
}

export default function ContactClient({ messages }: ContactClientProps) {
  return (
    <MessagesProvider locale="sr" messages={messages}>
      <div className="bg-gray-900/90">
        <ContactForm />
      </div>
    </MessagesProvider>
  );
}
