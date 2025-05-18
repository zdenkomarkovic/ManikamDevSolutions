import Hero from "@/components/Hero";
import Reference from "@/components/Reference";
import Section1 from "@/components/Section1";
import Usluge from "@/components/Usluge";
import { generateAlternateLinks } from "@/lib/seo";
import { Messages } from "@/types/messages";
import { Metadata } from "next";
import { getIntl } from "../../lib/intl";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers();
  const locale = h.get("x-next-locale") ?? "en";
  const intl = await getIntl(locale);

  return {
    title: intl.formatMessage({ id: "page.home.head.title" }),
    description: intl.formatMessage({ id: "page.home.head.meta.description" }),
    alternates: generateAlternateLinks(""),
  };
}

const defaultSection = {
  title: "",
  span: "",
  title2: "",
  title3: "",
  span2: "",
  subtitle: "",
  span3: "",
  subtitle2: "",
  span4: "",
  subtitle3: "",
  span5: "",
};

export default async function Home() {
  const h = await headers();
  const locale = h.get("x-next-locale") ?? "en";
  const intl = await getIntl(locale);
  const messages = intl.messages as Messages;
  const heroTitle = intl.formatMessage({ id: "hero.title" });

  const cards = messages.cards ?? [];
  const usluge = messages.usluge ?? [];
  const section = messages.section ?? defaultSection;

  return (
    <main>
      <div className="">
        <Hero title={heroTitle} />
        <Section1 section={section} cards={cards} />
        <Usluge usluge={usluge} />
        <Reference />
      </div>
    </main>
  );
}
