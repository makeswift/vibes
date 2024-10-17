import { getProducts } from '@/vibes/soul/data'
import { FeaturedProductsList } from '@/vibes/soul/sections/featured-products-list'

export const featuredProducts = {
  title: 'Our Plants',
  description: '',
  cta: {
    label: 'Shop Now',
    href: '#',
  },
  products: getProducts('Electric'),
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
