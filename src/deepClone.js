function deepClone(target) {
  const isComplex = typeof target !== 'object' || typeof target !== 'function'
  if (
    target === null || isComplex
  ) return target

  let obj = {}
  if (Array.isArray(target)) {
    obj = []
  }

  for (let prop in target) {
    if (target.hasOwnProperty(prop)) {
      if (isComplex) {
        obj[prop] = deepClone(target[prop])
      } else {
        obj[prop] = target[prop]
      }
    }
  }
  return obj
}

module.exports = deepClone
