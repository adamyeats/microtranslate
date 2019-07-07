import { TranslationsMap } from "./types";

export class Translations {
  public language: string;
  public text: object;

  constructor(translations: TranslationsMap, language: string) {
    this.language = language;

    if (language in translations) {
      this.text = translations[language];
    } else {
      throw new Error('No translations found for supplied language');
    }
  }

  get(key: string) {
    return key.split('.').reduce((prev: any, curr) => {
      return prev ? prev[curr] : undefined;
    }, this.text);
  }
}
