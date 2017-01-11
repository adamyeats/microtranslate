import Translations from './translations'

class i18n {
  constructor (language = 'en', opts = {}) {
    this.language = language
    this.options = opts
  }

  static getDOMLocale () {
    if (typeof window !== 'undefined' && 'navigator' in window) {
      return navigator.languages
        ? navigator.languages[0]
        : (navigator.language || navigator.userLanguage)
    }
    else {
      return null;
    }
  }

  translator (messages, language) {
    if (!messages) {
      throw new Error('You must supply an object of translated strings.')
    }

    return new Translations(messages, language || this.language)
  }
}

export default i18n
