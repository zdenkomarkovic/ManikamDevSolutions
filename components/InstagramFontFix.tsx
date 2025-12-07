"use client";
import { useEffect } from "react";

export default function InstagramFontFix() {
  useEffect(() => {
    if (!navigator.userAgent.includes("Instagram")) return;

    const selectors = ["h1", "h2", "h3", "p", "li", "span"]; // sve tekstualne elemente
    selectors.forEach((tag) => {
      document.querySelectorAll(tag).forEach((el) => {
        const style = window.getComputedStyle(el);
        const fontSize = style.fontSize;
        (el as HTMLElement).style.fontSize = fontSize; // fiksira trenutno izračunato
      });
    });
  }, []);

  return null;
}
