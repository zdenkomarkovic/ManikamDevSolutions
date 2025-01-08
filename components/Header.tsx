"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import logo from "/public/favicon.ico";
import { NavList } from "@/constants/index";
import { SlArrowDown } from "react-icons/sl";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenuAndDropdown = () => {
    setIsMenuOpen(!isMenuOpen);
    setDropdownOpen(false);
  };

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
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center space-x-4">
              <Image
                src={"/logoo.jpg"}
                alt="manikamdevsolutions logo"
                width={50}
                height={40}
              />
              <span className="font-bold text-xl hidden md:inline">
                ManikamWebSolutions
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            {NavList.map((item, i) => {
              return item.hasDropdown ? (
                <div
                  key={i}
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={item.route}
                    className="flex items-center text-foreground hover:text-primary transition-colors uppercase cursor-pointer"
                  >
                    {item.title}
                    <SlArrowDown
                      className={`ml-2 ${
                        !dropdownOpen && "-rotate-90"
                      } font-bold `}
                    />
                  </Link>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 bg-background shadow-md py-2 w-48 z-10">
                      {item.dropdownItems.map((subItem, j) => (
                        <Link
                          key={j}
                          href={subItem.route}
                          className="block px-4 py-2 text-sm text-foreground hover:text-primary transition"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={i}
                  href={item.route}
                  className="text-foreground hover:text-primary transition-colors uppercase"
                >
                  {item.title}
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
            {NavList.map((item, i) => {
              return item.hasDropdown ? (
                <div
                  key={i}
                  className="relative group"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  //   onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <div className="flex items-center">
                    <Link
                      href={item.route}
                      className="block  py-2 hover:text-primary transition-colors uppercase cursor-pointer"
                      onClick={toggleMenuAndDropdown}
                    >
                      {item.title}
                    </Link>
                    <SlArrowDown
                      className={`ml-2 ${
                        !dropdownOpen && "-rotate-90"
                      } font-bold `}
                    />
                  </div>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 bg-background shadow-md py-2 w-48 z-10">
                      {item.dropdownItems.map((subItem, j) => (
                        <Link
                          key={j}
                          href={subItem.route}
                          onClick={toggleMenuAndDropdown}
                          className="block px-1 py-2 hover:text-primary transition-colors uppercase"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
