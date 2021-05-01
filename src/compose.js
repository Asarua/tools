function compose(...fns) {
  return function fn(...args) {
    return fns.reduce((prev, next) => prev(next(...args)))
  }
}

module.exports = compose
