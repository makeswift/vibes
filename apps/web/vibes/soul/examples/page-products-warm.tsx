import ProductsPage from '@/vibes/soul/components/page-products'
import { Product } from '@/vibes/soul/components/product-card'
import { copyright, footerLinks, logo } from '@/vibes/soul/examples/footer-warm'
import { headerLinks } from '@/vibes/soul/examples/header-warm'
import { products } from '@/vibes/soul/examples/products-list-warm'

export const compareProducts: Product[] = [
  {
    id: '1',
    name: 'Plant 1',
    subtitle: 'Small',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/zyFDaG5bRQE',
      altText: 'Men’s Long Sleeve Jersey',
    },
    href: '#',
    description:
      'Engineered for chasing alternate paths, the Alt_Road Long Sleeve Jersey is for riders who want it all.',
    rating: 4.8,
    availability: 'In Stock',
  },
  {
    id: '2',
    name: 'Plant 2',
    subtitle: 'Small',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/AxXaqTzRozM',
      altText: 'Men’s Long Sleeve Jersey',
    },
    href: '#',
    description:
      'Engineered for chasing alternate paths, the Alt_Road Long Sleeve Jersey is for riders who want it all.',
    rating: 4.5,
    availability: 'In Stock',
  },
]
export default function Preview() {
  return (
    <ProductsPage
      headerLinks={headerLinks}
      logo={logo}
      products={products}
      compareProducts={compareProducts}
      footerLinks={footerLinks}
      copyright={copyright}
    />
  )
}
