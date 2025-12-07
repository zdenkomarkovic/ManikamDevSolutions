import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDirection, getIntl } from "@/lib/intl";
import { i18n } from "@/i18n-config";
import { isValidLocale } from "@/lib/locale";
import { LocaleProvider } from "../../lib/LocaleContext";
import { Metadata } from "@/node_modules/next/types";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from "next/script";
import InstagramSmartFix from "@/components/InstagramSmartFix";
import FixHeroHeight from "@/components/FixHeroHeight";

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
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  keywords: [
    "sajt",
    "sajtovi",
    "izrada sajta",
    "web dizajn",
    "softver",
    "izrada softvera",
  ],
  // Ne postavljamo canonical ovde - svaka stranica ima svoj
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export async function generateStaticParams(): Promise<{ locale: string }[]> {
  return [{ locale: "sr" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const awaitedParams = await params;
  const localeParam = awaitedParams.locale;
  const locale = isValidLocale(localeParam) ? localeParam : i18n.defaultLocale;
  const intl = await getIntl(locale);
  const message = intl.formatMessage({ id: "footer.message" });
  const rights = intl.formatMessage({ id: "footer.rights" });
  const instagram = intl.formatMessage({ id: "instagram" });

  return (
    <html lang={locale} dir={getDirection(locale)}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900 bg-gray-50 text-base md:text-xl`}
        suppressHydrationWarning={true}
      >
        {" "}
        <InstagramSmartFix />
        <FixHeroHeight />
        <GoogleAnalytics />
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
        <LocaleProvider locale={locale}>
          <Header locale={locale} />
          {children}
          <Footer
            locale={locale}
            rights={rights}
            message={message}
            instagram={instagram}
          />
        </LocaleProvider>
      </body>
    </html>
  );
}
