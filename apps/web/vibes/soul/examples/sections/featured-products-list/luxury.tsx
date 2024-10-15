import { FeaturedProductsList } from '@/vibes/soul/components/featured-products-list'
import { Product } from '@/vibes/soul/components/product-card'

export const featuredProducts: {
  title: string
  description: string
  cta: { label: string; href: string }
  products: Product[]
} = {
  title: 'Own Your Journey',
  description:
    'Our shoes are crafted for the independent, fashion-forward woman who walks her own path. Designed with bold style and uncompromising quality, each pair is a statement of confidence and individuality. Elevate your stride—because you don’t just follow trends, you set them.',
  cta: {
    label: 'Shop Now',
    href: '#',
  },
  products: [
    {
      id: '1',
      name: 'Product Name',
      subtitle: 'Blue/Black/Green',
      badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/9vu9tSw1WdA',
        altText: 'Product Name',
      },
      href: '#',
    },
    {
      id: '2',
      name: 'Product Name',
      subtitle: 'Blue/Black/Green',
      badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/jD25Jjm0zbT',
        altText: 'Product Name',
      },
      href: '#',
    },
    {
      id: '3',
      name: 'Product Name',
      subtitle: 'Blue/Black/Green',
      badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/6inssBpCQru',
        altText: 'Product Name',
      },
      href: '#',
    },
    {
      id: '4',
      name: 'Product Name',
      subtitle: 'Blue/Black/Green',
      badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/YfQW8M1Gv2H/zTWKcqJrdIu',
        altText: 'Product Name',
      },
      href: '#',
    },
    {
      id: '6',
      name: 'Product Name',
      subtitle: 'Blue/Black/Green',
      badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/5QBR05kyrYo',
        altText: 'Product Name',
      },
      href: '#',
    },
    {
      id: '5',
      name: 'Product Name',
      subtitle: 'Blue/Black/Green',
      badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/yzjuCwK-5tz/vfCehRZDBGk',
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
      products={featuredProducts.products}
    />
  )
}
