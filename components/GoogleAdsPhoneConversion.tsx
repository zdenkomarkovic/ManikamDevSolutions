import Script from "next/script";
import React from "react";

// Google Ads Phone Call Conversion Tracking
const GoogleAdsPhoneConversion = () => {
  return (
    <>
      {/* Phone call conversion tracking function */}
      <Script id="google-ads-phone-conversion" strategy="afterInteractive">
        {`
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              'send_to': 'AW-17745015417/Bb1CCIb0leYbEPnkvY1C',
              'event_callback': callback
            });
            return false;
          }

          // Make function globally available
          window.gtag_report_conversion = gtag_report_conversion;
        `}
      </Script>
    </>
  );
};

export default GoogleAdsPhoneConversion;
