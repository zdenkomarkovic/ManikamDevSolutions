import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getIntl } from "@/lib/intl";
import { LocaleProvider } from "../lib/LocaleContext";
import { Metadata } from "next/types";
import GoogleAdsPhoneConversion from "@/components/GoogleAdsPhoneConversion";
import Script from "next/script";

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
  description: "Agencija za izradu softvera i sajtova | Izrada sajtova, web shopova, SEO optimizacija, Google oglašavanje i društvene mreže.",
  icons: {
    icon: [
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  keywords: [
    "sajt",
    "sajtovi",
    "izrada sajta",
    "web dizajn",
    "softver",
    "izrada softvera",
    "seo optimizacija",
    "google oglasavanje",
    "web shop",
    "digitalni marketing",
  ],
  openGraph: {
    type: "website",
    locale: "sr_RS",
    siteName: "Manikam Web Solutions",
    title: "Manikam Web Solutions",
    description: "Agencija za izradu softvera i sajtova | Izrada sajtova, web shopova, SEO optimizacija, Google oglašavanje i društvene mreže.",
    images: [
      {
        url: "https://manikamwebsolutions.com/api/og?title=Manikam%20Web%20Solutions",
        width: 1200,
        height: 630,
        alt: "Manikam Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manikam Web Solutions",
    description: "Agencija za izradu softvera i sajtova | Izrada sajtova, web shopova, SEO optimizacija, Google oglašavanje i društvene mreže.",
    images: ["https://manikamwebsolutions.com/api/og?title=Manikam%20Web%20Solutions"],
  },
  // Ne postavljamo canonical ovde - svaka stranica ima svoj
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = "sr";
  const intl = await getIntl(locale);
  const message = intl.formatMessage({ id: "footer.message" });
  const rights = intl.formatMessage({ id: "footer.rights" });
  const instagram = intl.formatMessage({ id: "instagram" });

  return (
    <html lang={locale} dir="ltr">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        {/* hreflang */}
        <link rel="alternate" hrefLang="sr" href="https://manikamwebsolutions.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://manikamwebsolutions.com/" />
        {/* JSON-LD Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Manikam Web Solutions",
              url: "https://manikamwebsolutions.com",
              logo: "https://manikamwebsolutions.com/images/manikamlogo.png",
              description: "Agencija za izradu softvera i sajtova, web shopova, SEO optimizaciju, Google oglašavanje i upravljanje društvenim mrežama.",
              address: [
                {
                  "@type": "PostalAddress",
                  addressLocality: "Niš",
                  addressCountry: "RS",
                },
                {
                  "@type": "PostalAddress",
                  addressLocality: "Washington D.C.",
                  addressCountry: "US",
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["Serbian", "English"],
              },
              sameAs: [],
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900 bg-gray-50 text-base md:text-xl`}
        suppressHydrationWarning={true}
      >
        {" "}
        <GoogleAdsPhoneConversion />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17745015417"
        />
        <Script id="google-analytics-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17745015417');
            gtag('config', 'G-E5DEDZ9E2H');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '870815125416740');
    fbq('track', 'PageView');
  `}
        </Script>
        <LocaleProvider locale={"sr"}>
          <Header />
          {children}
          <Footer
            rights={rights}
            message={message}
            instagram={instagram}
          />
        </LocaleProvider>
      </body>
    </html>
  );
}
