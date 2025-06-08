import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all translations
import homeTranslations from '../pages/Home/homeTranslations';
// Import other page translations as they're created
// import servicesTranslations from '../pages/Services/servicesTranslations';
// import aboutTranslations from '../pages/About/aboutTranslations';
// import contactTranslations from '../pages/Contact/contactTranslations';

const resources = {
  en: {
    home: homeTranslations.en,
    // services: servicesTranslations.en,
    // about: aboutTranslations.en,
    // contact: contactTranslations.en,
  },
  pl: {
    home: homeTranslations.pl,
    // services: servicesTranslations.pl,
    // about: aboutTranslations.pl,
    // contact: contactTranslations.pl,
  },
  de: {
    home: homeTranslations.de,
    // services: servicesTranslations.de,
    // about: aboutTranslations.de,
    // contact: contactTranslations.de,
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    
    interpolation: {
      escapeValue: false,
    },
    
    ns: ['home', 'services', 'about', 'contact'],
    defaultNS: 'home'
  });

export default i18n;