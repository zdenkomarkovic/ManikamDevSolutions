export const NavList = [
  {
    title: "Naslovna",
    route: "/",
  },
  {
    title: "O nama",
    route: "/about",
  },
  {
    title: "Usluge",
    route: "/services",
    hasDropdown: true,
    dropdownItems: [
      { title: "Izrada sajtova", route: "/services/#website" },
      { title: "Izrada webshopova", route: "/services/#webshop" },
      { title: "Odrzavanje", route: "/services/#maintaince" },
      { title: "SEO Optimizacija", route: "/services/#seo" },
    ],
  },
  {
    title: "Kontakt",
    route: "/contact",
  },
];

interface CardData {
  title: string;
  mim: string;
  img: string;
}

export const cardData: CardData[] = [
  {
    title: "Vaš sajt ne generiše dovoljno potencijalnih klijenata?",
    mim: "Ne prepustite dizajn svog sajta slučaju – dozvolite nam da napravimo besplatan demo dizajn sa predlozima koji će vam doneti više potencijalnih klijenata! Bićete oduševljeni onim što vidite.",
    img: "/images/hero2.jpg",
  },
  {
    title: "Moj sajt ne dobija dovoljno poseta?",
    mim: "Najbolji deo? Pobrinemo se da vaš sajt postane magnet za mušterije koje ne mogu da odole vašem šarmu. Dakle, ako ste mali ili srednji biznis koji želi da izgleda sjajno, bude lako pronađen i vlada online džunglom, mi smo tim za vas!",
    img: "/images/hero.jpg",
  },
  {
    title: "Moj sajt ne dobija dovoljno poseta?",
    mim: "Naš visokokvalitetni SEO pruža vam maksimalnu vrednost za uloženi novac. Izbacujemo suvišne stvari za maksimalan efekat. Mi to zovemo Pametni SEO.",
    img: "/images/sijalica.jpg",
  },
  {
    title:
      "Niste sigurni koga da angažujete za unapređenje vaše online prisutnosti?",
    mim: "Imamo stotine recenzija sa 5 zvezdica. Svakog meseca zakazujemo 250 sastanaka za naš prodajni tim koristeći oglase, SEO i dobre stope konverzije. Omogućavamo vam da nas isprobate besplatno. Ne odlučujte na osnovu emocija, već na osnovu podataka.",
    img: "/images/kljuc.jpg",
  },
  {
    title: "Moji marketing i prodajni podaci nisu povezani?",
    mim: "Naše digitalno oglašavanje je kao espresso za vaš brend – pružiće vam energiju i pažnju potrebnu da nadmašite konkurenciju.",
    img: "/images/planeta.jpg",
  },
];
interface UslugeData {
  title: string;
  text: string;
  img: string;
}

export const uslugeData: UslugeData[] = [
  {
    title: "Vaš sajt ne generiše dovoljno potencijalnih klijenata?",
    text: "Ne prepustite dizajn svog sajta slučaju – dozvolite nam da napravimo besplatan demo dizajn sa predlozima koji će vam doneti više potencijalnih klijenata! Bićete oduševljeni onim što vidite.",
    img: "/images/hero2.jpg",
  },
  {
    title: "Moj sajt ne dobija dovoljno poseta?",
    text: "Najbolji deo? Pobrinemo se da vaš sajt postane magnet za mušterije koje ne mogu da odole vašem šarmu. Dakle, ako ste mali ili srednji biznis koji želi da izgleda sjajno, bude lako pronađen i vlada online džunglom, mi smo tim za vas!",
    img: "/images/hero.jpg",
  },
  {
    title: "Moj sajt ne dobija dovoljno poseta?",
    text: "Naš visokokvalitetni SEO pruža vam maksimalnu vrednost za uloženi novac. Izbacujemo suvišne stvari za maksimalan efekat. Mi to zovemo Pametni SEO.",
    img: "/images/sijalica.jpg",
  },
  {
    title:
      "Niste sigurni koga da angažujete za unapređenje vaše online prisutnosti?",
    text: "Imamo stotine recenzija sa 5 zvezdica. Svakog meseca zakazujemo 250 sastanaka za naš prodajni tim koristeći oglase, SEO i dobre stope konverzije. Omogućavamo vam da nas isprobate besplatno. Ne odlučujte na osnovu emocija, već na osnovu podataka.",
    img: "/images/kljuc.jpg",
  },
  {
    title: "Moji marketing i prodajni podaci nisu povezani?",
    text: "Naše digitalno oglašavanje je kao espresso za vaš brend – pružiće vam energiju i pažnju potrebnu da nadmašite konkurenciju.",
    img: "/images/planeta.jpg",
  },
];
