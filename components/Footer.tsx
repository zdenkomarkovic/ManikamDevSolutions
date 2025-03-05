"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  //  Facebook,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-50 py-8  shadow-[0px_-2px_5px_rgba(0,0,0,0.1)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-muted-foreground">
        <div className="text-center md:text-left md:grid md:grid-cols-3 gap-8 mx-auto">
          <div>
            <ul className="pb-5 flex justify-around items-center md:pb-0 md:block md:space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary"
                >
                  Početna
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary"
                >
                  Usluge
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 pb-5 md:pb-0">
            <div>
              {" "}
              <a href="tel:+381637429415">
                <p className="text-muted-foreground">
                  Telefon: +38163 742 94 15
                </p>
              </a>
            </div>
            <div>
              <a href="mailto:manikamwebsolutions@gmail.com">
                <p className="text-muted-foreground text-wrap">
                  Email: manikamwebsolutions@gmail.com
                </p>
              </a>
            </div>
            <div className="flex space-x-4 justify-center md:justify-start">
              {/* <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook />
              </a> */}
              <a
                href="https://www.instagram.com/manikam.web.solutions/"
                target={"_blank"}
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram />
              </a>
            </div>
          </div>
          <div className="md:col-span-1 col-span-2 text-center">
            <h3 className="text-lg font-semibold mb-2 md:mb-4">
              Manikam <span className="">Web</span> Solutions
            </h3>

            <p className=" font-bold text-red-700 ">
              Mi stvaramo priče koje se pamte.
            </p>
          </div>
        </div>
        <div className="mt-5 pt-5 md:mt-8 md:pt-8 border-t border-muted-foreground/20 text-center text-muted-foreground">
          <p>&copy; 2024 ManikamWebSolutions. Sva prava zadržana.</p>
        </div>
      </div>
    </motion.footer>
  );
}
