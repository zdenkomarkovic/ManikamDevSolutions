import Script from "next/script";
import React from "react";

const GoogleAdsConversion = () => {
  return (
    <>
      {/* Event snippet za CONTACT konverziju - Page Load */}
      <Script id="google-ads-conversion-event" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-17745015417/kup7CP60nqMcEPnkvY1C',
            'value': 1.0,
            'currency': 'RSD'
          });
        `}
      </Script>
    </>
  );
};

export default GoogleAdsConversion;
