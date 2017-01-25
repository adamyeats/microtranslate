import EventEmitter from 'eventemitter3'
import Translations from './translations'

class i18n extends EventEmitter {
  constructor (language = 'en') {
    super()
    this._language = language
  }

  get language () {
    return this._language
  }

  set language (lang) {
    if (lang && typeof lang === 'string') {
      this._language = lang
      this.emit('language-change', lang)
    }
  }

  static getDOMLocale () {
    if (typeof window !== 'undefined' && 'navigator' in window) {
      return navigator.languages
        ? navigator.languages[0]
        : (navigator.language || navigator.userLanguage)
    }
    else {
      return null
    }
  }

  translator (messages) {
    if (!messages) {
      throw new Error('You must supply an object of translated strings.')
    }

    return new Translations(messages, this.language)
  }
}

export default i18n
