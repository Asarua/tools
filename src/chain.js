const before = require('./before')
const after = require('./after')

function chain(fn, beforeFn, afterFn) {
  return after(before(fn, beforeFn), afterFn)
}

module.exports = chain
