"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

const LanguageSwitcher = () => {
  const pathname = usePathname();

  const [isChanging, setIsChanging] = useState(false);

  // Detektuj trenutni jezik iz URL-a
  const currentLocale = pathname.startsWith("/sr") ? "sr" : "en";
  const otherLocale = currentLocale === "sr" ? "en" : "sr";

  const handleLanguageChange = async () => {
    if (isChanging) return;
    setIsChanging(true);

    // Zameni /sr sa /en ili obrnuto
    const newPath = pathname.replace(
      new RegExp(`^/${currentLocale}`),
      `/${otherLocale}`
    );

    // Postavi cookie za USER_LOCALE_OVERRIDE sa SameSite atributom
    document.cookie = `USER_LOCALE_OVERRIDE=${otherLocale}; path=/; max-age=${
      60 * 60 * 24 * 365
    }; SameSite=Lax`;

    // Postavi i NEXT_LOCALE cookie za konzistentnost
    document.cookie = `NEXT_LOCALE=${otherLocale}; path=/; max-age=${
      60 * 60 * 24 * 365
    }; SameSite=Lax`;

    // Hard refresh da bi middleware mogao da pročita cookie
    window.location.href = newPath;
  };

  return (
    <button
      onClick={handleLanguageChange}
      disabled={isChanging}
      className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-orange-600 to-orange-400 text-white hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label={`Switch to ${otherLocale.toUpperCase()}`}
    >
      <span className="text-sm md:text-base">
        {currentLocale.toUpperCase()}
      </span>
      <span className="text-xs opacity-75">→</span>
      <span className="text-sm md:text-base opacity-75">
        {otherLocale.toUpperCase()}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
