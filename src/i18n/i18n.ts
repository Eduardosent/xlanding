import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../i18n/translations/en.json";
import es from "../i18n/translations/es.json";

// Detectar idioma solo si se ejecuta en el cliente
const isClient = typeof window !== "undefined";
const userLang = isClient ? window.navigator.language : "en";
const lang = userLang.startsWith("es") ? "es" : "en";

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        es: { translation: es },
      },
      lng: lang,
      fallbackLng: "en",
      debug: false,
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;
