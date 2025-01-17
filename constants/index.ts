export const NavList = [
  {
    title: "Naslovna",
    route: "/",
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
    title: "Potreban vam je prilagođeni softver za vaš biznis?",
    mim: "Naša firma specijalizovana je za razvoj prilagođenog softvera, kreiranog u konsultacijama sa klijentima i prema njihovim specifičnim potrebama. Od ideje do implementacije, pružamo kompletna rešenja koja pomažu klijentima da automatizuju i olakšaju svoj rad. Ako vam je potrebna bolja organizacija, veća efikasnost i smanjenje manuelnog rada, možemo kreirati softver tačno prema vašim potrebama.",
    img: "/images/hero2.jpg",
  },
  {
    title: "Vaš sajt ne donosi dovoljno novih klijenata?",
    mim: "Vaš sajt ne privlači dovoljno potencijalnih klijenata? Možda je vreme za osveženje dizajna! Kreiramo upečatljive, modernizovane sajtove koji ne samo da izgledaju fantastično, već i ostavljaju snažan utisak na posetioce. Povećajte angažman i učinite da vaš sajt bude nezaboravan!",
    img: "/images/hero.jpg",
  },
  {
    title: "Povećajte posete uz SEO optimizaciju!",
    mim: "Vaš sajt nema dovoljno poseta? Pomoću SEO optimizacije možete povećati vidljivost na pretraživačima i privući više korisnika. Nudimo detaljnu analizu, strateško planiranje i implementaciju rešenja koja donose rezultate. Poboljšajte poziciju na Google-u i nadmašite konkurenciju već danas",
    img: "/images/sijalica.jpg",
  },
  {
    title: "Potreban vam je sajt koji možete sami ažurirati?",
    mim: "Sa našim CMS rešenjem, dobijate sajt koji možete lako i brzo ažurirati bez potrebe za tehničkim znanjem. Bilo da želite da dodate nove stranice, promenite sadržaj ili prilagodite dizajn, sve to možete uraditi sami. Ovaj sistem omogućava potpunu kontrolu nad vašim sajtom, dok mi pružamo podršku kada vam zatreba.",
    img: "/images/kljuc.jpg",
  },
  {
    title: "Želite da pokrenete oglašavanje?",
    mim: "Nadmašite konkurenciju i povećajte svoju online vidljivost uz profesionalno kreirane kampanje koje donose rezultate. Nudimo optimizaciju, analitiku i prilagođena rešenja kako biste postigli najbolje performanse na Google pretragama.",
    img: "/images/planeta.jpg",
  },
];
interface UslugeData {
  title: string;
  text: string;
  img: string;
  span: string;
}

export const uslugeData: UslugeData[] = [
  {
    img: "/images/software.svg",
    title: "WEB DEVELOPMENT",
    text: "Koristimo tehnologije React.js, Node.js i Next.js Sarađujemo sa domaćim i stranim klijentima, a takođe razvijamo i sopstvena digitalna rešenja, poput aplikacije",
    span: " Taxi report",
  },
  {
    img: "/images/sajt.svg",
    title: "SAJT",
    text: "Ne koristimo alate za izradu sajtova, već ih programiramo u Next.js, jednoj od najbržih tehnologija, što osigurava brzinu i bolji rang na Google. Nudimo osnovne sajtove do 10 stranica i prilagođena rešenja za specifične potrebe klijenata.",
    span: "",
  },
  {
    img: "/images/cms.png",
    title: "SAJT KOJI SAMI AŽURIRATE",
    text: "CMS (Content Management System) omogućava korisnicima da sami ažuriraju stranice, dodaju ili brišu sadržaj i stranice. Idealan je za blogove, portale i sajtove sa čestim izmenama sadržaja.",
    span: "",
  },
  {
    img: "/images/ecomm.png",
    title: "ONLINE PRODAVNICA",
    text: "Custom online prodavnice pružaju prilagođen prikaz za određenu grupu proizvoda, uz dodatne opcije i funkcionalnosti koje poboljšavaju prodaju. Idealno rešenje za uspešnu online prodaju.",
    span: "",
  },
  {
    img: "/images/seo.svg",
    title: "SEO",
    text: "Želite bolje pozicioniranje u pretrazi? Naš visokokvalitetni SEO poboljšava poziciju vašeg sajta i povećava vidljivost. Optimizujemo sadržaj, ključne reči i tehničke aspekte sajta za bolje rezultate i veći saobraćaj.",
    span: "",
  },
  {
    img: "/images/odrzavanje.png",
    title: "ODRŽAVANJE",
    text: "Svaki sajt vremenom zahteva održavanje. Kako tehnologije brzo napreduju, važno je redovno prilagođavanje kako bi sajt ostao funkcionalan i u toku s najnovijim standardima.",
    span: "",
  },
  {
    img: "/images/destination.png",
    title: "TRANZICIJA SAJTA",
    text: "Bez obzira na razlog, ako želite da promenite hosting provajdera, naš tim će se pobrinuti za siguran i besprekidan transfer vašeg sajta na provajdera po vašem izboru.",
    span: "",
  },
  {
    img: "/images/redesign.png",
    title: "REDIZAJN SAJTA",
    text: "Ako je vaš sajt stariji, verovatno je vreme za redizajn. Redizajn uključuje modernizaciju dizajna uz zadržavanje dela postojećeg sadržaja i dodavanje novog, čineći ga funkcionalnijim i vizuelno privlačnijim.",
    span: "",
  },
  {
    img: "/images/consulting.png",
    title: "KONSALTING",
    text: "Niste sigurni šta vam je potrebno? Zakažite sastanak sa nama, rado ćemo vam predstaviti šta sve možemo da uradimo za vaš biznis i kako da postignete bolje rezultate.",
    span: "",
  },
  {
    img: "/images/cloud.png",
    title: "HOSTING",
    text: "U saradnji sa našim partnerima, nudimo hosting i domene za sajtove koje smo izradili ili redizajnirali, osiguravajući pouzdanu podršku i optimalne performanse za vaš sajt ili web softver.",
    span: "",
  },
  {
    img: "/images/ads.svg",
    title: "GOOGLE OGLAŠAVANJE",
    text: "Uz našu uslugu digitalnog oglašavanja, vaš brend će dobiti potrebnu vidljivost i pažnju, što će vam omogućiti da se izdvojite iz konkurencije i dosegnete ciljaniju publiku.",
    span: "",
  },
];
