/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://manikamwebsolutions.com",
  generateRobotsTxt: false,
  sitemapSize: 5000,

  // Isključi sve /en/ stranice i srpske URL-ove sa engleskim slugovima
  exclude: [
    '/en',
    '/en/*',
    '/sr/website-redesign',
    '/sr/google-ads',
    '/sr/website-development',
    '/sr/webshop-development',
    '/sr/seo-optimization',
    '/sr/social-media',
    '/sr/software-development',
  ],
};
