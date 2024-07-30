import ProductCard from '@/vibes/soul/components/product-card'
import ProductListCarousel from '@/vibes/soul/components/product-list-carousel'

const products: ProductCard[] = [
  {
    name: 'Product Name',
    tags: ['Blue', 'Black', 'Green'],
    label: 'New',
    price: 123.99,
    image: 'https://rstr.in/monogram/vibes/EThVOYoirSZ',
    ctaLink: { href: '/' },
  },
  {
    name: 'Product Name',
    tags: ['Blue', 'Black', 'Green'],
    label: 'New',
    price: 123.99,
    image: 'https://rstr.in/monogram/vibes/ZNRyYzfOjaK',
    ctaLink: { href: '/' },
  },
  {
    name: 'Product Name',
    tags: ['Blue', 'Black', 'Green'],
    label: 'New',
    price: 123.99,
    image: 'https://rstr.in/monogram/vibes/8bPrhQZGr4k',
    ctaLink: { href: '/' },
  },
  {
    name: 'Product Name',
    tags: ['Blue', 'Black', 'Green'],
    label: 'New',
    price: 123.99,
    image: 'https://rstr.in/monogram/vibes/alCCRbqrsnE',
    ctaLink: { href: '/' },
  },
]

export default function Preview() {
  return (
    <div className="min-h-48">
      <ProductListCarousel
        title="New Arrivals"
        link={{ label: 'See All', href: '/new-arrivals' }}
        products={products}
      />
    </div>
  )
}
