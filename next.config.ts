import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,

  async redirects() {
    return [
      // Srpski URL-ovi sa engleskim slugovima → srpski slugovi
      {
        source: "/sr/website-redesign",
        destination: "/sr/redizajn-migracija",
        permanent: true,
      },
      {
        source: "/sr/google-ads",
        destination: "/sr/google-oglasavanje",
        permanent: true,
      },
      {
        source: "/sr/website-development",
        destination: "/sr/izrada-sajta",
        permanent: true,
      },
      {
        source: "/sr/webshop-development",
        destination: "/sr/izrada-web-shopa",
        permanent: true,
      },
      {
        source: "/sr/seo-optimization",
        destination: "/sr/seo-optimizacija",
        permanent: true,
      },
      {
        source: "/sr/social-media",
        destination: "/sr/drustvene-mreze",
        permanent: true,
      },
      {
        source: "/sr/software-development",
        destination: "/sr/izrada-softvera",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
