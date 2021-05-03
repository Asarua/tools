declare function isString(val: unknown): val is string
declare function isBoolean(val: unknown): val is boolean
declare function isNull(val: unknown): val is null
declare function isUndefined(val: unknown): val is undefined
declare function isNumber(val: unknown): val is number
declare function isSymbol(val: unknown): val is symbol
declare function isBigInt(val: unknown): val is bigint
declare function isObject(val: unknown): val is object
declare function isFunction(val: unknown): val is Function
declare function isArray<V = any>(val: unknown): val is Array<V>
declare function isDate(val: unknown): val is Date
declare function isMap<K = any, V = any>(val: unknown): val is Map<K, V>
declare function isSet<K = any>(val: unknown): val is Set<K>
declare function isWeakMap<K extends object = any, V = any>(val: unknown): val is WeakMap<K, V>
declare function isWeakSet<K extends object = any>(val: unknown): val is WeakSet<K>
declare function isRegExp(val: unknown): val is RegExp
declare function isWindow(val: unknown): val is Window
declare function isError(val: unknown): val is Error

export {
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
