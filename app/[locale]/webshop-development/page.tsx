import React from "react";
import type { Metadata } from "next";
import { FaShoppingCart, FaCreditCard, FaChartLine, FaMobile, FaLock, FaCog } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Webshop Development - Professional E-commerce Solutions | Manikam Web Solutions",
  description: "Professional webshop development and e-commerce solutions. Complete online stores with integrated payments, inventory management, SEO optimization and mobile adaptation for maximum results.",
  keywords: [
    "webshop development",
    "online store",
    "e-commerce",
    "web shop",
    "internet store",
    "online shop",
    "e-commerce solutions",
    "web store development",
    "digital store",
    "online business"
  ],
  alternates: {
    canonical: "https://manikamwebsolutions.com/en/webshop-development",
    languages: {
      sr: "https://manikamwebsolutions.com/sr/izrada-web-shopa",
      en: "https://manikamwebsolutions.com/en/webshop-development",
    },
  },
};

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero section */}
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Webshop Development
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with a professional online store that works 24/7. 
            We create e-commerce solutions that increase sales and automate your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              E-commerce Experts
            </span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
              Integrated Payments
            </span>
            <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold">
              SEO Optimized
            </span>
          </div>
        </div>
      </div>

      {/* Main content section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left column - Text */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Why is a webshop crucial for your success?
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  In the digital age, an online store is not a luxury but a necessity. Your competitors are already selling online 24 hours a day, 
                  7 days a week. A webshop allows you to reach customers worldwide, increase revenue and automate the sales process.
                </p>
                <p>
                  Our webshops are not just digital stores - they are powerful business tools that transform the way you run your business. 
                  With advanced inventory management features, automated order processing and detailed analytics, 
                  your webshop becomes the heart of your digital business.
                </p>
                <p>
                  We use the latest technologies like React.js and Next.js that guarantee speed, security and excellent positioning on Google search engines. 
                  Unlike WordPress or other template solutions, our custom webshops are optimized for performance and SEO from day one.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                What makes our webshops special?
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Mobile optimization:</strong> Over 60% of purchases are made from mobile devices. Our webshops are fully responsive 
                  and provide a perfect user experience on all devices.
                </p>
                <p>
                  <strong>Loading speed:</strong> Every second of delay costs you customers. Our webshops load in less than 3 seconds, 
                  which significantly increases conversions.
                </p>
                <p>
                  <strong>SEO optimization:</strong> Your webshop must be found. We implement advanced SEO techniques that ensure 
                  high positioning on Google search engines and more organic traffic.
                </p>
                <p>
                  <strong>Security:</strong> SSL certificates, secure data storage and PCI DSS compliance guarantee the safety 
                  of your customers and their financial information.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Results you can expect
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaChartLine className="mr-3 text-yellow-300" />
                  Sales increase of 40-60% in the first year
                </li>
                <li className="flex items-center">
                  <FaShoppingCart className="mr-3 text-yellow-300" />
                  Automation of 80% of sales processes
                </li>
                <li className="flex items-center">
                  <FaMobile className="mr-3 text-yellow-300" />
                  Access to global market 24/7
                </li>
                <li className="flex items-center">
                  <FaCog className="mr-3 text-yellow-300" />
                  Reduction of operational costs by 30%
                </li>
              </ul>
            </div>
          </div>

          {/* Right column - Package */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-500 to-purple-600 text-white px-6 py-2 rounded-bl-2xl">
                <span className="font-bold">MOST POPULAR</span>
              </div>
              
              <div className="mt-4">
                <h3 className="text-3xl font-bold mb-2 text-gray-800">
                  Professional Webshop
                </h3>
                <p className="text-gray-600 mb-6">
                  Complete e-commerce solution for serious business
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <FaShoppingCart className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Unlimited products</strong>
                      <p className="text-sm text-gray-600">With categories, variants and detailed descriptions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaCreditCard className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Integrated payments</strong>
                      <p className="text-sm text-gray-600">Cards, PayPal, cash on delivery, bank transfers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaCog className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Inventory management</strong>
                      <p className="text-sm text-gray-600">Automatic stock tracking and notifications</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaMobile className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Mobile optimization</strong>
                      <p className="text-sm text-gray-600">Perfect display on all devices</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaLock className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <strong>SSL certificate and security</strong>
                      <p className="text-sm text-gray-600">Protected transactions and customer data</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-bold mb-3">Additionally included:</h4>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• User accounts and wishlist</li>
                    <li>• Automatic email notifications</li>
                    <li>• Detailed admin panel</li>
                    <li>• Google Analytics integration</li>
                    <li>• SEO optimization</li>
                    <li>• Hosting and domain (1 year)</li>
                    <li>• Usage training</li>
                    <li>• 3 months free support</li>
                  </ul>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <p className="text-center text-gray-700">
                    <strong>Development time:</strong> 14-21 days<br/>
                    <strong>Warranty:</strong> 12 months
                  </p>
                </div>
              </div>
            </div>

            {/* CTA section */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center">
              <h4 className="text-xl font-bold mb-3">
                Ready for digital success?
              </h4>
              <p className="mb-4 opacity-90">
                Contact us for a free consultation and project assessment
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+12408103730"
                  className="block bg-white text-blue-600 font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  📞 +1 240 810 3730
                </a>
                <a
                  href="mailto:manikamwebsolutions@gmail.com"
                  className="block bg-white/20 backdrop-blur text-white font-bold py-3 px-6 rounded-xl hover:bg-white/30 transition-colors"
                >
                  ✉️ manikamwebsolutions@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional benefits section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaChartLine className="text-2xl text-blue-600" />
            </div>
            <h4 className="text-xl font-bold mb-3">Sales Increase</h4>
            <p className="text-gray-600">
              Our clients on average increase sales by 40-60% in the first year of webshop operation.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCog className="text-2xl text-green-600" />
            </div>
            <h4 className="text-xl font-bold mb-3">Automation</h4>
            <p className="text-gray-600">
              Automated processes for orders, invoicing and inventory management save time and money.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaLock className="text-2xl text-purple-600" />
            </div>
            <h4 className="text-xl font-bold mb-3">Security</h4>
            <p className="text-gray-600">
              Highest security standards to protect your data and your customers&apos; data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;