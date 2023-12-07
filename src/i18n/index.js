import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsEN from '../translation/en/translations.json';
import translationsES from '../translation/es/translations.json';
import translationsPT from '../translation/pt/translations.json'


// the translations
const resources = {
  en: {
    translation: translationsEN
  },
  es: {
    translation: translationsES
  },
  pt: {
    translation: translationsPT
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources, // resources are important to load translations for the languages.
    lng: "en", // It acts as default language. When the site loads, content is shown in this language.  
    debug: true,
    fallbackLng: "en", // use de if selected language is not available
    interpolation: {
      escapeValue: true
    },
    ns: "translation", // namespaces help to divide huge translations into multiple small files.
    defaultNS: "translation"
  });

export default i18n;

