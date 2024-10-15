import { Product } from '@/vibes/soul/components/product-card'
import { breadcrumbs } from '@/vibes/soul/examples/primitives/breadcrumbs/luxury'
import { ProductsListSection } from '@/vibes/soul/sections/products-list-section'
import { Filter } from '@/vibes/soul/sections/products-list-section/filters'

export const products: Product[] = [
  {
    id: '1',
    title: 'DARYA LUG SOLE FISHERMAN',
    subtitle: 'Cuoro Embossed Snake',
    price: '$350',
    image: {
      src: 'https://rstr.in/monogram/vibes/18bzcr01WWx',
      alt: 'DARYA LUG SOLE FISHERMAN',
    },
    href: '#',
  },
  {
    id: '2',
    title: 'ROMA ROUND TOE BALLET FLAT',
    subtitle: 'Rust Closed Woven Calf',
    price: '$350',
    image: {
      src: 'https://rstr.in/monogram/vibes/yzjuCwK-5tz',
      alt: 'ROMA ROUND TOE BALLET FLAT',
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
    name: 'color',
    label: 'Color',
    type: 'checkbox-group',
    options: [
      { label: 'Red', value: 'red' },
      { label: 'Green', value: 'green' },
      { label: 'Blue', value: 'blue' },
    ],
  },
  {
    name: 'size',
    label: 'Size',
    type: 'checkbox-group',
    options: [
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
    ],
  },
  {
    name: 'price',
    label: 'Price',
    type: 'range',
    min: 0,
    max: 200,
    minLabel: '$',
    maxLabel: '$',
  },
  {
    name: 'rating',
    label: 'Rating',
    type: 'rating',
  },
]

const sortOptions = [
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

export default function Preview({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] }
}) {
  return (
    <div className="py-6">
      <ProductsListSection
        title="Shoes"
        breadcrumbs={breadcrumbs}
        products={products}
        totalCount={products.length}
        filters={filters}
        sortOptions={sortOptions}
        pagination={{ name: 'page', previousPage: '2', nextPage: '3' }}
        compareProducts={
          Array.isArray(searchParams.compare)
            ? products.filter(product => searchParams.compare.includes(product.id))
            : typeof searchParams.compare === 'string'
              ? products.filter(product => product.id === searchParams.compare)
              : []
        }
      />
    </div>
  )
}
