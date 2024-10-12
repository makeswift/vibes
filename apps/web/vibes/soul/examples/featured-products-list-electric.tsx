import { FeaturedProductsList } from '@/vibes/soul/components/featured-products-list'

export const featuredProducts = {
  title: 'Our Plants',
  description: '',
  cta: {
    label: 'Shop Now',
    href: '#',
  },
  products: [
    {
      id: '1',
      name: 'Philodendron Imperial Red',
      subtitle: 'Indoor Plant',
      // badge: 'Indestructible',
      price: '$44.95',
      image: {
        src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
        alt: 'Philodendron Imperial Red',
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
        alt: 'Monstera',
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
        alt: 'Pink Caladium',
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
        alt: 'Hoya Kerrii',
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
        alt: 'Bird Nest Fern',
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
        alt: 'Jade Plant',
      },
      href: '#',
    },
  ],
}

export default function Preview() {
  return (
    <FeaturedProductsList
      title={featuredProducts.title}
      description={featuredProducts.description}
      cta={{
        label: featuredProducts.cta.label,
        href: featuredProducts.cta.href,
      }}
      products={featuredProducts.products}
    />
  )
}
