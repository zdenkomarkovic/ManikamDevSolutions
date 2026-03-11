import type { Metadata } from "next";
import SoftwareClient from "@/components/izrada-softvera/SoftwareClient";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/software/sr.json`);
  return {
    title: messages.software.page.title,
    description: messages.software.page.description,
    alternates: {
      canonical: "https://manikamwebsolutions.com/izrada-softvera",
    },
  };
}

export default async function IzradaSoftveraPage() {
  const mainMsgs = await import(`@/lang/sr.json`);
  const softwareMsgs = await import(`@/lang/software/sr.json`);
  const messages = { ...mainMsgs.default, ...softwareMsgs.default };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <SoftwareClient locale={"sr"} messages={messages as any} />;
}
