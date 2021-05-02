const { before } = require('../src')

describe('check function with before: ', () => {
  it('normal before: ', () => {
    let v = 1
    function fn() {
      return 2
    }
    
    function beforeFn(v) {
      return v + 1
    }

    const func = before(fn, beforeFn)

    expect(v).toBe(1)
    expect(func(v)).toBe(2)
    expect(v).toBe(1)
  })

  it('before function with effect: ', () => {
    let v = '3'
    function fn(v) {
      return v + 2
    }

    function beforeFn(v) {
      return v + 1
    }

    const func = before(fn, beforeFn, true)

    expect(v).toBe('3')
    expect(func(v)).toBe('312')
  })
})
