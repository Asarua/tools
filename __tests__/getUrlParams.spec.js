const { getUrlParams } = require('../src')

describe('get params from url: ', () => {
  it('verify that both the URL and the window are undefined: ', () => {
    expect(getUrlParams('a')).toBe('')
  })

  it('verify when name in url: ', () => {
    expect(getUrlParams('a', 'baidu.com?a=1')).toBe('1')
    expect(getUrlParams('b', 'baidu.com?a=1&b=2')).toBe('2')
  })

  it('verify when name not in url: ', () => {
    expect(getUrlParams('a', 'baidu.com')).toBe('')
  })
})
