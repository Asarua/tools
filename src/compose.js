const compose = (...args) => () => args.reduce((prev, next) => prev(next(...arguments)))

module.exports = compose
