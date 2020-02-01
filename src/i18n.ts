import EventEmitter from 'eventemitter3';
import { Translations } from './translations';

import { TranslationsMap } from './types';

export class i18n extends EventEmitter {
  private _language: string;

  constructor(language = 'en') {
    super();
    this._language = language;
  }

  get language() {
    return this._language;
  }

  set language(lang: string) {
    if (lang && typeof lang === 'string') {
      this._language = lang;
      this.emit('language-change', lang);
    }
  }

  static getDOMLocale(): string | null {
    if (typeof window !== 'undefined' && 'navigator' in window) {
      return navigator.languages && navigator.languages.length > 0
        ? navigator.languages[0]
        : navigator.language || (navigator as any).userLanguage;
    } else {
      return null;
    }
  }

  translator(translations?: TranslationsMap): Translations {
    if (!translations) {
      throw new Error('You must supply an object of translated strings.');
    }

    return new Translations(translations, this.language);
  }
}
