function curry(fn, ...initialState) {
  const length = fn.length
  const args = initialState.slice()

  return function curried(...ctxs) {
    args.push(...Array.from(ctxs))
    if (args.length < length) {
      return curried
    } else {
      return fn(...args)
    }
  }
}

module.exports = curry
