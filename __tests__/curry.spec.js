const { curry } = require('../src')

describe('validate curried functions: ', () => {
  it('should get same value: ', () => {
    const add = (a, b, c) => a + b + c
    const verifyValue = val => {
      expect(val).toBe(add(1, 2, 3))
    }

    verifyValue(curry(add)(1)(2)(3))
    verifyValue(curry(add)(1, 2)(3))
    verifyValue(curry(add)(1)(2, 3))
    verifyValue(curry(add)(1, 2, 3))
  })
})
