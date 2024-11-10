import { createSearchParamsCache, parseAsArrayOf, parseAsFloat, parseAsString } from 'nuqs/server'

export const compareParamName = 'compare'
export const sortParamName = 'sort'

// Common filter parameter names across all brands
export const filterParamNames = {
  // Rating filter
  rating: 'rating',

  // Price filters
  priceMin: 'price_min',
  priceMax: 'price_max',

  // Product-specific filters
  features: 'features',
  light: 'light',
  color: 'color',
  size: 'size',
} as const

export const parser = {
  // Existing parsers
  [compareParamName]: parseAsArrayOf(parseAsString),
  [sortParamName]: parseAsString,

  // Filter parsers
  [filterParamNames.rating]: parseAsFloat,
  [filterParamNames.priceMin]: parseAsFloat,
  [filterParamNames.priceMax]: parseAsFloat,
  [filterParamNames.features]: parseAsArrayOf(parseAsString),
  [filterParamNames.light]: parseAsArrayOf(parseAsString),
  [filterParamNames.color]: parseAsArrayOf(parseAsString),
  [filterParamNames.size]: parseAsArrayOf(parseAsString),
}

export const cache = createSearchParamsCache(parser)
