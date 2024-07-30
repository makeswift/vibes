import FeaturedProductList from '@/vibes/soul/components/featured-product-list'
import ProductCard from '@/vibes/soul/components/product-card'

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
      <FeaturedProductList
        title="Off-Race"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        link={{ label: 'Shop Now', href: '/new-arrivals' }}
        products={products}
      />
    </div>
  )
}
