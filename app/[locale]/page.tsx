import Hero from "@/components/Hero";
import Reference from "@/components/Reference";
import Section1 from "@/components/Section1";
import Usluge from "@/components/Usluge";
import OurWork from "@/components/OurWork";
import { generateAlternateLinks } from "@/lib/seo";
import { Messages } from "@/types/messages";
import { Metadata } from "next";
import { getIntl } from "../../lib/intl";
import { i18n } from "@/i18n-config";
import { isValidLocale } from "@/lib/locale";
import ParticlesBackground from "@/components/ParticlesBackground";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const awaitedParams = await params;
  const localeParam = awaitedParams.locale;

  const locale = isValidLocale(localeParam) ? localeParam : i18n.defaultLocale;

  const intl = await getIntl(locale);

  return {
    title: intl.formatMessage({ id: "page.home.head.title" }),
    description: intl.formatMessage({ id: "page.home.head.meta.description" }),
    alternates: generateAlternateLinks("", locale),
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

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const awaitedParams = await params;
  const localeParam = awaitedParams.locale;

  const locale = isValidLocale(localeParam) ? localeParam : i18n.defaultLocale;

  const intl = await getIntl(locale);
  const messages = intl.messages as unknown as Messages;

  const heroTitle = intl.formatMessage({ id: "hero.title" });
  const cards = messages.cards ?? [];
  const usluge = messages.usluge ?? [];
  const section = messages.section ?? defaultSection;
  const uslugeTitle = intl.formatMessage({ id: "usluge.title" });
  const refLink = intl.formatMessage({ id: "reference.link" });
  const refTitle = intl.formatMessage({ id: "reference.title" });
  const ourWorkTitle = intl.formatMessage({ id: "ourWork.title" });
  const ourWorkSubtitle = intl.formatMessage({ id: "ourWork.subtitle" });
  const ourWorkItems = messages["ourWork.items"] ?? [];

  return (
    <main>
      <div className="bg-gray-900/95">
        <ParticlesBackground />
        <Hero title={heroTitle} section={section} />
        <Section1 section={section} cards={cards} />
        <Usluge usluge={usluge} title={uslugeTitle} />
        <Reference refLink={refLink} title={ourWorkTitle} />
        <OurWork title={ourWorkTitle} subtitle={ourWorkSubtitle} works={ourWorkItems} />
      </div>
    </main>
  );
}
