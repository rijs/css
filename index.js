// -------------------------------------------
// Exposes a convenient global instance 
// -------------------------------------------
module.exports = function css(ripple){
  log('creating')
  ripple.types['text/css'] = {
    header: 'text/css'
  , ext: '*.css'
  , selector: res => `[css~="${res.name}"]`
  , extract: el => (attr(`css`)(el) || '').split(' ')
  , check(res){ return includes('.css')(res.name) }
  , shortname: path => basename(path)
  , load(res) {
      res.body = file(res.headers.path)
      res.headers['content-type'] = this.header
      ripple(res)
      return ripple.resources[res.name]
    }
  , parse(res){ 
      res.headers.hash = res.headers.hash || hash(res.body)
      return res
    }
  }

  return ripple
}

const includes = require('utilise/includes')
    , attr = require('utilise/attr')
    , file = require('utilise/file')
    , log = require('utilise/log')('[ri/types/css]')
    , hash = require('djbx')
    , { basename } = require('path')