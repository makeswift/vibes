import { NotFoundPage } from '@/vibes/soul/components/page-not-found'
import { Product } from '@/vibes/soul/components/product-card'
import { copyright, footerLinks } from '@/vibes/soul/examples/footer-electric'
import { headerLinks } from '@/vibes/soul/examples/header-electric'

// Products
export const products: Product[] = [
  {
    id: '1',
    name: 'Heart to Heart',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/zyFDaG5bRQE',
      altText: 'Heart to Heart',
    },
    href: '#',
  },
  {
    id: '2',
    name: 'Caladium Pink',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/AxXaqTzRozM',
      altText: 'Caladium Pink',
    },
    href: '#',
  },
  {
    id: '3',
    name: 'Caladium Angel Wing',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/vznZvupsj2y',
      altText: 'Caladium Angel Wing',
    },
    href: '#',
  },
  {
    id: '4',
    name: 'Philodendron Brandtianum',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/rDuYCY2nPNt',
      altText: 'Philodendron Brandtianum',
    },
    href: '#',
  },
  {
    id: '5',
    name: 'Silver Leaf Philodendron',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/UQMA3XLfWvF',
      altText: 'Silver Leaf Philodendron',
    },
    href: '#',
  },
  {
    id: '6',
    name: 'Pink Beauty Caladium',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/cMF-gCyIas9',
      altText: 'Pink Beauty Caladium',
    },
    href: '#',
  },
  {
    id: '7',
    name: 'Caladium Angel Wing',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/W_zhzrsEqp7',
      altText: 'Caladium Angel Wing',
    },
    href: '#',
  },
  {
    id: '8',
    name: 'Caladium Watermelon',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/HL613sp6BIP',
      altText: 'Caladium Watermelon',
    },
    href: '#',
  },
  {
    id: '9',
    name: 'Speckled Heart Caladium',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/afA-7qP8zih',
      altText: 'Speckled Heart Caladium',
    },
    href: '#',
  },
]

export default function Preview() {
  return (
    <NotFoundPage
      products={products}
      headerLinks={headerLinks}
      logo="SOUL"
      footerLinks={footerLinks}
      copyright={copyright}
    />
  )
}
