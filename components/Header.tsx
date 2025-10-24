"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { ChevronDown } from "lucide-react";
import { i18n } from "../i18n-config";
import { getNavList } from "@/locales/navUtils";
import type { Locale } from "@/i18n-config";
import logo from "../public/images/manikamlogo.png";
import { usePathname } from "next/navigation";

function isValidLocale(locale: string): locale is Locale {
  return (i18n.locales as readonly string[]).includes(locale);
}

function getSafeLocale(locale: string): Locale {
  if (isValidLocale(locale)) {
    return locale;
  }
  return i18n.defaultLocale as Locale;
}

export default function Header({ locale }: { locale: string }) {
  const { locales } = i18n;
  const currentLocale = getSafeLocale(locale);
  const navList = getNavList(currentLocale);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<number | null>(
    null
  );
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-md"
          : "bg-transparent text-white"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <nav className="container mx-auto px-4 md:px-16 py-[10px] font-bold ">
        <div className="flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={`/${currentLocale}`}
              className="flex items-center space-x-4 "
            >
              <Image
                src={logo}
                alt="manikamwebsolutions logo"
                width={55}
                height={55}
                className=" rounded-full"
              />
              <span className="font-bold  text-xl hidden md:inline">
                ManikamWebSolutions
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-10 ">
            {navList.map((item, i) => {
              // Ako ima submenu - prikaži dropdown
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
                      <motion.div
                        animate={{ rotate: openDropdown === i ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-7 h-7" />
                      </motion.div>
                    </button>
                    {openDropdown === i && (
                      <div className="absolute top-full left-0  bg-white shadow-lg rounded-md border border-gray-200 overflow-hidden z-50">
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
              // Inače prikaži običan link
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

          <div dir="ltr" className="flex flex-col">
            {[...locales].sort().map((loc) => {
              const pageMapping: Record<string, string> = {
                "/izrada-sajta": "/website-development",
                "/izrada-web-shopa": "/webshop-development",
                "/website-development": "/izrada-sajta",
                "/webshop-development": "/izrada-web-shopa",
              };

              let pathWithoutLocale =
                pathname.replace(`/${currentLocale}`, "") || "/";

              if (loc !== currentLocale && pageMapping[pathWithoutLocale]) {
                pathWithoutLocale = pageMapping[pathWithoutLocale];
              }

              const newPath = `/${loc}${pathWithoutLocale}`;

              return (
                <Link
                  key={loc}
                  href={newPath}
                  className={loc === currentLocale ? "font-bold" : ""}
                >
                  {loc}
                </Link>
              );
            })}
          </div>

          <div className="md:hidden">
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
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background"
        >
          <div className="container mx-auto px-4 py-4">
            {navList.map((item, i) => {
              // Ako ima submenu - prikaži dropdown za mobilni
              if (item.submenu) {
                return (
                  <div key={i} className="py-2">
                    <button
                      onClick={() =>
                        setMobileDropdownOpen(
                          mobileDropdownOpen === i ? null : i
                        )
                      }
                      className="py-2 hover:text-orange-600 transition-colors uppercase w-full flex items-center justify-between"
                    >
                      {item.title}
                      <motion.div
                        animate={{ rotate: mobileDropdownOpen === i ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
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
              // Inače prikaži običan link
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

            <div className="mt-4"></div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
