"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-100 py-8  shadow-[0px_-2px_5px_rgba(0,0,0,0.1)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-muted-foreground">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary"
                >
                  ManikamWebSolutions
                </Link>
              </li>

              <li>
                <Link
                  href="/usluge"
                  className="text-muted-foreground hover:text-primary"
                >
                  Cenovnik
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
            <p className="text-muted-foreground">Telefon: +38163 742 94 15</p>
            <p className="text-muted-foreground">Email: office@manikam.rs</p>
            <div className="flex space-x-4 pt-5 ">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4  font-dancing">
              Manikam Web Solutions
            </h3>
            <p className="text-muted-foreground">
              Mi ostavljamo trag po kome nas pamte
            </p>
            <p className="text-muted-foreground">
              Stvaramo priče koje se pamte.
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
