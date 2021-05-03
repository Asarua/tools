declare function before<B extends boolean = false, F = any, A = any>(
  beforeFn: (...args: any[]) => A,
  fn: (...args: B extends true ? A[] : any[]) => F,
  isEffect?: B
): F

export {
  before
}
