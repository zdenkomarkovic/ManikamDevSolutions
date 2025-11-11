import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false, // Force bez trailing slash

  async redirects() {
    return [
      // Redirect EN locale to English URLs
      {
        source: "/en/redizajn-migracija",
        destination: "/en/website-redesign",
        permanent: true,
      },
      {
        source: "/en/google-oglasavanje",
        destination: "/en/google-ads",
        permanent: true,
      },
      {
        source: "/en/izrada-sajta",
        destination: "/en/website-development",
        permanent: true,
      },
      {
        source: "/en/izrada-web-shopa",
        destination: "/en/webshop-development",
        permanent: true,
      },
      {
        source: "/en/seo-optimizacija",
        destination: "/en/seo-optimization",
        permanent: true,
      },
      {
        source: "/en/drustvene-mreze",
        destination: "/en/social-media",
        permanent: true,
      },
      {
        source: "/en/izrada-softvera",
        destination: "/en/software-development",
        permanent: true,
      },

      // Redirect SR locale to Serbian URLs
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
