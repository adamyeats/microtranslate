tiny-i18n
=========

[![Build Status](https://travis-ci.org/xadamy/tiny-i18n.svg)](https://travis-ci.org/xadamy/tiny-i18n) [![codecov](https://codecov.io/gh/xadamy/tiny-i18n/branch/master/graph/badge.svg)](https://codecov.io/gh/xadamy/tiny-i18n)

## Why?

`tiny-i18n` was created out of a need to provide localised strings to React components, although it is is not tied to the React ecosystem. It is an Event-emitting ES2015 class that is designed to be the "single source of truth" for the current display language of the React components that are subscribed to it.

## Installation

For use with Node, install with [NPM](http://npmjs.org):

```
$ npm install tiny-i18n
```

## Usage

### Instantiation

```js
const i18n = new i18n(language);
```

Where `language` is a string containing an [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) compliant language code. Ideally, `i18n` would be a singleton object.

### Translations Object

When calling `i18n.translator()` to get a `Translations` object, you must supply an object that looks like this as an argument:

```
{
  "en": {
    "full": "Full",
    "crowded": "Crowded",
    "lively": "Lively",
    "space": "Space",
    "quiet": "Quiet",
    "empty": "Empty"
  },
  "nl": {
    "full": "Vol",
    "crowded": "Druk",
    "lively": "Gezellig",
    "space": "Plek",
    "quiet": "Rustig",
    "empty": "Leeg"
  }
}
```

Each language key should have an object assigned to it as a value that contains translation strings. The keys of this object should be identical for each language, but the values should be the text you would want to display for that language. For example, if `i18n.language === 'en'` and you call `const t = i18n.translator(object)`, then `t.get('full') === 'Full'`. If `i18n.language` is modified to `'nl'`, then `t.get('full') === 'Vol'` instead.

## Running the tests

Test are run using [Jest](https://facebook.github.io/jest/). Clone the repo, run `yarn install`, and then `yarn test`.

## Contributing

### Note on Patches/Pull Requests

- Fork the project.
- Make your feature addition or bug fix.
- Add tests for it. This is important so I don't break it in a future version unintentionally.
- Send a pull request. Bonus points for topic branches.

### Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](https://github.com/xadamy/tiny-i18n/blob/master/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## Copyright

Copyright (c) 2017-2019 Adam Yeats. See LICENSE for details.
