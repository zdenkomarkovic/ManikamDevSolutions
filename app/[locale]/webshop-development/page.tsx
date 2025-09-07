import React from "react";
import type { Metadata } from "next";
import { motion } from "framer-motion";
import Image from "next/image";

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
  const features = [
    {
      title: "Product Management",
      description: "Easy adding, editing, and organizing products with categories and variants",
      icon: "📦"
    },
    {
      title: "Payment Systems",
      description: "Integration with PayPal, Stripe, credit cards, and cash on delivery",
      icon: "💳"
    },
    {
      title: "Inventory Management",
      description: "Automatic inventory tracking with alerts and reports",
      icon: "📊"
    },
    {
      title: "User Accounts",
      description: "Registration, login, purchase history, and wishlist",
      icon: "👤"
    },
    {
      title: "Analytics & Reports",
      description: "Detailed reports on sales, most popular products, and customers",
      icon: "📈"
    },
    {
      title: "Marketing Tools",
      description: "Coupons, discounts, newsletter integration, and social media connectivity",
      icon: "🎯"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Analysis & Planning",
      description: "We thoroughly analyze your needs, target audience, and competition. We create a strategy and feature plan that will best serve your business."
    },
    {
      number: "02", 
      title: "Design & UX/UI",
      description: "We create an attractive and functional design that reflects your brand. Focus is on user experience that leads to conversion."
    },
    {
      number: "03",
      title: "Development & Testing", 
      description: "We program the webshop using the latest technologies. Every feature is thoroughly tested before launch."
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "We launch your webshop and provide training for usage. We offer continuous support and maintenance."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 h-screen flex items-center">
          <div className="w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gray-900 text-4xl md:text-6xl xl:text-7xl mb-6 relative z-20"
            >
              Webshop <span className="font-bold bg-gradient-to-r from-gray-700 via-red-800 to-red-800 bg-clip-text text-transparent">Development</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-3xl text-gray-700 mb-8 relative z-20 max-w-4xl"
            >
              Professional e-commerce solutions that increase sales and provide perfect user experience
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col md:flex-row gap-4 relative z-20"
            >
              <a
                href="tel:+12408103730"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-700 to-red-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-gray-800 hover:to-red-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Us
              </a>
              <a
                href="mailto:manikamwebsolutions@gmail.com"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-gray-700 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Send Email
              </a>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute top-0 z-0 w-full h-screen">
          <Image
            src="/images/laptop.jpg"
            alt="Webshop development background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gray-100 via-gray-100/60 to-transparent" />
        </div>
      </div>

      {/* Why webshop section */}
      <div className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why do you need a <span className="bg-gradient-to-r from-gray-700 via-red-800 to-red-800 bg-clip-text text-transparent">webshop</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In the digital age, online sales isn't an option - it's a necessity. Our webshops 
              enable your business to grow 24/7, reach new customers, and increase revenue.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4">Increase Sales</h3>
              <p className="text-gray-600">
                Webshop enables 24/7 sales without limitations. Reach customers worldwide 
                and increase revenue by up to 300%.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4">Targeted Audience</h3>
              <p className="text-gray-600">
                Precise customer targeting through SEO, social media, and Google ads. 
                Attract the right customers for your products.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-4">Analytics & Insights</h3>
              <p className="text-gray-600">
                Detailed reports on sales, customer behavior, and performance. 
                Make business decisions based on data.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Advanced <span className="bg-gradient-to-r from-gray-700 via-red-800 to-red-800 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every webshop we create comes with a complete set of features 
              needed for successful online sales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Development process section */}
      <div className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Development <span className="bg-gradient-to-r from-gray-700 via-red-800 to-red-800 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From idea to launch - a transparent process that ensures your webshop's success.
            </p>
          </motion.div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                <div className="md:w-1/2">
                  <div className="bg-white p-8 rounded-3xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-red-700 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center">
                    <div className="text-6xl opacity-50">{step.number}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies section */}
      <div className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Modern <span className="bg-gradient-to-r from-gray-700 via-red-800 to-red-800 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We use cutting-edge technologies <strong>React.js, Node.js, and Next.js</strong> to create 
              fast, secure, and SEO-optimized webshops.
            </p>
            
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 md:p-16 rounded-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-bold text-lg mb-4">Why not WordPress?</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Faster page loading</li>
                    <li>• Better SEO optimization</li>
                    <li>• Higher security</li>
                    <li>• Scalability</li>
                    <li>• Modern functionalities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-4">Advantages of our technologies</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Server-side rendering for speed</li>
                    <li>• Automatic image optimization</li>
                    <li>• Progressive Web App capabilities</li>
                    <li>• Best Core Web Vitals results</li>
                    <li>• Mobile-first approach</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA section */}
      <div className="py-20 md:py-32 bg-gradient-to-r from-gray-700 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Launch Your Webshop?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Contact us today for a free consultation and pricing tailored to your needs. 
              Your success in online sales starts here!
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+12408103730"
                className="inline-flex items-center gap-3 bg-white text-gray-800 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +1 240 810 3730
              </a>
              <a
                href="mailto:manikamwebsolutions@gmail.com"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                manikamwebsolutions@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default page;