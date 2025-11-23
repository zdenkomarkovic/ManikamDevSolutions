/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://manikamwebsolutions.com",
  generateRobotsTxt: false, // Koristimo custom robots.txt
  sitemapSize: 5000,

  // Exclude redirect URLs from sitemap (URLs that have redirects in next.config.ts)
  exclude: [
    // English URLs with Serbian slugs (redirect to English slugs)
    '/en/drustvene-mreze',
    '/en/google-oglasavanje',
    '/en/izrada-sajta',
    '/en/izrada-web-shopa',
    '/en/seo-optimizacija',
    '/en/izrada-softvera',
    '/en/redizajn-migracija',

    // Serbian URLs with English slugs (redirect to Serbian slugs)
    '/sr/website-redesign',
    '/sr/google-ads',
    '/sr/website-development',
    '/sr/webshop-development',
    '/sr/seo-optimization',
    '/sr/social-media',
    '/sr/software-development',
  ],
};
