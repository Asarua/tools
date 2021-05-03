function before(beforeFn, fn, isEffect) {
  return function(...args) {
    const val = beforeFn(...args)
    return isEffect
      ? fn(val)
      : fn(...args)
  }
}

module.exports = before
