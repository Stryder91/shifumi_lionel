import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from '../data/translations/english.json';
import translationFR from '../data/translations/french.json';

/** HOW TO USE IT */

/**
 * Go in a component, import { useTranslation } from 'react-i18next';
 * then const { t } = useTranslation();
 * Then based on the JSON, put in a <div> tag t("title")
 * That's it!
 */
const resources = {
  EN: {
    translation: translationEN,
  },
  'fr-FR': {
    translation: translationFR,
  },
};
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init
const options = {
  // order and from where user language should be detected
  order: ['navigator'],
};

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: 'EN',
    debug: false,
    detection: options,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });
  
export default i18n;