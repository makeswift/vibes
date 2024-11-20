/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Filter } from '@/vibes/soul/sections/products-list-section/filters-panel'

import { SoulBrandName } from '../brands'
import { CardProduct } from '../primitives/product-card'

// Common product type
interface BaseProduct {
  id: string
  title: string
  subtitle: string
  badge?: string
  price: string
  image: {
    src: string
    alt: string
  }
  href: string
  rating: number
}

// Brand-specific product types
type ElectricProduct = BaseProduct & {
  features: ('air-purifying' | 'indoor' | 'pet-friendly')[]
  light: 'bright-indirect' | 'bright-direct' | 'low-light'
  size: 'sm' | 'md' | 'lg'
}

type LuxuryProduct = BaseProduct & {
  color: ('black' | 'brown' | 'red')[]
  size: string[] // Shoe sizes like '6', '6.5', etc.
}

type WarmProduct = BaseProduct & {
  color: ('blue' | 'green' | 'red')[]
  size: 'sm' | 'md' | 'lg'
}

interface ProductCatalog {
  Electric: ElectricProduct[]
  Luxury: LuxuryProduct[]
  Warm: WarmProduct[]
}

const products: ProductCatalog = {
  Electric: [
    {
      id: '1',
      title: 'Philodendron Imperial Red',
      subtitle: 'Indoor Plant',
      badge: 'Popular',
      price: '$44.95',
      image: {
        src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
        alt: 'Philodendron Imperial Red',
      },
      href: '#',
      rating: 4,
      features: ['air-purifying', 'indoor', 'pet-friendly'],
      light: 'bright-indirect',
      size: 'md',
    },
    {
      id: '2',
      title: 'Monstera',
      subtitle: 'Indoor Plant',
      badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/n0P83RMnClS',
        alt: 'Monstera',
      },
      href: '#',
      rating: 4.4,
      features: ['air-purifying', 'indoor'],
      light: 'bright-indirect',
      size: 'lg',
    },
    {
      id: '3',
      title: 'Pink Caladium',
      subtitle: 'Indoor Plant',
      price: '$19.95',
      image: {
        src: 'https://rstr.in/monogram/vibes/AaZW4j2VTd4',
        alt: 'Pink Caladium',
      },
      href: '#',
      rating: 4.8,
      features: ['indoor', 'pet-friendly'],
      light: 'bright-direct',
      size: 'sm',
    },
    {
      id: '4',
      title: 'Hoya Kerrii',
      subtitle: 'Indoor Plant',
      price: '$16.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/QSaMw6aC_AN',
        alt: 'Hoya Kerrii',
      },
      href: '#',
      rating: 2.2,
      features: ['indoor', 'pet-friendly', 'air-purifying'],
      light: 'bright-direct',
      size: 'sm',
    },
    {
      id: '5',
      title: 'Bird Nest Fern',
      subtitle: 'Indoor Plant',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/gfGRQi5pHeJ',
        alt: 'Bird Nest Fern',
      },
      href: '#',
      rating: 3.5,
      features: ['indoor', 'pet-friendly', 'air-purifying'],
      light: 'low-light',
      size: 'md',
    },
    {
      id: '6',
      title: 'Jade Plant',
      subtitle: 'Indoor Plant',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/lJg081kQqvc',
        alt: 'Jade Plant',
      },
      href: '#',
      rating: 5,
      features: ['indoor', 'air-purifying'],
      light: 'bright-direct',
      size: 'sm',
    },
    {
      id: '7',
      title: 'Snake Plant',
      subtitle: 'Indoor Plant',
      price: '$34.95',
      image: {
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTplNGNiMjdiNi04NTY2LTQxOTctODhhMC0xYThhYmY3NDdkZTU=/snake-plant.jpg',
        alt: 'Snake Plant',
      },
      href: '#',
      rating: 4.9,
      features: ['air-purifying', 'indoor', 'pet-friendly'],
      light: 'low-light',
      size: 'md',
    },
    {
      id: '8',
      title: 'Spider Plant',
      subtitle: 'Indoor Plant',
      price: '$12.99',
      image: {
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpiYmYyNDEzMC0wNzU3LTRiYjMtYjkwMi0zNzI0NjBjNzk5MjY=/spider-plant.jpg',
        alt: 'Spider Plant',
      },
      href: '#',
      rating: 4.2,
      features: ['air-purifying', 'indoor', 'pet-friendly'],
      light: 'bright-indirect',
      size: 'sm',
    },
    {
      id: '9',
      title: 'African Fig Tree',
      subtitle: 'Indoor Plant',
      price: '$49.99',
      image: {
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1MGFmMDIxOC05NWM4LTRlN2UtOTAyMS01OWExOGQxMjUwNGM=/african-fig.jpg',
        alt: 'African Fig Tree',
      },
      href: '#',
      rating: 4.7,
      features: ['indoor', 'air-purifying'],
      light: 'bright-indirect',
      size: 'lg',
    },
    {
      id: '10',
      title: 'Birds of Paradise',
      subtitle: 'Indoor Plant',
      price: '$29.95',
      image: {
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowNWUwYmEwMS0yMDhiLTQ5ZWQtOTI3NC0yZTM0ZTZjYmZhNzg=/birds-of-paradise.jpg',
        alt: 'Birds of Paradise',
      },
      href: '#',
      rating: 4.5,
      features: ['air-purifying', 'indoor'],
      light: 'bright-direct',
      size: 'lg',
    },
    {
      id: '11',
      title: 'ZZ Plant',
      subtitle: 'Indoor Plant',
      price: '$22.99',
      image: {
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1N2Q2YThlZS04MjZiLTRjZmEtODRmZi1hZjgzZDM3MWE2ZGY=/zz-plant.jpg',
        alt: 'ZZ Plant',
      },
      href: '#',
      rating: 4.6,
      features: ['indoor', 'pet-friendly', 'air-purifying'],
      light: 'low-light',
      size: 'md',
    },
    {
      id: '12',
      title: 'Dracaena',
      subtitle: 'Indoor Plant',
      price: '$18.95',
      image: {
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo3YTJhYTJmZi00ODBhLTQ3NTctODdkYi02ZWEyZGYzZWJmNjI=/dracaena.jpg',
        alt: 'Dracanea',
      },
      href: '#',
      rating: 4.3,
      features: ['air-purifying', 'indoor', 'pet-friendly'],
      light: 'low-light',
      size: 'md',
    },
  ],
  Luxury: [
    {
      id: '1',
      title: 'Jada Square Toe Ballet Flat',
      subtitle: '',
      badge: 'Bestseller',
      price: '$350',
      image: {
        src: 'https://rstr.in/monogram/vibes/9vu9tSw1WdA',
        alt: 'Jada Square Toe Ballet Flat',
      },
      href: '#',
      rating: 4.5,
      color: ['black', 'brown'],
      size: ['6', '6.5', '7', '7.5', '8', '8.5', '9'],
    },
    {
      id: '2',
      title: 'Jayla Woven Ballet Heel',
      subtitle: '',
      badge: 'Bestseller',
      price: '$395',
      image: {
        src: 'https://rstr.in/monogram/vibes/jD25Jjm0zbT',
        alt: 'Jayla Woven Ballet Heel',
      },
      href: '#',
      rating: 4.8,
      color: ['brown'],
      size: ['5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5'],
    },
    {
      id: '3',
      title: 'Jessie Ballet Flat',
      subtitle: '',
      badge: 'Bestseller',
      price: '$450',
      image: {
        src: 'https://rstr.in/monogram/vibes/1ipihAyvRQj',
        alt: 'Jessie Ballet Flat',
      },
      href: '#',
      rating: 4.6,
      color: ['black', 'red'],
      size: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10'],
    },
    {
      id: '4',
      title: 'Leighton Soft Leather Loafer',
      subtitle: '',
      badge: 'Almost Gone',
      price: '$350',
      image: {
        src: 'https://rstr.in/monogram/vibes/YfQW8M1Gv2H/zTWKcqJrdIu',
        alt: 'Leighton Soft Leather Loafer',
      },
      href: '#',
      rating: 4.2,
      color: ['brown', 'black'],
      size: ['7', '7.5', '8', '8.5', '9', '9.5', '10'],
    },
    {
      id: '5',
      title: 'JADA SQUARE TOE BALLET FLAT',
      subtitle: '',
      badge: 'Bestseller',
      price: '$350',
      image: {
        src: 'https://rstr.in/monogram/vibes/5QBR05kyrYo',
        alt: 'JADA SQUARE TOE BALLET FLAT',
      },
      href: '#',
      rating: 4.7,
      color: ['red'],
      size: ['5', '5.5', '6', '6.5', '7', '7.5', '8'],
    },
    {
      id: '6',
      title: 'DARYA LUG SOLE FISHERMAN',
      subtitle: '',
      badge: 'Almost Gone',
      price: '$290',
      image: {
        src: 'https://rstr.in/monogram/vibes/yzjuCwK-5tz/vfCehRZDBGk',
        alt: 'DARYA LUG SOLE FISHERMAN',
      },
      href: '#',
      rating: 4.4,
      color: ['black'],
      size: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5'],
    },
  ],
  Warm: [
    {
      id: '1',
      title: 'Mini Bar Bag',
      subtitle: 'Blue/Black/Green',
      price: '$65',
      image: {
        src: 'https://rstr.in/monogram/vibes/mrlTNE1TJfB',
        alt: 'Mini Bar Bag',
      },
      href: '#',
      rating: 4.3,
      color: ['blue', 'green'],
      size: 'sm',
    },
    {
      id: '2',
      title: 'Mini Bar Bag',
      subtitle: 'Blue/Black/Green',
      price: '$65',
      image: {
        src: 'https://rstr.in/monogram/vibes/LznMEk1GSB1',
        alt: 'Mini Bar Bag',
      },
      href: '#',
      rating: 4.5,
      color: ['red', 'blue'],
      size: 'sm',
    },
    {
      id: '3',
      title: 'Stem Caddy',
      subtitle: 'Blue/Black/Green',
      price: '$60',
      image: {
        src: 'https://rstr.in/monogram/vibes/EpL5yspw4Pc',
        alt: 'Stem Caddy',
      },
      href: '#',
      rating: 4.2,
      color: ['green'],
      size: 'md',
    },
    {
      id: '4',
      title: 'Hip Slinger',
      subtitle: 'Blue/Black/Green',
      price: '$105',
      image: {
        src: 'https://rstr.in/monogram/vibes/z6b0vDjJv6x',
        alt: 'Hip Slinger',
      },
      href: '#',
      rating: 4.6,
      color: ['blue', 'red'],
      size: 'md',
    },
    {
      id: '5',
      title: 'Everyday Tote',
      subtitle: 'Blue/Black/Green',
      price: '$185',
      image: {
        src: 'https://rstr.in/monogram/vibes/1tVm6tBbJq9',
        alt: 'Everyday Tote',
      },
      href: '#',
      rating: 4.8,
      color: ['blue', 'green', 'red'],
      size: 'lg',
    },
    {
      id: '6',
      title: 'Mini Saddlebag',
      subtitle: 'Blue/Black/Green',
      price: '$45',
      image: {
        src: 'https://rstr.in/monogram/vibes/MZX8-yya26e',
        alt: 'Mini Saddlebag',
      },
      href: '#',
      rating: 4.1,
      color: ['green', 'red'],
      size: 'sm',
    },
  ],
}

