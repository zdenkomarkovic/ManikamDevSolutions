export type Messages = {
  "page.home.head.title": string;
  "page.home.head.meta.description": string;
  "hero.title": string;
  section: {
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
  cards: {
    title: string;
    mim: string;
    img: string;
  }[];
  usluge: {
    img: string;
    title: string;
    text: string;
    span: string;
  }[];
  "ourWork.title"?: string;
  "ourWork.subtitle"?: string;
  "ourWork.items"?: {
    title: string;
    description: string;
    image: string;
  }[];
};
