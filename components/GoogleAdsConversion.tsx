import Script from "next/script";
import React from "react";

// ZAMENI OVAJ ID sa tvojim pravim Google Ads ID-jem
// Format: AW-XXXXXXXXX ili G-XXXXXXXXXX
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-XXXXXXXXX";

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
