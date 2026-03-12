"use client";

import dynamic from "next/dynamic";

const Section1 = dynamic(() => import("@/components/Section1"));
const Usluge = dynamic(() => import("@/components/Usluge"));
const Reference = dynamic(() => import("@/components/Reference"));

type CardData = {
  title: string;
  mim: string;
  img: string;
};

type SectionData = {
  title: string;
  span: string;
  title2: string;
  title3: string;
  span2: string;
  phone: string;
  subtitle: string;
  span3: string;
  subtitle2: string;
  span4: string;
  subtitle3: string;
  span5: string;
  email_button: string;
  email_address: string;
  call_button: string;
};

type UslugeItem = {
  img: string;
  title: string;
  text: string;
  span: string;
};

export default function HomeBelowFold({
  section,
  cards,
  usluge,
  uslugeTitle,
  refLink,
  referenceTitle,
}: {
  section: SectionData;
  cards: CardData[];
  usluge: UslugeItem[];
  uslugeTitle: string;
  refLink: string;
  referenceTitle: string;
}) {
  return (
    <>
      <Section1 section={section} cards={cards} />
      <Usluge usluge={usluge} title={uslugeTitle} />
      <Reference refLink={refLink} title={referenceTitle} />
    </>
  );
}
