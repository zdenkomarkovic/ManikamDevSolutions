import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  trailingSlash: false,
  experimental: {
    optimizeCss: true,
  },
};
export default nextConfig;
