"use client";
import { useEffect } from "react";

export default function InstagramTextScale() {
  useEffect(() => {
    if (navigator.userAgent.includes("Instagram")) {
      const textElements = document.querySelectorAll(".ig-scale-text");
      textElements.forEach((el) => {
        (el as HTMLElement).style.zoom = "0.85"; // prilagodi po potrebi
      });
    }
  }, []);

  return null;
}
