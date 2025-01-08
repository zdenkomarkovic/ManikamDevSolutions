import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-gray-100 text-gray-800">
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
