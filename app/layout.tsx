import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manikam Web Solutions",
  description: "Agencija za izradu softvera i sajtova",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },

  keywords: [
    "sajt",
    "sajtovi",
    "izrada sajta",
    "web dizajn",
    "softver",
    "izrada softvera",
  ],
  alternates: {
    canonical: "https://www.manikamwebsolutions.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
