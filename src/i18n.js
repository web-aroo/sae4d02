import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          languages: {
            en: 'English',
            fr: 'French'
          }
        }
      },
      fr: {
        translation: {
          languages: {
            en: 'Anglais',
            fr: 'Français'
          }
        }
      }
    }
  });
