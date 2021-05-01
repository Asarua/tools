const { noop, is } = require('../src')

describe('noop: ', () => {
  it('it is noop: ', () => {
    expect(noop.length).toBe(0)
    expect(is.isUndefined(noop())).toBeTruthy()
  })
})
