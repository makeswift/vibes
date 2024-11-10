import { getProducts } from '@/vibes/soul/data'
import { FeaturedProductsCarousel } from '@/vibes/soul/sections/featured-products-carousel'

export default async function Preview() {
  const featuredProducts = await getProducts('Electric')
  return (
    <FeaturedProductsCarousel
      title="Our Plants"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      cta={{ href: '#', label: 'Shop Now' }}
      products={featuredProducts}
    />
  )
}
