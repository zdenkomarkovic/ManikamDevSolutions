import { Metadata } from "next";
import SocialMediaHero from "@/components/drustvene-mreze/SocialMediaHero";
import SocialMediaIntro from "@/components/drustvene-mreze/SocialMediaIntro";
import SocialMediaServices from "@/components/drustvene-mreze/SocialMediaServices";
import SocialMediaPlatforms from "@/components/drustvene-mreze/SocialMediaPlatforms";
import SocialMediaContent from "@/components/drustvene-mreze/SocialMediaContent";
import SocialMediaAds from "@/components/drustvene-mreze/SocialMediaAds";
import SocialMediaProcess from "@/components/drustvene-mreze/SocialMediaProcess";
import SocialMediaResults from "@/components/drustvene-mreze/SocialMediaResults";
import SocialMediaPackages from "@/components/drustvene-mreze/SocialMediaPackages";
import SocialMediaFAQ from "@/components/drustvene-mreze/SocialMediaFAQ";
import SocialMediaCTA from "@/components/drustvene-mreze/SocialMediaCTA";

export const metadata: Metadata = {
  title: "Upravljanje Društvenim Mrežama - Facebook i Instagram Marketing | Manikam Dev Solutions",
  description:
    "Profesionalno upravljanje Facebook i Instagram profilima. Kreiranje sadržaja, oglašavanje, povećanje angažmana i izgradnja brenda na društvenim mrežama. Prilagođene strategije za vaš biznis.",
  keywords: [
    "društvene mreže",
    "social media marketing",
    "facebook marketing",
    "instagram marketing",
    "upravljanje drustvenim mrezama",
    "facebook oglašavanje",
    "instagram oglašavanje",
    "kreiranje sadržaja",
    "content marketing",
    "social media strategy",
    "facebook ads",
    "instagram ads",
    "povećanje pratilaca",
    "engagement",
    "influencer marketing",
  ],
  alternates: {
    canonical: "https://manikamwebsolutions.com/sr/drustvene-mreze",
    languages: {
      sr: "https://manikamwebsolutions.com/sr/drustvene-mreze",
      en: "https://manikamwebsolutions.com/en/social-media",
    },
  },
  openGraph: {
    title: "Upravljanje Društvenim Mrežama - Facebook i Instagram Marketing | Manikam Dev Solutions",
    "description":
      "Profesionalno upravljanje Facebook i Instagram profilima. Povećajte angažman i doseg na društvenim mrežama.",
    type: "website",
  },
};

export default function DrustveneМrezePage() {
  return (
    <div className="bg-gradient-to-br from-gray-300 via-gray-50 to-white">
      <section className="pt-24 pb-6 md:pb-16 px-4">
        <SocialMediaHero />
      </section>

      <section className="container mx-auto px-2 md:px-4 pb-16">
        <div className="space-y-8">
          <SocialMediaIntro />
          <SocialMediaServices />
          <SocialMediaPlatforms />
          <SocialMediaContent />
          <SocialMediaAds />
          <SocialMediaProcess />
          <SocialMediaResults />
          <SocialMediaPackages />
          <SocialMediaFAQ />
          <SocialMediaCTA />
        </div>
      </section>
    </div>
  );
}
