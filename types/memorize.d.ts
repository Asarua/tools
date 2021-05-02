declare function memorize<F extends (...args: any[]) => any>(fn: F): F

export {
  memorize
}
