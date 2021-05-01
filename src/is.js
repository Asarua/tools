function typeValidateCreator(type) {
  function typeValidator(target) {
    return Object.prototype.toString.call(target) === `[object ${type}]`
  }
  return typeValidator
}

const isString = typeValidateCreator('String')
const isBoolean = typeValidateCreator('Boolean')
const isNull = typeValidateCreator('Null')
const isUndefined = typeValidateCreator('Undefined')
const isNumber = typeValidateCreator('Number')
const isSymbol = typeValidateCreator('Symbol')
const isBigInt = typeValidateCreator('BigInt')
const isObject = typeValidateCreator('Object')
const isFunction = typeValidateCreator('Function')
const isArray = typeValidateCreator('Array')
const isDate = typeValidateCreator('Date')
const isMap = typeValidateCreator('Map')
const isSet = typeValidateCreator('Set')
const isWeakMap = typeValidateCreator('WeakMap')
const isWeakSet = typeValidateCreator('WeakSet')
const isRegExp = typeValidateCreator('RegExp')
const isWindow = typeValidateCreator('Window')
const isError = typeValidateCreator('Error')

module.exports = {
  isString,
  isBoolean,
  isNull,
  isUndefined,
  isNumber,
  isSymbol,
  isBigInt,
  isObject,
  isFunction,
  isArray,
  isDate,
  isMap,
  isSet,
  isWeakMap,
  isWeakSet,
  isRegExp,
  isWindow,
  isError
}
