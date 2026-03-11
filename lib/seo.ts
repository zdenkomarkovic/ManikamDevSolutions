const baseUrl = "https://manikamwebsolutions.com";
export function generateAlternateLinks(pathname: string) {
  return {
    canonical: `${baseUrl}${pathname}`,
    languages: {
      "sr": `${baseUrl}${pathname}`,
      "x-default": `${baseUrl}${pathname}`,
    },
  };
}
