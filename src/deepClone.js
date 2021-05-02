function deepClone(target) {
  const notComplex = (val) => typeof val !== 'object' && typeof val !== 'function'
  if (
    target === null || notComplex(target)
  ) return target

  let obj = {}
  if (Array.isArray(target)) {
    obj = []
  }

  for (let prop in target) {
    if (target.hasOwnProperty(prop)) {
      if (notComplex(target[prop])) {
        obj[prop] = target[prop]
      } else {
        obj[prop] = deepClone(target[prop])
      }
    }
  }
  return obj
}

module.exports = deepClone
