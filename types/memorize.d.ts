declare function memorize<
  F extends (...args: any[]) => any
>(fn: F): F & { cache: Record<string, unknown> }

export {
  memorize
}
