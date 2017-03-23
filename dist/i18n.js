'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventemitter = require('eventemitter3');

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _translations = require('./translations');

var _translations2 = _interopRequireDefault(_translations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var i18n = function (_EventEmitter) {
  _inherits(i18n, _EventEmitter);

  function i18n() {
    var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';

    _classCallCheck(this, i18n);

    var _this = _possibleConstructorReturn(this, (i18n.__proto__ || Object.getPrototypeOf(i18n)).call(this));

    _this._language = language;
    return _this;
  }

  _createClass(i18n, [{
    key: 'translator',
    value: function translator(messages) {
      if (!messages) {
        throw new Error('You must supply an object of translated strings.');
      }

      return new _translations2.default(messages, this.language);
    }
  }, {
    key: 'language',
    get: function get() {
      return this._language;
    },
    set: function set(lang) {
      if (lang && typeof lang === 'string') {
        this._language = lang;
        this.emit('language-change', lang);
      }
    }
  }], [{
    key: 'getDOMLocale',
    value: function getDOMLocale() {
      if (typeof window !== 'undefined' && 'navigator' in window) {
        return navigator.languages && navigator.languages.length > 0 ? navigator.languages[0] : navigator.language || navigator.userLanguage;
      } else {
        return null;
      }
    }
  }]);

  return i18n;
}(_eventemitter2.default);

exports.default = i18n;