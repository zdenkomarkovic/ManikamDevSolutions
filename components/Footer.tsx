"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { Locale, i18n } from "@/i18n-config";
import { getNavList } from "@/locales/navUtils";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

function isValidLocale(locale: string): locale is Locale {
  return (i18n.locales as readonly string[]).includes(locale);
}
function getSafeLocale(locale: string): Locale {
  if (isValidLocale(locale)) {
    return locale;
  }
  return i18n.defaultLocale as Locale;
}

export default function Footer({
  locale,
  message,
  rights,
}: {
  locale: string;
  message: string;
  rights: string;
}) {
  const currentLocale = getSafeLocale(locale);
  const navList = getNavList(currentLocale);

  return (
    <motion.footer
      className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 py-8  shadow-[0px_-2px_5px_#c9822414]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-16 text-white">
        <div className="text-center md:text-left md:grid md:grid-cols-3 gap-8 mx-auto">
          <div className=" mx-auto ">
            {navList.map((item, i) => {
              // Skip items without a route (like Services with submenu)
              if (!item.route) return null;
              return (
                <ul
                  key={i}
                  className="pb-5 flex justify-around items-center md:pb-0 md:block md:space-y-2"
                >
                  <li>
                    <Link
                      href={item.route}
                      className="text-muted-foreground hover:text-orange-500"
                    >
                      {item.title}
                    </Link>
                  </li>
                </ul>
              );
            })}
          </div>

          <div className="space-y-3 pb-5 md:pb-0">
            <div>
              {" "}
              <a href="tel:+381641967267">
                <p className="text-muted-foreground  flex flex-col gap-2 items-center hover:text-orange-500">
                  Office: Serbia{" "}
                  <span className="flex gap-2 items-center">
                    <FaPhone className="" /> +38164 1967 267
                  </span>
                </p>
              </a>
            </div>
            <div>
              {" "}
              <a href="tel:+12408103730">
                <p className="text-muted-foreground  flex gap-2 flex-col items-center hover:text-orange-500">
                  Office: Washington D.C. USA{" "}
                  <span className="flex gap-2 items-center">
                    <FaPhone className="" /> +12408103730
                  </span>
                </p>
              </a>
            </div>
            <div className=" mx-auto w-fit">
              <a href="mailto:manikamwebsolutions@gmail.com">
                <p className="flex gap-3 items-center hover:text-orange-500 text-muted-foreground text-wrap">
                  <TfiEmail /> manikamwebsolutions@gmail.com
                </p>
              </a>
            </div>
            <div className="flex space-x-4 justify-center ">
              <a
                href="https://www.facebook.com/profile.php?id=61574784286298"
                className="text-muted-foreground hover:text-orange-500"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/manikam.web.solutions/"
                target={"_blank"}
                className="text-muted-foreground hover:text-orange-500"
              >
                <Instagram />
              </a>
            </div>
          </div>
          <div className="md:col-span-1 col-span-2 text-center">
            <h3 className="text-lg font-semibold mb-2 md:mb-4 ">
              Manikam{" "}
              <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                Web
              </span>{" "}
              Solutions
            </h3>

            <p className="font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              {message}
            </p>
          </div>
        </div>
        <div className="mt-5 pt-5 md:mt-8 md:pt-8 border-t border-muted-foreground/20 text-center text-gray-100">
          <p>
            &copy; {new Date().getFullYear()} ManikamWebSolutions. {rights}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
