import React from "react";
import type { Metadata } from "next";
import IzradaWebShopaClient from "./IzradaWebShopaClient";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/webshopDevelopment/sr.json`);
  return {
    title: messages.webshopDevelopment.page.title,
    description: messages.webshopDevelopment.page.description,
    alternates: {
      canonical: "https://manikamwebsolutions.com/izrada-web-shopa",
    },
  };
}

export default async function Page() {
  const mainMsgs = await import(`@/lang/sr.json`);
  const webshopDevMsgs = await import(`@/lang/webshopDevelopment/sr.json`);
  const messages = { ...mainMsgs.default, ...webshopDevMsgs.default };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <IzradaWebShopaClient locale={"sr"} messages={messages as any} />;
}
