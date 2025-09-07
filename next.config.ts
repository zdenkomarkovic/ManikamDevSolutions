import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    suppressHydrationWarnings: true,
  },
};

export default nextConfig;
