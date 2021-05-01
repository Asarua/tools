const { assert, is } = require('../src')

describe('validate assert: ', () => {
  it('verify condition will be truthy: ', () => {
    expect(is.isUndefined(assert(true))).toBeTruthy()
    expect(() => assert(false)).toThrow('')
    expect(() => assert(false, '类型错误')).toThrow('类型错误')
  })
})
