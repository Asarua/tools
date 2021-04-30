function memorize(fn) {
  if (typeof fn !== 'function') return
  const cache = fn.cache || {}
  return function memo(...args) {
    const argsStr = JSON.stringify(Array.from(args))
    const val = cache[argsStr]
    return val || (cache[argsStr] = fn(...args))
  }
}

module.exports = memorize