// Define the filter types based on search params
interface FilterParams {
  features?: string[] | null
  light?: string[] | null
  color?: string[] | null
  size?: string[] | null
  rating?: number | null
  price_min?: number | null
  price_max?: number | null
}

// Update getFilters function signature
export async function getFilters<T extends SoulBrandName>(brand: T): Promise<Filter[]> {
  await new Promise(resolve => setTimeout(resolve, 250))

  const brandProducts = products[brand]
  const filters: Filter[] = []

  // Common filter builders
  const buildToggleGroupFilter = (
    paramName: string,
    label: string,
    values: Set<string>,
    formatLabel = (s: string) =>
      s
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
  ): Filter => ({
    type: 'toggle-group',
    paramName,
    label,
    options: Array.from(values).map(value => ({
      value,
      label: formatLabel(value),
    })),
  })

  // Extract unique values from products
  const uniqueValues = brandProducts.reduce<Record<string, Set<string>>>((acc, product) => {
    // Handle features (Electric only)
    if ('features' in product) {
      acc.features = new Set([...(acc.features ?? []), ...product.features])
    }

    // Handle light (Electric only)
    if ('light' in product) {
      acc.light = new Set([...(acc.light ?? []), product.light])
    }

    // Handle colors (Luxury and Warm)
    if ('color' in product) {
      acc.colors = new Set([...(acc.colors ?? []), ...product.color])
    }

    // Handle sizes (all brands)
    if ('size' in product) {
      const sizes = Array.isArray(product.size) ? product.size : [product.size]
      acc.sizes = new Set([...(acc.sizes ?? []), ...sizes])
    }

    return acc
  }, {})

  // Add brand-specific filters
  if (brand === 'Electric') {
    if (uniqueValues.features?.size != null) {
      filters.push(buildToggleGroupFilter('features', 'Features', uniqueValues.features))
    }
    if (uniqueValues.light?.size != null) {
      filters.push(buildToggleGroupFilter('light', 'Light Requirements', uniqueValues.light))
    }
  }

  if (brand === 'Luxury' || brand === 'Warm') {
    if (uniqueValues.colors?.size != null) {
      filters.push(
        buildToggleGroupFilter(
          'color',
          'Color',
          uniqueValues.colors,
          s => s.charAt(0).toUpperCase() + s.slice(1)
        )
      )
    }
  }

  // Add size filter for all brands
  if (uniqueValues.sizes?.size != null) {
    filters.push(buildToggleGroupFilter('size', 'Size', uniqueValues.sizes, s => s.toUpperCase()))
  }

  // Add rating filter for all brands
  filters.push({
    type: 'rating',
    paramName: 'rating',
    label: 'Rating',
  })

  return filters
}

