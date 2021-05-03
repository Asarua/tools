function memorize(fn) {
  if (typeof fn !== 'function') return
  const cache = fn.cache || {}
  return function memo(...args) {
    const argsStr = JSON.stringify(args)
    const val = cache[argsStr]
    memo.cache = cache
    return val || (cache[argsStr] = fn(...args))
  }
}

module.exports = memorize
