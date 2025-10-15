const baseUrl = "https://manikamwebsolutions.com";
const supportedLocales = ["sr", "en"];

export function generateAlternateLinks(pathname: string, locale?: string) {
  const languages: Record<string, string> = {};

  supportedLocales.forEach((loc) => {
    languages[loc] = `${baseUrl}/${loc}${pathname}`;
  });

  // x-default uvek pokazuje na /en verziju (default za botove)
  languages["x-default"] = `${baseUrl}/en${pathname}`;

  // Canonical pokazuje na trenutnu locale verziju
  const canonicalPath = locale ? `/${locale}${pathname}` : pathname;

  return {
    canonical: `${baseUrl}${canonicalPath}`,
    languages,
  };
}
