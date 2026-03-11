import React from "react";
import type { Metadata } from "next";
import SocialMediaClient from "@/components/drustvene-mreze/SocialMediaClient";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/social-media/sr.json`);
  return {
    title: messages.socialMedia.page.title,
    description: messages.socialMedia.page.description,
    alternates: {
      canonical: "https://manikamwebsolutions.com/drustvene-mreze",
    },
  };
}

export default async function DrustveneМrezePage() {
  const mainMsgs = await import(`@/lang/sr.json`);
  const socialMediaMsgs = await import(`@/lang/social-media/sr.json`);
  const messages = { ...mainMsgs.default, ...socialMediaMsgs.default };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <SocialMediaClient locale={"sr"} messages={messages as any} />;
}
