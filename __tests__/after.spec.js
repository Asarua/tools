const { after } = require('../src')

describe('check function with after: ', () => {
  it('normal after: ', () => {
    let v = 1
    function fn(v) {
      return v + 1
    }

    function afterFn(v) {
      return v + 1
    }

    const func = after(fn,afterFn)

    expect(v).toBe(1)
    expect(func(v)).toBe(2)
    expect(v).toBe(1)
  })

  it('after function with effect: ', () => {
    let v = '1'
    function fn(v) {
      return v + 2
    }

    function afterFn(v) {
      return v + 1
    }

    const func = after(fn, afterFn, true)

    expect(v).toBe('1')
    expect(func(v)).toBe('121')
  })
})
