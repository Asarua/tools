function before(fn, beforeFn, isEffect) {
  return function(...args) {
    const val = beforeFn(...args)
    return isEffect
      ? fn(val)
      : fn(...args)
  }
}

module.exports = before
