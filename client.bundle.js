var css = (function () {
'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var includes = function includes(pattern){
  return function(d){
    return d && d.indexOf && ~d.indexOf(pattern)
  }
};

var is_1 = is;
is.fn      = isFunction;
is.str     = isString;
is.num     = isNumber;
is.obj     = isObject;
is.lit     = isLiteral;
is.bol     = isBoolean;
is.truthy  = isTruthy;
is.falsy   = isFalsy;
is.arr     = isArray;
is.null    = isNull;
is.def     = isDef;
is.in      = isIn;
is.promise = isPromise;
is.stream  = isStream;

function is(v){
  return function(d){
    return d == v
  }
}

function isFunction(d) {
  return typeof d == 'function'
}

function isBoolean(d) {
  return typeof d == 'boolean'
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

function isLiteral(d) {
  return typeof d == 'object' 
      && !(d instanceof Array)
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

function isPromise(d) {
  return d instanceof Promise
}

function isStream(d) {
  return !!(d && d.next)
}

function isIn(set) {
  return function(d){
    return !set ? false  
         : set.indexOf ? ~set.indexOf(d)
         : d in set
  }
}

var attr = function attr(name, value) {
  var args = arguments.length;
  
  return !is_1.str(name) && args == 2 ? attr(arguments[1]).call(this, arguments[0])
       : !is_1.str(name) && args == 3 ? attr(arguments[1], arguments[2]).call(this, arguments[0])
       :  function(el){
            var ctx = this || {};
            el = ctx.nodeName || is_1.fn(ctx.node) ? ctx : el;
            el = el.node ? el.node() : el;
            el = el.host || el;

            return args > 1 && value === false ? el.removeAttribute(name)
                 : args > 1                    ? (el.setAttribute(name, value), value)
                 : el.attributes.getNamedItem(name) 
                && el.attributes.getNamedItem(name).value
          } 
};

var to = { 
  arr: toArray
, obj: toObject
};

function toArray(d){
  return Array.prototype.slice.call(d, 0)
}

function toObject(d) {
  var by = 'id';

  return arguments.length == 1 
    ? (by = d, reduce)
    : reduce.apply(this, arguments)

  function reduce(p,v,i){
    if (i === 0) { p = {}; }
    p[is_1.fn(by) ? by(v, i) : v[by]] = v;
    return p
  }
}

var client = typeof window != 'undefined';

var owner = client ? /* istanbul ignore next */ window : commonjsGlobal;

var log = function log(ns){
  return function(d){
    if (!owner.console || !console.log.apply) { return d; }
    is_1.arr(arguments[2]) && (arguments[2] = arguments[2].length);
    var args = to.arr(arguments)
      , prefix = '[log][' + (new Date()).toISOString() + ']' + ns;

    args.unshift(prefix.grey ? prefix.grey : prefix);
    return console.log.apply(console, args), d
  }
};

var css = createCommonjsModule(function (module) {
// -------------------------------------------
// Exposes a convenient global instance 
// -------------------------------------------
module.exports = function css(ripple){
  log$$1('creating');
  ripple.types['text/css'] = {
    header: 'text/css'
  , selector: function (res) { return ("[css~=\"" + (res.name) + "\"]"); }
  , extract: function (el) { return (attr("css")(el) || '').split(' '); }
  , check: function check(res){ return includes('.css')(res.name) }
  , parse: function parse(res){ 
      res.headers.hash = djb(res.body);
      return res
    }
  };

  return ripple
};

var log$$1 = log('[ri/types/css]');

var djb = function (str) {
  var hash = 5381
    , i = str.length;

  while (i)
    { hash = (hash * 33) ^ str.charCodeAt(--i); }

  return hash >>> 0
};
});

return css;

}());
