import { Product } from '@/vibes/soul/primitives/product-card'
import { FeaturedProductsList } from '@/vibes/soul/sections/featured-products-list'

export const featuredProducts: {
  title: string
  description: string
  cta: { label: string; href: string }
  products: Product[]
} = {
  title: 'Discover',
  description:
    'The perfect blend of style and functionality with our bike bags. Each design is thoughtfully crafted to enhance your ride, offering smart storage solutions with a sleek, modern look. Whether you’re commuting or exploring, our bags are designed to fit seamlessly into your cycling lifestyle',
  cta: {
    label: 'Shop Now',
    href: '#',
  },
  products: [
    {
      id: '1',
      title: 'Product Name',
      subtitle: 'Blue/Black/Green',
      // badge: 'Indestructible',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/mrlTNE1TJfB',
        alt: 'Product Name',
      },
      href: '#',
    },
    {
      id: '2',
      title: 'Product Name',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/LznMEk1GSB1',
        alt: 'Product Name',
      },
      href: '#',
    },
    {
      id: '3',
      title: 'Product Name',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/EpL5yspw4Pc',
        alt: 'Product Name',
      },
      href: '#',
    },
    {
      id: '4',
      title: 'Product Name',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/z6b0vDjJv6x',
        alt: 'Product Name',
      },
      href: '#',
    },
    {
      id: '6',
      title: 'Product Name',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/1tVm6tBbJq9',
        alt: 'Product Name',
      },
      href: '#',
    },
    {
      id: '5',
      title: 'Product Name',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/MZX8-yya26e',
        alt: 'Product Name',
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
