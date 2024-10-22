import { Option } from '@/vibes/soul/sections/products-list-section/sorting'

export function getSortOptions(): Option[] {
  return [
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Newest', value: 'newest' },
  ]
}
