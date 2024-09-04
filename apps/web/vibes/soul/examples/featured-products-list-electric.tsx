import FeaturedProductList from '@/vibes/soul/components/featured-products-list'
import { Product } from '@/vibes/soul/components/product-card'

export const featuredProducts: {
  title: string
  description: string
  cta: { label: string; href: string }
  list: Product[]
} = {
  title: 'Our Plants',
  description: '',
  cta: {
    label: 'Shop Now',
    href: '#',
  },
  list: [
    {
      id: '1',
      name: 'Philodendron Imperial Red',
      subtitle: 'Indoor Plant',
      // badge: 'Indestructible',
      price: '$44.95',
      image: {
        src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
        altText: 'Philodendron Imperial Red',
      },
      href: '#',
    },
    {
      id: '2',
      name: 'Monstera',
      subtitle: 'Indoor Plant',
      // badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/n0P83RMnClS',
        altText: 'Monstera',
      },
      href: '#',
    },
    {
      id: '3',
      name: 'Pink Caladium',
      subtitle: 'Indoor Plant',
      // badge: 'New',
      price: '$19.95',
      image: {
        src: 'https://rstr.in/monogram/vibes/AaZW4j2VTd4',
        altText: 'Pink Caladium',
      },
      href: '#',
    },
    {
      id: '4',
      name: 'Hoya Kerrii',
      subtitle: 'Indoor Plant',
      // badge: 'New',
      price: '$16.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/QSaMw6aC_AN',
        altText: 'Hoya Kerrii',
      },
      href: '#',
    },
    {
      id: '6',
      name: 'Bird Nest Fern',
      subtitle: 'Indoor Plant',
      // badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/gfGRQi5pHeJ',
        altText: 'Bird Nest Fern',
      },
      href: '#',
    },
    {
      id: '5',
      name: 'Jade Plant',
      subtitle: 'Indoor Plant',
      // badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/lJg081kQqvc',
        altText: 'Jade Plant',
      },
      href: '#',
    },
  ],
}

export default function Preview() {
  return (
    <FeaturedProductList
      title={featuredProducts.title}
      description={featuredProducts.description}
      cta={{
        label: featuredProducts.cta.label,
        href: featuredProducts.cta.href,
      }}
      products={featuredProducts.list}
    />
  )
}
