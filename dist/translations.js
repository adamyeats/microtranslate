'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Translations = function () {
  function Translations(translations, language) {
    _classCallCheck(this, Translations);

    this.language = language;

    if (language in translations) {
      this.text = translations[language];
    } else {
      throw new Error('No translations found for supplied language');
    }
  }

  _createClass(Translations, [{
    key: 'get',
    value: function get(key) {
      return key.split('.').reduce(function (prev, curr) {
        return prev ? prev[curr] : undefined;
      }, this.text);
    }
  }]);

  return Translations;
}();

exports.default = Translations;