"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-200 py-8  shadow-[0px_-2px_5px_rgba(0,0,0,0.1)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-muted-foreground">
        <div className="grid grid-cols-[1fr_2fr] text-center md:text-left md:grid-cols-3 gap-8 mx-auto">
          <div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary"
                >
                  Pocetna
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

          <div className="space-y-2">
            <a href="tel:+381637429415">
              <p className="text-muted-foreground">Telefon: +38163 742 94 15</p>
            </a>

            <a href="mailto:manikamwebsolutions@gmail.com">
              <p className="text-muted-foreground">
                Email: manikamwebsolutions@gmail.com
              </p>
            </a>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram />
              </a>
            </div>
          </div>
          <div className="md:col-span-1 col-span-2 text-center">
            <h3 className="text-lg font-semibold mb-4">
              Manikam Web Solutions
            </h3>

            <p className="text-muted-foreground">
              Mi stvaramo priče koje se pamte.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center text-muted-foreground">
          <p>&copy; 2024 ManikamWebSolutions. Sva prava zadržana.</p>
        </div>
      </div>
    </motion.footer>
  );
}