// Update getProducts function to use FilterParams
export async function getProducts<T extends SoulBrandName>(
  brand: T,
  filterParams?: FilterParams
): Promise<CardProduct[]> {
  await new Promise(resolve => setTimeout(resolve, 500))

  let brandProducts = products[brand] as (ElectricProduct | LuxuryProduct | WarmProduct)[]

  if (filterParams) {
    brandProducts = brandProducts.filter(product => {
      // Type guards
      const isElectricProduct = (p: any): p is ElectricProduct => 'features' in p && 'light' in p
      const isColorProduct = (p: any): p is LuxuryProduct | WarmProduct => 'color' in p

      // Filter conditions
      const conditions: boolean[] = []

      // Only apply filters if they have valid values (not null or empty)
      if (filterParams.features && filterParams.features.length > 0) {
        if (isElectricProduct(product)) {
          conditions.push(
            filterParams.features.every(feature =>
              product.features.includes(feature as ElectricProduct['features'][number])
            )
          )
        }
      }

      if (filterParams.light && filterParams.light.length > 0) {
        if (isElectricProduct(product)) {
          conditions.push(filterParams.light.some(light => product.light === light))
        }
      }

      if (filterParams.color && filterParams.color.length > 0) {
        if (isColorProduct(product)) {
          conditions.push(filterParams.color.some(color => product.color.includes(color as any)))
        }
      }

      if (filterParams.size && filterParams.size.length > 0) {
        if (Array.isArray(product.size)) {
          conditions.push(filterParams.size.some(size => product.size.includes(size)))
        } else {
          conditions.push(filterParams.size.includes(product.size))
        }
      }

      if (filterParams.rating != null) {
        conditions.push(product.rating >= filterParams.rating)
      }

      if (filterParams.price_min != null || filterParams.price_max != null) {
        const productPrice = parseFloat(product.price.replace(/[^0-9.]/g, ''))

        if (filterParams.price_min != null) {
          conditions.push(productPrice >= filterParams.price_min)
        }
        if (filterParams.price_max != null) {
          conditions.push(productPrice <= filterParams.price_max)
        }
      }

      // Only filter if there are active conditions
      return conditions.length === 0 || conditions.every(condition => condition)
    })
  }

  return brandProducts as unknown as CardProduct[]
}
