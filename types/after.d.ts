declare function after<B extends boolean = false, F = any, A = any>(
  fn: (...args: any[]) => F,
  afterFn: (...args: B extends true ? F[] : any[]) => A,
  isEffect?: B
): B extends true ? A : F

export {
  after
}
