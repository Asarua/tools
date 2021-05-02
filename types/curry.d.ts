// TODO
declare function curry<
  T extends (...args: A[]) => R,
  A = any,
  P extends Parameters<T>[number],
  K extends P,
  F extends <O = '' | P>(...args: Array<K>) => O extends ''
    ? ReturnType<T>
    : F<Exclude<O, K>>
>(fn: T): F

// function a(q: 1, w: 2){
//   return 123 as const
// }

// const s = curry(a)
// const q = s(1 as const)

export {
  curry
}
