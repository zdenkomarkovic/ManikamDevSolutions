import Script from "next/script";
import React from "react";

// ZAMENI OVAJ ID sa tvojim pravim Google Analytics Measurement ID-jem
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

const GoogleAnalytics = () => (
  <>
    {/* Global site tag (gtag.js) - Google Analytics */}
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}');
      `}
    </Script>
  </>
);

export default GoogleAnalytics; 