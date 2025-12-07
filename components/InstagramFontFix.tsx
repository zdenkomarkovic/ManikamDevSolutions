"use client";
import { useEffect } from "react";

export default function InstagramFontFix() {
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (!ua.includes("instagram")) return;

    const elements = document.querySelectorAll(
      "h1,h2,h3,h4,p,li,span,a,button"
    );
    elements.forEach((el) => {
      const style = window.getComputedStyle(el);
      (el as HTMLElement).style.fontSize = style.fontSize; // zaključava font
    });
  }, []);

  return null;
}
