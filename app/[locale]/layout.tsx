import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDirection } from "@/lib/intl";

export function generateStaticParams() {
  return [{ locale: "sr" }, { locale: "en" }];
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Manikam Web Solutions",
//   description: "Agencija za izradu softvera i sajtova",
//   icons: {
//     icon: "/logo.jpg",
//     apple: "/logo.jpg1",
//   },

//   keywords: [
//     "sajt",
//     "sajtovi",
//     "izrada sajta",
//     "web dizajn",
//     "softver",
//     "izrada softvera",
//   ],
//   alternates: {
//     canonical: "https://www.manikamwebsolutions.com/",
//   },
// };

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({ children, params }: Props) {
  const awaitedParams = await params;
  const locale = awaitedParams.locale;
  const dir = getDirection(locale);
  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-800`}
      >
        <Header locale={locale} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
