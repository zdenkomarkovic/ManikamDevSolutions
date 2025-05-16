import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getOptions } from "./settings";

i18n.use(initReactI18next).init({
  ...getOptions(),
  lng:
    typeof window !== "undefined" ? localStorage.getItem("lang") || "sr" : "sr",
  resources: {},
  react: { useSuspense: false },
});

export default i18n;
