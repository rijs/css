'use strict';

// -------------------------------------------
// Exposes a convenient global instance
// -------------------------------------------
module.exports = function css(ripple) {
  log('creating');
  ripple.types['text/css'] = {
    header: 'text/css',
    check: function check(res) {
      return includes('.css')(res.name);
    },
    parse: function parse(res) {
      res.headers.hash = djb(res.body);
      return res;
    }
  };

  return ripple;
};

var includes = require('utilise/includes'),
    log = require('utilise/log')('[ri/types/css]');

var djb = function djb(str) {
  var hash = 5381,
      i = str.length;

  while (i) {
    hash = hash * 33 ^ str.charCodeAt(--i);
  }return hash >>> 0;
};