"use client";
import { useEffect } from "react";

export default function InstagramScaleFix() {
  useEffect(() => {
    const ua = navigator.userAgent || "";
    if (ua.includes("Instagram")) {
      document.documentElement.style.zoom = "0.80";
    }
  }, []);

  return null;
}
