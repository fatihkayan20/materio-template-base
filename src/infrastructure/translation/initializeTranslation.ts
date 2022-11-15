import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationDe from "./deDE.json";
import translationEn from "./enUS.json";

const resources = {
  de: { translation: translationDe },
  en: { translation: translationEn },
};
i18next.use(initReactI18next).init({
  resources,
  lng: "de",
  fallbackLng: "en",
  react: {
    useSuspense: true,
  },
  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
