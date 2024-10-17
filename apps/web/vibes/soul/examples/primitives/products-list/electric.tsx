import { getProducts } from '@/vibes/soul/data'
import { ProductsList } from '@/vibes/soul/primitives/products-list'

export default function Preview() {
  const products = getProducts('Electric')
  return (
    <div className="py-6">
      <ProductsList products={products} />
    </div>
  )
}
