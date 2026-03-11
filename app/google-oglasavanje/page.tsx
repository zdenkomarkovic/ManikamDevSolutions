import type { Metadata } from "next";
import GoogleAdsClient from "./GoogleAdsClient";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/googleAds/sr.json`);
  return {
    title: messages.googleAds.page.title,
    description: messages.googleAds.page.description,
    alternates: {
      canonical: "https://manikamwebsolutions.com/google-oglasavanje",
    },
  };
}

export default async function GoogleOglasavanjePage() {
  const mainMsgs = await import(`@/lang/sr.json`);
  const googleAdsMsgs = await import(`@/lang/googleAds/sr.json`);
  const messages = { ...mainMsgs.default, ...googleAdsMsgs.default };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <GoogleAdsClient locale={"sr"} messages={messages as any} />;
}
