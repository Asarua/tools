declare function compose<A = any, B = any>(
  fn1: (...args: A[]) => B,
  fn2: (...args: any[]) => A,
): B
declare function compose<A = any, B = any, C = any>(
  fn1: (...args: B[]) => C,
  fn2: (...args: A[]) => B,
  fn3: (...args: any[]) => A
): C
declare function compose<A = any>(...fns: ((...args: A[]) => A)[]): A

export {
  compose
}
