import Hero from "@/components/Hero";
import Reference from "@/components/Reference";
import Section1 from "@/components/Section1";
import Usluge from "@/components/Usluge";
import { generateAlternateLinks } from "@/lib/seo";
import { Metadata, ResolvingMetadata } from "next";

import { getIntl } from "../../lib/intl";

export function generateStaticParams() {
  return [{ locale: "sr" }, { locale: "en" }];
}
export const dynamic = "force-static";
type RouteProps = {
  params: { locale: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  props: RouteProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params; // await params!
  const intl = await getIntl(params.locale);

  return {
    title: intl.formatMessage({ id: "page.home.head.title" }),
    description: intl.formatMessage({ id: "page.home.head.meta.description" }),
    alternates: generateAlternateLinks(""),
  };
}

type HomeProps = {
  params: { locale: string };
};

export default async function Home(props: HomeProps) {
  const params = await props.params;
  const intl = await getIntl(params.locale);
  const heroTitle = intl.formatMessage({ id: "hero.title" });
  const messages = (await getIntl(params.locale)).messages as any;
  const cards = messages.cards;
  const usluge = messages.usluge;
  const section = messages.section;

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
