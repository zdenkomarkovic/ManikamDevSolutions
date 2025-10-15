import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.manikamwebsolutions.com',
          },
        ],
        destination: 'https://manikamwebsolutions.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
