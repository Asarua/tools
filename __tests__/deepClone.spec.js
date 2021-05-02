const { deepClone } = require('../src')

describe('get deep clone value: ', () => {
  it('get simple type value: ', () => {
    expect(deepClone(1)).toBe(1)
    expect(deepClone('1')).toBe('1')
    expect(deepClone(null)).toBe(null)
    expect(deepClone(void 0)).toBe(void 0)
    expect(deepClone(true)).toBeTruthy()
  })

  it('get different complex value: ', () => {
    const data = {
      a: 1,
      b: 2,
      c: {
        d: 4
      }
    }
    const dataTwo = deepClone(data)

    expect(dataTwo).toEqual(data)
    expect(dataTwo === data).toBeFalsy()

    expect(dataTwo.c.d).toEqual(data.c.d)
    expect(dataTwo.c === data.c).toBeFalsy()
  })

  it('get value with array: ', () => {
    const arr = [1, 2, 3]
    const arrTwo = deepClone(arr)

    expect(arr).toEqual(arrTwo)
    expect(arr === arrTwo).toBeFalsy()
  })

  it('get value without prototype: ', () => {
    const data = {
      a: 1,
      b: [1, 3]
    }
    Reflect.setPrototypeOf(data, { c: 2 })

    expect(deepClone(data)).toEqual({
      a: 1,
      b: [1, 3]
    })
  })
})
