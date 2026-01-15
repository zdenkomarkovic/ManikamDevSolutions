import Script from "next/script";
import React from "react";

// ZAMENI OVAJ ID sa tvojim pravim Google Ads Tag ID-jem
// Dobićeš ga iz Google Ads -> Tools -> Tag installation
// Format: AW-XXXXXXXXX ili može biti GT-XXXXXXXXX
const GOOGLE_ADS_TAG_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_TAG_ID || "";

const GoogleAdsTag = () => {
  // Ne prikazuj ništa ako TAG ID nije postavljen
  if (!GOOGLE_ADS_TAG_ID || GOOGLE_ADS_TAG_ID === "") {
    return null;
  }

  return (
    <>
      {/* Google tag (gtag.js) - Glavni tag za Google Ads */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_TAG_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_TAG_ID}');
        `}
      </Script>
    </>
  );
};

export default GoogleAdsTag;
