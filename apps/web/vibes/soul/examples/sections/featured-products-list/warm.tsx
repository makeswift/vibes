import { FeaturedProductsList } from '@/vibes/soul/sections/featured-products-list'
import { ProductCardProduct } from '@/vibes/soul/types'

export const featuredProducts: {
  title: string
  description: string
  cta: { label: string; href: string }
  products: ProductCardProduct[]
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
      title: 'Mini Bar Bag',
      subtitle: 'Blue/Black/Green',
      // badge: 'Indestructible',
      price: '$65',
      image: {
        src: 'https://rstr.in/monogram/vibes/mrlTNE1TJfB',
        alt: 'Mini Bar Bag',
      },
      href: '#',
    },
    {
      id: '2',
      title: 'Mini Bar Bag',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$65',
      image: {
        src: 'https://rstr.in/monogram/vibes/LznMEk1GSB1',
        alt: 'Mini Bar Bag',
      },
      href: '#',
    },
    {
      id: '3',
      title: 'Stem Caddy',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$60',
      image: {
        src: 'https://rstr.in/monogram/vibes/EpL5yspw4Pc',
        alt: 'Stem Caddy',
      },
      href: '#',
    },
    {
      id: '4',
      title: 'Hip Slinger',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$105',
      image: {
        src: 'https://rstr.in/monogram/vibes/z6b0vDjJv6x',
        alt: 'Hip Slinger',
      },
      href: '#',
    },
    {
      id: '5',
      title: 'Everyday Tote',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$185',
      image: {
        src: 'https://rstr.in/monogram/vibes/1tVm6tBbJq9',
        alt: 'Everyday Tote',
      },
      href: '#',
    },
    {
      id: '6',
      title: 'Mini Saddlebag',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$45',
      image: {
        src: 'https://rstr.in/monogram/vibes/MZX8-yya26e',
        alt: 'Mini Saddlebag',
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
