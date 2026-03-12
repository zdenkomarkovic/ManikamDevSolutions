import Image from "next/image";
import Link from "next/link";
import HeroPhoneLink from "./HeroPhoneLink";
import heroImg from "../public/images/laptop.jpg";

const services = [
  { text: "Izrada web sajta", href: "/izrada-sajta" },
  { text: "Izrada online prodavnica", href: "/izrada-web-shopa" },
  { text: "Redizajn sajta", href: "/redizajn-migracija" },
  { text: "Google Ads kampanje", href: "/google-oglasavanje" },
  { text: "SEO usluge", href: "/seo-optimizacija" },
  { text: "Marketing društvenih mreža", href: "/drustvene-mreze" },
  { text: "Razvoj softvera", href: "/izrada-softvera" },
];

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

const Hero = ({ title, section }: { title: string; section: SectionData }) => {
  return (
    <div className="relative h-[100dvh] w-full overflow-hidden">
      <div className="relative container mx-auto px-[5px] md:px-4 h-[100dvh] overflow-hidden">
        {/* H1 naslov */}
        <div className="absolute bottom-6 md:bottom-10 left-4 md:left-16 z-20">
          <h1 className="font-extrabold flex flex-col gap-1 mb:gap-8 relative text-[11.5vw] md:text-[150px] pb-2 md:pb-10">
            <span className="w-fit pt-10 pb-4 md:pb-28 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              {" "}Manikam{" "}
            </span>
            <span>
              <span className="w-fit bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                Web{" "}
              </span>
              <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Solutions{" "}
              </span>
            </span>
          </h1>
          <p className="leading-none text-base font-bold md:text-6xl py-2 pt-3 md:pt-8 text-white">
            {title}
          </p>
          <div className="md:hidden">
            <p className="text-lg leading-tight text-white italic md:text-5xl pb-5 md:pb-12">
              {section.title} {section.title3}
              <span className="font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                {section.span}{" "}
              </span>
              {section.title2}
            </p>
            <HeroPhoneLink
              phone={section.phone}
              span4={section.span4}
              span2={section.span2}
            />
          </div>
        </div>

        {/* Animacija usluga - Desktop */}
        <div className="absolute top-28 right-16 z-20 hidden md:block">
          <div className="space-y-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="hero-service-item"
                style={{
                  marginLeft: `${index * 20}px`,
                  animationDelay: `${index * 0.4}s`,
                }}
              >
                <Link href={service.href} className="block">
                  <div className="ig-scale-text relative z-20 bg-gradient-to-r from-orange-600 to-transparent text-white text-left font-bold px-3 py-1 rounded-full w-fit hover:from-orange-500 hover:scale-105 transition-transform duration-200 cursor-pointer">
                    {service.text}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Animacija usluga - Mobilni */}
        <div className="absolute top-24 right-2 z-20 md:hidden">
          <div className="space-y-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="hero-service-item"
                style={{
                  marginLeft: `${index * 12}px`,
                  animationDelay: `${index * 0.4}s`,
                }}
              >
                <Link href={service.href} className="block">
                  <div className="ig-scale-text text-sm bg-gradient-to-r from-orange-600 to-gray-600 text-white text-left px-3 py-0.5 rounded-lg w-fit hover:from-orange-500 hover:scale-105 transition-transform duration-200 cursor-pointer">
                    {service.text}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background image */}
      <div className="absolute top-0 z-0 w-full h-screen">
        <Image
          src={heroImg}
          alt="Background image"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
    </div>
  );
};

export default Hero;
