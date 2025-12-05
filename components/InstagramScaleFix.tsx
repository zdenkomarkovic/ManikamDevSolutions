"use client";
import { useEffect } from "react";

export default function InstagramTextScale() {
  useEffect(() => {
    if (navigator.userAgent.includes("Instagram")) {
      const textContainers = document.querySelectorAll(".ig-scale-text");
      textContainers.forEach((el) => {
        (el as HTMLElement).style.zoom = "0.80"; // prilagodi po potrebi
      });
    }
  }, []);

  return null;
}
