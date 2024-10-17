import { createSearchParamsCache, parseAsArrayOf, parseAsString } from 'nuqs/server'

import { breadcrumbs } from '@/vibes/soul/examples/primitives/breadcrumbs/electric'
import { Product } from '@/vibes/soul/primitives/product-card'
import { ProductsListSection } from '@/vibes/soul/sections/products-list-section'
import { Filter } from '@/vibes/soul/sections/products-list-section/filters-panel'

import { cache, compareParamName, sortParamName } from './searchParams'

export const products: Product[] = [
  {
    id: '1',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: {
      type: 'range',
      minValue: '$120',
      maxValue: '$150',
    },
    image: {
      src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
      alt: 'Product Name',
    },
    href: '#',
  },
  {
    id: '2',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: {
      type: 'sale',
      previousValue: '$149.99',
      currentValue: '$129.99',
    },
    image: {
      src: 'https://rstr.in/monogram/vibes/AaZW4j2VTd4',
      alt: 'Product Name',
    },
    href: '#',
  },
  {
    id: '3',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/DYeoTIrhxZk',
      alt: 'Product Name',
    },
    href: '#',
  },
  {
    id: '4',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: {
      type: 'range',
      minValue: '$110',
      maxValue: '$150',
    },
    image: {
      src: 'https://rstr.in/monogram/vibes/9HSPQU1tr1p',
      alt: 'Product Name',
    },
    href: '#',
  },
  {
    id: '5',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: {
      type: 'sale',
      previousValue: '$170',
      currentValue: '$150',
    },
    image: {
      src: 'https://rstr.in/monogram/vibes/lJg081kQqvc',
      alt: 'Product Name',
    },
    href: '#',
  },
  {
    id: '6',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/n0P83RMnClS',
      alt: 'Product Name',
    },
    href: '#',
  },
]

const filters: Filter[] = [
  {
    paramName: 'color',
    label: 'Color',
    type: 'toggle-group',
    options: [
      { label: 'Red', value: 'red' },
      { label: 'Green', value: 'green' },
      { label: 'Blue', value: 'blue' },
    ],
  },
  {
    paramName: 'size',
    label: 'Size',
    type: 'toggle-group',
    options: [
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
    ],
  },
  {
    label: 'Price',
    type: 'range',
    minParamName: 'price-min',
    maxParamName: 'price-max',
    // min: 0,
    // max: 200,
    minPrepend: '$',
    maxPrepend: '$',
  },
  {
    paramName: 'rating',
    label: 'Rating',
    type: 'rating',
  },
]

const sortOptions = [
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

export default async function Preview({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  const { [compareParamName]: compare, [sortParamName]: sort } = cache.parse(searchParams)

  return (
    <div className="py-6">
      <ProductsListSection
        title="Plants"
        breadcrumbs={breadcrumbs}
        products={products}
        totalCount={products.length}
        filters={filters}
        sortOptions={sortOptions}
        paginationInfo={{ endCursor: '10' }}
        compareProducts={products.filter(product => compare?.includes(product.id))}
        compareParamName={compareParamName}
        sortParamName={sortParamName}
      />
    </div>
  )
}
