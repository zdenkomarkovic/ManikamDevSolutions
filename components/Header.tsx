"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { ChevronDown } from "lucide-react";
import { getNavList } from "@/locales/navUtils";
import logo from "../public/images/android-chrome-192x192.png";

export default function Header() {
  const navList = getNavList();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-slide-down ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-16 py-[10px] font-bold">
        <div className="flex justify-between items-center">
          <div className="hover:scale-105 active:scale-95 transition-transform duration-200">
            <Link href="/" className="flex items-center space-x-4">
              <Image
                src={logo}
                alt="manikamwebsolutions logo"
                width={55}
                height={55}
                className="rounded-full"
                priority
              />
              <span className="hidden md:block">
                <span>Manikam </span>
                <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                  Web{" "}
                </span>
                <span>Solutions</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {navList.map((item, i) => {
              if (item.submenu) {
                return (
                  <div
                    key={i}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(i)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="hover:text-orange-500 transition-colors uppercase flex items-center gap-1">
                      {item.title}
                      <ChevronDown
                        className={`w-7 h-7 transition-transform duration-300 ${openDropdown === i ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openDropdown === i && (
                      <div className="absolute top-full left-0 bg-white shadow-lg border border-gray-200 overflow-hidden z-50">
                        {item.submenu.map((subItem, j) => {
                          if (!subItem.route) return null;
                          return (
                            <Link
                              key={j}
                              href={subItem.route}
                              className="block px-4 py-3 text-gray-800 text-nowrap hover:bg-gray-100 hover:text-orange-500 transition-colors border-b border-gray-100 last:border-0"
                            >
                              {subItem.title}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
              if (!item.route) return null;
              return (
                <Link
                  key={i}
                  href={item.route}
                  className="hover:text-orange-500 transition-colors uppercase"
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          {/* Phone - Desktop */}
          <a
            href="tel:+381641967267"
            onClick={() => window.gtag_report_conversion?.("tel:+381641967267")}
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-orange-600 to-transparent hover:from-orange-500 text-white px-4 py-2 rounded-full transition-colors font-bold"
          >
            +381 64 196 7267
          </a>

          {/* Mobile: Phone + Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:+381641967267"
              onClick={() => window.gtag_report_conversion?.("tel:+381641967267")}
              className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-transparent hover:from-orange-500 text-white px-3 py-2 rounded-full transition-colors font-bold text-sm"
            >
              +381 64 196 7267
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <AiOutlineClose className="h-6 w-6" />
              ) : (
                <RxHamburgerMenu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-background text-black animate-fade-in-up">
          <div className="container mx-auto px-4 py-4">
            {navList.map((item, i) => {
              if (item.submenu) {
                return (
                  <div key={i} className="py-2">
                    <button
                      onClick={() =>
                        setMobileDropdownOpen(mobileDropdownOpen === i ? null : i)
                      }
                      className="py-2 hover:text-orange-600 transition-colors uppercase w-full flex items-center justify-between"
                    >
                      {item.title}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${mobileDropdownOpen === i ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileDropdownOpen === i && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.submenu.map((subItem, j) => {
                          if (!subItem.route) return null;
                          return (
                            <Link
                              key={j}
                              href={subItem.route}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setMobileDropdownOpen(null);
                              }}
                              className="block py-2 hover:text-orange-600 transition-colors"
                            >
                              {subItem.title}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
              if (!item.route) return null;
              return (
                <Link
                  key={i}
                  href={item.route}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="block py-2 hover:text-primary transition-colors uppercase"
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
