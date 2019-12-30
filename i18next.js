import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import english from './translations/english.json'
import russian from './translations/russian.json'

i18next
  .use(initReactI18next)
  .init({
    lng: 'en_US',
    fallbackLng: 'en_US',
    interpolation: { escapeValue: false },

    resources: {
      en_US: {
        translation: english,
      },
      ru_RU: {
        translation: russian,
      },
    },
  })

export default i18next
