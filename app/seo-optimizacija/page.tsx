import { Metadata } from "next";
import SEOPageClient from "./SEOPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await import(`@/lang/seoOptimization/sr.json`);
  return {
    title: messages.seoOptimization.page.title,
    description: messages.seoOptimization.page.description,
    alternates: {
      canonical: "https://manikamwebsolutions.com/seo-optimizacija",
    },
  };
}

export default async function SEOOptimizacijaPage() {
  const mainMsgs = await import(`@/lang/sr.json`);
  const seoOptMsgs = await import(`@/lang/seoOptimization/sr.json`);
  const messages = { ...mainMsgs.default, ...seoOptMsgs.default };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <SEOPageClient locale={"sr"} messages={messages as any} />;
}
