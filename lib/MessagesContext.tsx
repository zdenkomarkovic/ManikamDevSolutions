"use client";

import { createContext, useContext } from "react";
import { createIntl, IntlShape } from "@formatjs/intl";
import type { Locale } from "@/i18n-config";

type MessagesContextType = {
  intl: IntlShape;
  locale: Locale;
};

const MessagesContext = createContext<MessagesContextType | null>(null);

export function useMessages() {
  const context = useContext(MessagesContext);
  if (!context) {
    throw new Error("useMessages must be used within MessagesProvider");
  }
  return context.intl;
}

export function useCurrentLocale() {
  const context = useContext(MessagesContext);
  if (!context) {
    throw new Error("useCurrentLocale must be used within MessagesProvider");
  }
  return context.locale;
}

// Helper function to flatten nested messages object
function flattenMessages(nestedMessages: Record<string, any>, prefix = ''): Record<string, string> {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    } else if (typeof value === 'object' && value !== null) {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {} as Record<string, string>);
}

export function MessagesProvider({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: Locale;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  messages: Record<string, any>;
}) {
  const flatMessages = flattenMessages(messages);

  const intl = createIntl({
    locale,
    messages: flatMessages,
  });

  return (
    <MessagesContext.Provider value={{ intl, locale }}>
      {children}
    </MessagesContext.Provider>
  );
}
