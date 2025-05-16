// app/[locale]/layout.tsx
import "../globals.css";
import { dir } from "i18next";
import { languages } from "@/i18n/settings";
import TranslationsProvider from "@/components/TranslationsProvider";

export async function generateStaticParams() {
  return languages.map((lng) => ({ locale: lng }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <TranslationsProvider locale={locale}>{children}</TranslationsProvider>
  );
}
