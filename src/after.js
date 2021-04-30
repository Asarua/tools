function after(fn, afterFn, isEffect) {
  return function(...args) {
    const val = fn(...args)
    return isEffect ? afterFn(val) : afterFn(...args)
  }
}

module.exports = after
