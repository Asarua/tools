import Url2Json from 'url2json-types'

declare function getUrlParams<
  N extends string,
  URL extends string
>(name: N, url?: URL): Url2Json<URL>[N]

export {
  getUrlParams
}
