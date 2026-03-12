import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import { Messages } from "@/types/messages";
import { Metadata } from "next";
import { getIntl } from "@/lib/intl";
import ParticlesBackground from "@/components/ParticlesBackground";

const Section1 = dynamic(() => import("@/components/Section1"), { ssr: false });
const Usluge = dynamic(() => import("@/components/Usluge"), { ssr: false });
const Reference = dynamic(() => import("@/components/Reference"), { ssr: false });

export async function generateMetadata(): Promise<Metadata> {
  const intl = await getIntl("sr");
  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({ id: "page.home.head.meta.description" });
  const ogImage = `https://manikamwebsolutions.com/api/og?title=${encodeURIComponent(title)}`;
  return {
    title,
    description,
    alternates: {
      canonical: "https://manikamwebsolutions.com/",
    },
    openGraph: {
      url: "https://manikamwebsolutions.com/",
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

const defaultSection = {
  title: "",
  span: "",
  title2: "",
  title3: "",
  span2: "",
  phone: "",
  subtitle: "",
  span3: "",
  subtitle2: "",
  span4: "",
  subtitle3: "",
  span5: "",
  email_button: "",
  email_address: "",
  call_button: "",
};

export default async function Home() {
  const intl = await getIntl("sr");
  const messages = intl.messages as unknown as Messages;

  const heroTitle = intl.formatMessage({ id: "hero.title" });
  const cards = messages.cards ?? [];
  const usluge = messages.usluge ?? [];
  const section = messages.section ?? defaultSection;
  const uslugeTitle = intl.formatMessage({ id: "usluge.title" });
  const refLink = intl.formatMessage({ id: "reference.link" });
  const referenceTitle = intl.formatMessage({ id: "reference.title" });

  return (
    <main>
      <div className="bg-gray-900/95">
        <ParticlesBackground />
        <Hero title={heroTitle} section={section} />
        <Section1 section={section} cards={cards} />
        <Usluge usluge={usluge} title={uslugeTitle} />
        <Reference refLink={refLink} title={referenceTitle} />
      </div>
    </main>
  );
}
