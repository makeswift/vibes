import { FeaturedProductsList } from '@/vibes/soul/components/featured-products-list'
import { Product } from '@/vibes/soul/components/product-card'

export const featuredProducts: {
  title: string
  description: string
  cta: { label: string; href: string }
  list: Product[]
} = {
  title: 'Discover',
  description:
    'The perfect blend of style and functionality with our bike bags. Each design is thoughtfully crafted to enhance your ride, offering smart storage solutions with a sleek, modern look. Whether you’re commuting or exploring, our bags are designed to fit seamlessly into your cycling lifestyle',
  cta: {
    label: 'Shop Now',
    href: '#',
  },
  list: [
    {
      id: '1',
      name: 'Product Name',
      subtitle: 'Blue/Black/Green',
      // badge: 'Indestructible',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/mrlTNE1TJfB',
        altText: 'Product Name',
      },
      href: '#',
    },
    {
      id: '2',
      name: 'Product Name',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/LznMEk1GSB1',
        altText: 'Product Name',
      },
      href: '#',
    },
    {
      id: '3',
      name: 'Product Name',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/EpL5yspw4Pc',
        altText: 'Product Name',
      },
      href: '#',
    },
    {
      id: '4',
      name: 'Product Name',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/z6b0vDjJv6x',
        altText: 'Product Name',
      },
      href: '#',
    },
    {
      id: '6',
      name: 'Product Name',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/1tVm6tBbJq9',
        altText: 'Product Name',
      },
      href: '#',
    },
    {
      id: '5',
      name: 'Product Name',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/MZX8-yya26e',
        altText: 'Product Name',
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
      products={featuredProducts.list}
    />
  )
}
