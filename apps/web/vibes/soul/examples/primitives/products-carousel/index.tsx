import { getProducts } from '@/vibes/soul/data'
import { ProductsCarousel } from '@/vibes/soul/primitives/products-carousel'

export default async function Preview() {
  const products = await getProducts('Warm')
  return <ProductsCarousel products={products} />
}
