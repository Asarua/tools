const { deepClone } = require('../src')

describe('get deep clone value: ', () => {
  it('get simple type value: ', () => {
    expect(deepClone(1)).toBe(1)
    expect(deepClone('1')).toBe('1')
    expect(deepClone(null)).toBe(null)
    expect(deepClone(void 0)).toBe(void 0)
    expect(deepClone(true)).toBeTruthy()
  })
})
