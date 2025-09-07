import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webshop Development - E-commerce Solutions | Manikam Web Solutions",
  description: "Professional webshop and e-commerce development. Custom online store solutions tailored to your business.",
  alternates: {
    canonical: "https://manikamwebsolutions.com/en/webshop-development",
    languages: {
      sr: "https://manikamwebsolutions.com/sr/izrada-web-shopa",
      en: "https://manikamwebsolutions.com/en/webshop-development",
    },
  },
};

const WebshopDevelopment = () => {
  return (
    <div className="pt-20 md:py-20 space-y-10">
      <div className="container px-2 md:px-4 mx-auto space-y-5 md:space-y-20">
        <div className="md:px-32 py-4 text-base md:text-[22px] mx-auto space-y-8">
          <h2 className="text-center text-3xl md:text-6xl md:pb-20">
            Webshop development
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="md:hidden">
              <p className="first-letter:pl-6">
                The technologies we use include{" "}
                <span className="font-bold">React.js, Node.js, and Next.js</span>
                . We do not use WordPress or other popular website builders. The
                webshop we develop for you will be technically superior, faster,
                and better optimized — which is a key factor for SEO. This
                ensures better rankings in search engines and greater
                visibility, which is what we all strive for.
              </p>
            </div>
            
            <div className="p-2 md:p-8 rounded-3xl shadow-xl md:shadow-2xl space-y-1 md:space-y-5 bg-gray-50">
              <h3 className="py-3 font-bold">Basic package: Webshop up to 100 products</h3>
              <p>- Responsive design for all devices (mobile, tablet, desktop)</p>
              <p>- Product management with categories and variants</p>
              <p>- Integrated credit card and PayPal payments</p>
              <p>- Inventory management system</p>
              <p>- User accounts and purchase history</p>
              <p>- Shopping cart and wishlist functionality</p>
              <p>- Automatic email notifications</p>
              <p>- SSL certificate and security protection</p>
              <p>- SEO optimization for better ranking</p>
              <p>- Hosting and domain included for the first year</p>
              <p>- Training for admin panel usage</p>
              <p>- Development time 14-21 days</p>
            </div>

            <div className="md:space-y-20">
              <p className="first-letter:pl-6 hidden md:block">
                The technologies we use include{" "}
                <span className="font-bold">React.js, Node.js, and Next.js</span>
                . We do not use WordPress or other popular website builders. The
                webshop we develop for you will be technically superior, faster,
                and better optimized — which is a key factor for SEO. This
                ensures better rankings in search engines and greater
                visibility, which is what we all strive for.
              </p>
              <p className="first-letter:pl-6">
                This package provides everything needed for an outstanding
                webshop. If you have specific requirements, we will create a
                unique package fully tailored to your needs. You can add
                advanced SEO, custom design, or anything else from our range of
                services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebshopDevelopment;