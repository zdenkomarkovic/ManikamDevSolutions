import Script from "next/script";
import React from "react";

const GoogleAdsConversion = () => {
  return (
    <>
      {/* Event snippet za CONTACT konverziju - Page Load */}
      <Script id="google-ads-conversion-event" strategy="afterInteractive">
        {`
          gtag('event', 'conversion_event_submit_lead_form', {
            // Možeš dodati dodatne parametre ovde ako želiš
            // 'value': 1.0,
            // 'currency': 'EUR'
          });
        `}
      </Script>
    </>
  );
};

export default GoogleAdsConversion;
