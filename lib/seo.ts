const baseUrl = "https://manikamwebsolutions.com";

export function generateAlternateLinks(pathname: string) {
  return {
    canonical: `${baseUrl}/sr${pathname}`,
    languages: {
      "sr": `${baseUrl}/sr${pathname}`,
      "x-default": `${baseUrl}/sr${pathname}`,
    },
  };
}
