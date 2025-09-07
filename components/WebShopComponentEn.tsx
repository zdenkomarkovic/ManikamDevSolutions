"use client";

import React from "react";
import { motion } from "framer-motion";

const WebShopComponentEn = () => {
  const cardClass =
    " p-2 md:p-8 rounded-3xl shadow-xl md:shadow-2xl space-y-1 md:space-y-5 bg-gray-50  ";
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cardClass}
    >
      <h3 className=" py-3 font-bold">Basic package: Webshop up to 100 products</h3>

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
    </motion.div>
  );
};

export default WebShopComponentEn;