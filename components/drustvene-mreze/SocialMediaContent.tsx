"use client";

import { FaImage, FaVideo, FaPencilAlt, FaLightbulb } from "react-icons/fa";

const contentTypes = [
  {
    icon: FaImage,
    title: "Grafički Dizajn",
    items: [
      "Profesionalne grafike za postove",
      "Infografike sa statistikama i podacima",
      "Quote grafike i motivacioni sadržaj",
      "Carousel postovi (swipe postovi sa više slika)",
      "Cover fotografije i branding elementi",
      "Thumbnail dizajn za video sadržaj",
    ],
  },
  {
    icon: FaVideo,
    title: "Video Sadržaj",
    items: [
      "Instagram Reels (15-90 sekundi)",
      "Facebook video postovi",
      "Stories video sadržaj sa animacijama",
      "Tutorial i how-to video snimci",
      "Product showcase i unboxing",
      "Behind-the-scenes sadržaj",
    ],
  },
  {
    icon: FaPencilAlt,
    title: "Copywriting",
    items: [
      "Angažujući caption tekstovi",
      "Call-to-action (CTA) optimizacija",
      "Storytelling pristup",
      "SEO optimizovani opisi",
      "Hashtag strategija i research",
      "Emoji marketing i vizuelna organizacija teksta",
    ],
  },
  {
    icon: FaLightbulb,
    title: "Content Strategija",
    items: [
      "Content calendar planiranje (30-90 dana unapred)",
      "Mix obrazovnog, zabavnog i promotivnog sadržaja",
      "Trendovi i sezonski sadržaj",
      "User-generated content kampanje",
      "Konkurentska analiza sadržaja",
      "A/B testiranje različitih formata",
    ],
  },
];

export default function SocialMediaContent() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">
        Kreiranje Sadržaja Koji Angažuje
      </h2>
      <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto">
        Kvalitetan sadržaj je srce uspešnog social media marketinga. Kreiramo raznovrstan sadržaj
        prilagođen vašoj publici i platformi.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {contentTypes.map((type, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <type.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                {type.title}
              </h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              {type.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
          Zašto je kvalitetan sadržaj ključan?
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Povećava Angažman</h4>
            <p className="text-gray-600 text-sm">
              Zanimljiv sadržaj podstiče lajkove, komentare, deljenje i čuvanje postova,
              što algoritmi Facebook-a i Instagram-a nagrađuju većim doseom.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Gradi Brend</h4>
            <p className="text-gray-600 text-sm">
              Konzistentan, kvalitetan sadržaj pozicionira vas kao stručnjaka u industriji
              i gradi prepoznatljivost brenda kod vaše publike.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Konvertuje Pratiоce</h4>
            <p className="text-gray-600 text-sm">
              Dobro osmišljen sadržaj sa jasnim CTA-om transformiše pratioce u lead-ove
              i kupce, direktno utiče na vašu prodaju.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
