class Translations {
  constructor (translations, language) {
    this.language = language

    if (language in translations) {
      this.text = translations[language]
    }
    else {
      throw new Error('No translations found for supplied language')
    }
  }

  get (key) {
    return key.split('.').reduce((prev, curr) => {
      return prev ? prev[curr] : undefined
    }, this.text)
  }
}

module.exports = Translations
