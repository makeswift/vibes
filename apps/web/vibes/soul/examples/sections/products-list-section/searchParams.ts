import { createSearchParamsCache, parseAsArrayOf, parseAsString } from 'nuqs/server'

export const compareParamName = 'compare'
export const sortParamName = 'sort'

export const parser = {
  [compareParamName]: parseAsArrayOf(parseAsString),
  [sortParamName]: parseAsString,
}

export const cache = createSearchParamsCache(parser)
