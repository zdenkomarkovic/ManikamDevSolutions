import type { Metadata } from "next";
import PrivacyClient from "@/components/privacy/PrivacyClient";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/privacy/sr.json`);
  const title = messages.privacy.page.title;
  const description = messages.privacy.page.description;
  return {
    title,
    description,
    alternates: {
      canonical: "https://manikamwebsolutions.com/politika-privatnosti",
      languages: {
        sr: "https://manikamwebsolutions.com/politika-privatnosti",
        en: "https://manikamwebsolutions.com/en/privacy-policy",
      },
    },
  };
}

export default async function PrivacyPage() {
  const mainMsgs = await import(`@/lang/sr.json`);
  const privacyMsgs = await import(`@/lang/privacy/sr.json`);
  const messages = { ...mainMsgs.default, ...privacyMsgs.default };
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <PrivacyClient messages={messages as any} />
  );
}
