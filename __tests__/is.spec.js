const { is } = require('../src')

describe('validate methods with is: ', () => {
  it('validate number: ', () => {
    expect(is.isNumber(21)).toBeTruthy()
    expect(is.isNumber(NaN)).toBeTruthy()
    expect(is.isNumber(1 / 0)).toBeTruthy()
    expect(is.isNumber('1')).toBeFalsy()
  })

  it('validate string: ', () => {
    expect(is.isString('')).toBeTruthy()
    expect(is.isString(1 + 'a')).toBeTruthy()
    expect(is.isString([].join())).toBeTruthy()
    expect(is.isString(1 + 2)).toBeFalsy()
  })

  it('validate boolean: ', () => {
    expect(is.isBoolean(true)).toBeTruthy()
    expect(is.isBoolean(false)).toBeTruthy()
    expect(is.isBoolean(1)).toBeFalsy()
    expect(is.isBoolean('')).toBeFalsy()
  })

  it('validate null: ', () => {
    expect(is.isNull(null)).toBeTruthy()
    expect(is.isNull(void 0)).toBeFalsy()
  })

  it('validate undefined', () => {
    expect(is.isUndefined(undefined)).toBeTruthy()
    expect(is.isUndefined(null)).toBeFalsy()
    expect(is.isUndefined(void (1 + 2))).toBeTruthy()
    expect(is.isUndefined()).toBeTruthy()
  })

  it('validate symbol: ', () => {
    expect(is.isSymbol(Symbol())).toBeTruthy()
    expect(is.isSymbol(Symbol('symbol'))).toBeTruthy()
    expect(is.isSymbol(Symbol.for('symbol'))).toBeTruthy()
    expect(is.isSymbol('symbol')).toBeFalsy()
  })

  it('validate bigint: ', () => {
    expect(is.isBigInt(1n)).toBeTruthy()
    expect(is.isBigInt(BigInt(1))).toBeTruthy()
    expect(is.isBigInt(1)).toBeFalsy()
  })

  it('validate object: ', () => {
    expect(is.isObject({})).toBeTruthy()
    expect(is.isObject(new Object)).toBeTruthy()
    expect(is.isObject(Object.create(null))).toBeTruthy()
    expect(is.isObject(null)).toBeFalsy()
  })

  it('validate array: ', function(...args) {
    expect(is.isArray([])).toBeTruthy()
    expect(is.isArray(new Array)).toBeTruthy()
    expect(is.isArray(Array.of())).toBeTruthy()
    expect(is.isArray(arguments)).toBeFalsy()
    expect(is.isArray(args)).toBeTruthy()
    expect(is.isArray([...new Set])).toBeTruthy()
  })

  it('validate function: ', () => {
    const fn = function() {}
    expect(is.isFunction(() => {})).toBeTruthy()
    expect(is.isFunction(function() {})).toBeTruthy()
    expect(is.isFunction(fn)).toBeTruthy()
  })

  it('validate date: ', () => {
    expect(is.isDate(new Date)).toBeTruthy()
    expect(is.isDate(Date.now())).toBeFalsy()
  })

  it('validate map: ', () => {
    expect(is.isMap(new Map)).toBeTruthy()
  })

  it('validate set: ', () => {
    expect(is.isSet(new Set)).toBeTruthy()
  })

  it('validate weakMap: ', () => {
    expect(is.isWeakMap(new WeakMap)).toBeTruthy()
  })

  it('validate weakSet: ', () => {
    expect(is.isWeakSet(new WeakSet)).toBeTruthy()
  })

  it('validate regexp: ', () => {
    expect(is.isRegExp(/\d/)).toBeTruthy()
    expect(is.isRegExp(new RegExp)).toBeTruthy()
  })

  it('validate window: ', () => {
    const hasWindow = typeof window !== 'undefined'
    hasWindow && expect(is.isWindow(window)).toBeTruthy()
    hasWindow && expect(is.isWindow(globalThis)).toBeTruthy()
    !hasWindow && expect(is.isWindow(globalThis)).toBeFalsy()
  })

  it('validate error: ', () => {
    expect(is.isError(new Error)).toBeTruthy()
  })
})
