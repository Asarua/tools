import Url2Json from 'url2json-types'

declare function getUrlParams<
  N extends string,
  URL extends string
>(name: N, url?: URL): N extends keyof Url2Json<URL>
  ? Url2Json<URL>[N]
  : unknown

export {
  getUrlParams
}
