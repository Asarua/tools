declare function compose<A = any, B = any, P = any>(
  fn1: (...args: A[]) => B,
  fn2: (...args: P[]) => A,
): (...args: P[]) => B
declare function compose<A = any, B = any, C = any, P = any>(
  fn1: (...args: B[]) => C,
  fn2: (...args: A[]) => B,
  fn3: (...args: P[]) => A
): (...args: P[]) => C
declare function compose<A = any>(...fns: ((...args: A[]) => A)[]): (...args: A[]) => A

export {
  compose
}
