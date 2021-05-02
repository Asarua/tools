declare function before<B extends boolean = false, F = any, A = any>(
  fn: (...args: B extends true ? A[] : any[]) => F,
  beforeFn: (...args: any[]) => A,
  isEffect?: B
): F

export {
  before
}
