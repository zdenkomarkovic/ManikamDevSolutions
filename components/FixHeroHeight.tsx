"use client";
import { useEffect } from "react";

export default function FixHeroHeight() {
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    function setHeroHeight() {
      if (hero) {
        hero.style.height = window.innerHeight + "px";
      }
    }

    setHeroHeight();
    window.addEventListener("resize", setHeroHeight);
    return () => window.removeEventListener("resize", setHeroHeight);
  }, []);

  return null;
}
