import React from "react";
import type { Metadata } from "next";
import WebShopComponentEn from "@/components/WebShopComponentEn";

export const metadata: Metadata = {
  title: "Webshop Development - E-commerce Solutions | Manikam Web Solutions",
  description: "Professional webshop and e-commerce development. Custom online store solutions tailored to your business. Integrated payments, inventory management, SEO optimization.",
  keywords: [
    "webshop development",
    "e-commerce development",
    "online store",
    "web shop",
    "internet store",
    "online business",
    "e-commerce solutions",
    "electronic commerce"
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
    <div className="pt-20 md:py-20 space-y-10">
      <div className="container px-2 md:px-4 mx-auto space-y-5 md:space-y-20">
        <div className="md:px-32 py-4 text-base md:text-[22px] mx-auto space-y-8">
          <h1 className="text-center text-3xl md:text-6xl md:pb-20">
            Webshop Development & E-commerce Solutions
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="md:hidden">
              <p className="first-letter:pl-6">
                We specialize in <strong>webshop development</strong> that delivers results. 
                Using cutting-edge technologies <span className="font-bold">React.js, Node.js, and Next.js</span>, 
                we create fast, secure, and SEO-optimized online stores. Our webshops aren't just 
                beautiful - they're designed to increase sales and improve user experience.
              </p>
            </div>
            
            <WebShopComponentEn />
            
            <div className="md:space-y-20">
              <p className="first-letter:pl-6 hidden md:block">
                We specialize in <strong>webshop development</strong> that delivers results. 
                Using cutting-edge technologies <span className="font-bold">React.js, Node.js, and Next.js</span>, 
                we create fast, secure, and SEO-optimized online stores. Our webshops aren't just 
                beautiful - they're designed to increase sales and improve user experience.
              </p>
              
              <p className="first-letter:pl-6">
                Every webshop we create is fully customized to your needs. From simple product 
                catalogs to complex B2B platforms, we provide complete e-commerce solutions 
                that grow with your business.
              </p>
            </div>
          </div>

          {/* Detailed sections */}
          <div className="space-y-16 md:space-y-24 mt-16">
            {/* Why choose our webshop */}
            <section>
              <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
                Why Choose Our Webshop Solutions?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-semibold">Advanced Features</h3>
                  <p>
                    Our webshops come with all necessary features for successful online sales: 
                    inventory management, multiple payment methods, order tracking, discount systems, 
                    wishlist, product comparison, and much more.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-semibold">Mobile Optimized</h3>
                  <p>
                    Over 60% of online purchases are made from mobile devices. Our webshops are 
                    fully responsive and optimized for all devices, ensuring perfect user 
                    experience regardless of screen size.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-semibold">SEO Optimization</h3>
                  <p>
                    We create every webshop with a focus on SEO optimization. Fast pages, 
                    optimized images, structured data, and technical SEO optimization 
                    ensure better visibility in search engines.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-semibold">Security & Reliability</h3>
                  <p>
                    We implement the latest security standards, SSL certificates, secure 
                    payments, and regular backups. Your data and your customers' data 
                    are completely protected.
                  </p>
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="bg-gray-50 p-8 md:p-16 rounded-3xl">
              <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
                Key Features of Our Webshops
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <h4 className="font-semibold text-lg">Product Management</h4>
                  <p className="text-sm">Easy adding, editing, and organizing products with categories and variants</p>
                </div>
                <div className="text-center space-y-3">
                  <h4 className="font-semibold text-lg">Payment Systems</h4>
                  <p className="text-sm">Integration with PayPal, Stripe, credit cards, and cash on delivery</p>
                </div>
                <div className="text-center space-y-3">
                  <h4 className="font-semibold text-lg">Inventory Management</h4>
                  <p className="text-sm">Automatic inventory tracking with alerts and reports</p>
                </div>
                <div className="text-center space-y-3">
                  <h4 className="font-semibold text-lg">User Accounts</h4>
                  <p className="text-sm">Registration, login, purchase history, and wishlist</p>
                </div>
                <div className="text-center space-y-3">
                  <h4 className="font-semibold text-lg">Analytics & Reports</h4>
                  <p className="text-sm">Detailed reports on sales, most popular products, and customers</p>
                </div>
                <div className="text-center space-y-3">
                  <h4 className="font-semibold text-lg">Marketing Tools</h4>
                  <p className="text-sm">Coupons, discounts, newsletter integration, and social media connectivity</p>
                </div>
              </div>
            </section>

            {/* Development process */}
            <section>
              <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
                Our Webshop Development Process
              </h2>
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/4 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                    <h4 className="font-semibold">Analysis & Planning</h4>
                  </div>
                  <div className="md:w-3/4">
                    <p>We thoroughly analyze your needs, target audience, and competition. We create a strategy and feature plan that will best serve your business.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
                  <div className="md:w-1/4 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                    <h4 className="font-semibold">Design & UX/UI</h4>
                  </div>
                  <div className="md:w-3/4">
                    <p>We create an attractive and functional design that reflects your brand. Focus is on user experience that leads to conversion.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/4 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                    <h4 className="font-semibold">Development & Testing</h4>
                  </div>
                  <div className="md:w-3/4">
                    <p>We program the webshop using the latest technologies. Every feature is thoroughly tested before launch.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
                  <div className="md:w-1/4 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                    <h4 className="font-semibold">Launch & Support</h4>
                  </div>
                  <div className="md:w-3/4">
                    <p>We launch your webshop and provide training for usage. We offer continuous support and maintenance.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SEO optimization */}
            <section className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 md:p-16 rounded-3xl">
              <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
                SEO Optimization for Webshops
              </h2>
              <p className="text-center mb-8 text-lg">
                Our webshops are optimized for search engines from day one
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4">Technical SEO Optimization</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Fast pages (Core Web Vitals optimization)</li>
                    <li>• Mobile-optimized pages</li>
                    <li>• SSL certificate and HTTPS</li>
                    <li>• XML sitemap and robots.txt</li>
                    <li>• Structured data (Schema markup)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-4">Content SEO Optimization</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Optimized titles and meta descriptions</li>
                    <li>• SEO-friendly URL structure</li>
                    <li>• Optimized images with alt texts</li>
                    <li>• Internal linking</li>
                    <li>• Rich snippets for products</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA section */}
            <section className="text-center bg-gradient-to-r from-gray-700 to-red-700 text-white p-8 md:p-16 rounded-3xl">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                Ready to Launch Your Webshop?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Contact us today for a free consultation and pricing tailored to your needs
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+12408103730"
                  className="inline-flex items-center gap-3 bg-white text-gray-800 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Us
                </a>
                <a
                  href="mailto:manikamwebsolutions@gmail.com"
                  className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Send Email
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;