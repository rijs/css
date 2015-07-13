(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

/* istanbul ignore next */
var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

// -------------------------------------------
// Exposes a convenient global instance
// -------------------------------------------
module.exports = css;

function css(ripple) {
  log("creating");
  ripple.types["text/css"] = {
    header: "text/css",
    check: function check(res) {
      return includes(".css")(res.name);
    }
  };

  return ripple;
}

var includes = _interopRequire(require("utilise/includes"));

var log = _interopRequire(require("utilise/log"));

log = log("[ri/types/css]");
},{"utilise/includes":2,"utilise/log":3}],2:[function(require,module,exports){
module.exports = require('includes')
},{"includes":4}],3:[function(require,module,exports){
module.exports = require('log')
},{"log":5}],4:[function(require,module,exports){
module.exports = function includes(pattern){
  return function(d){
    return ~d.indexOf(pattern)
  }
}
},{}],5:[function(require,module,exports){
var is = require('is')
  , to = require('to')

module.exports = function log(prefix){
  return function(d){
    is.arr(arguments[2]) && (arguments[2] = arguments[2].length)
    var args = to.arr(arguments)
    args.unshift(''.grey ? prefix.grey : prefix)
    return console.log.apply(console, args), d
  }
}
},{"is":6,"to":7}],6:[function(require,module,exports){
module.exports = { 
  fn     : isFunction
, str    : isString
, num    : isNumber
, obj    : isObject
, truthy : isTruthy
, falsy  : isFalsy
, arr    : isArray
, null   : isNull
, def    : isDef
, in     : isIn
}

function isFunction(d) {
  return typeof d == 'function'
}

function isString(d) {
  return typeof d == 'string'
}

function isNumber(d) {
  return typeof d == 'number'
}

function isObject(d) {
  return typeof d == 'object'
}

function isTruthy(d) {
  return !!d == true
}

function isFalsy(d) {
  return !!d == false
}

function isArray(d) {
  return d instanceof Array
}

function isNull(d) {
  return d === null
}

function isDef(d) {
  return typeof d !== 'undefined'
}

function isIn(set) {
  return function(d){
    return ~set.indexOf(d)
  }
}
},{}],7:[function(require,module,exports){
module.exports = { 
  arr : toArray
}

function toArray(d){
  return Array.prototype.slice.call(d, 0)
}
},{}]},{},[1]);
