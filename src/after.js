function after(fn, afterFn, isEffect) {
  return function(...args) {
    const val = fn(...args)
    return isEffect ? afterFn(val) : (function() {
      afterFn(...args)
      return val
    })()
  }
}

module.exports = after
