const { memorize, is } = require('../src')

describe('get memorized functions: ', () => {
  it('validating other types returns undefined ones: ', () => {
    const validateUndefined = target => {
      expect(
        is.isUndefined(
          memorize(target)
        )
      ).toBeTruthy()
    }
    validateUndefined('')
    validateUndefined(1)
    validateUndefined(true)
    validateUndefined(null)
    validateUndefined(void 0)
    validateUndefined(Symbol())
    validateUndefined(1n)
    validateUndefined({})
    validateUndefined(new Date)
  })

  it('verify that complex types are equal: ', () => {
    function fn() {
      return {
        a: 1
      }
    }
    const memo = memorize(fn)
    const first = memo(1)
    const second = memo(1)
    expect(first === second).toBeTruthy()
  })
})
