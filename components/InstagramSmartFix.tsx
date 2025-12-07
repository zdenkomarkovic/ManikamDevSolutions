"use client";
import { useEffect } from "react";

export default function InstagramSmartFix() {
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (!ua.includes("instagram")) return;

    // 1. Reset zoom da HERO bude opet fullscreen
    document.documentElement.style.zoom = "0.92";

    // 2. Zaključaj font da IG ne menja veličinu teksta
    const elements = document.querySelectorAll("h1,h2,h3,h4,p,li,span");
    elements.forEach((el) => {
      const style = window.getComputedStyle(el);
      (el as HTMLElement).style.fontSize = style.fontSize;
    });
  }, []);

  return null;
}
