"use client";
import { createContext, useContext } from "react";
import { createIntl, IntlShape } from "@formatjs/intl";

type MessagesContextType = { intl: IntlShape; locale: "sr" };
type MessageValue = string | { [key: string]: MessageValue };
type NestedMessages = Record<string, MessageValue>;

const MessagesContext = createContext<MessagesContextType | null>(null);

export function useMessages() {
  const context = useContext(MessagesContext);
  if (!context) throw new Error("useMessages must be used within MessagesProvider");
  return context.intl;
}

export function useCurrentLocale() {
  return "sr" as const;
}

function flattenMessages(nestedMessages: NestedMessages, prefix = ''): Record<string, string> {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    } else if (typeof value === 'object' && value !== null) {
      Object.assign(messages, flattenMessages(value as NestedMessages, prefixedKey));
    }
    return messages;
  }, {} as Record<string, string>);
}

export function MessagesProvider({
  children,
  messages,
}: {
  children: React.ReactNode;
  locale?: string;
  messages: NestedMessages;
}) {
  const flatMessages = flattenMessages(messages);
  const intl = createIntl({ locale: "sr", messages: flatMessages });
  return (
    <MessagesContext.Provider value={{ intl, locale: "sr" }}>
      {children}
    </MessagesContext.Provider>
  );
}
