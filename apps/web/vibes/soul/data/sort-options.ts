import { Option } from '@/vibes/soul/types'

export const getSortOptions = (): Option[] => [
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]
