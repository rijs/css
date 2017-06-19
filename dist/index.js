'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = css;

var _includes = require('utilise/includes');

var _includes2 = _interopRequireDefault(_includes);

/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// Exposes a convenient global instance
// -------------------------------------------
function css(ripple) {
  log('creating');
  ripple.types['text/css'] = {
    header: 'text/css',
    check: function check(res) {
      return (0, _includes2.default)('.css')(res.name);
    },
    parse: function parse(res) {
      res.headers.hash = djb(res.body);
      return res;
    }
  };

  return ripple;
}

var log = require('utilise/log')('[ri/types/css]');

var djb = function djb(str) {
  var hash = 5381,
      i = str.length;

  while (i) {
    hash = hash * 33 ^ str.charCodeAt(--i);
  }return hash >>> 0;
};