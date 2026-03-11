import React from "react";
import type { Metadata } from "next";
import IzradaSajtaClient from "./IzradaSajtaClient";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/websiteDevelopment/sr.json`);
  return {
    title: messages.websiteDevelopment.page.title,
    description: messages.websiteDevelopment.page.description,
    alternates: {
      canonical: "https://manikamwebsolutions.com/izrada-sajta",
    },
  };
}

export default async function Page() {
  const mainMsgs = await import(`@/lang/sr.json`);
  const websiteDevMsgs = await import(`@/lang/websiteDevelopment/sr.json`);
  const messages = { ...mainMsgs.default, ...websiteDevMsgs.default };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <IzradaSajtaClient locale={"sr"} messages={messages as any} />;
}
