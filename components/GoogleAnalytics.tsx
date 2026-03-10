import Script from "next/script";
import React from "react";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";
const GOOGLE_ADS_TAG_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_TAG_ID || "";

const GoogleAnalytics = () => (
  <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_TAG_ID || GA_MEASUREMENT_ID}`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}');
        ${GOOGLE_ADS_TAG_ID ? `gtag('config', '${GOOGLE_ADS_TAG_ID}');` : ""}
      `}
    </Script>
  </>
);

export default GoogleAnalytics; 