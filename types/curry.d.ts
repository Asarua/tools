// TODO
declare function curry<
  T extends (...args: A[]) => R,
  P extends Parameters<T>[number],
  K extends P,
  F extends <O = '' | P>(...args: Array<K>) => O extends ''
    ? ReturnType<T>
    : F,
  A = any,
  R = any
>(fn: T): F

export {
  curry
}
