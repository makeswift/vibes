import { getProducts } from '@/vibes/soul/data'
import { CompareSection } from '@/vibes/soul/sections/compare-section'

const products = getProducts('Electric')

// async function addToCartAction(id: string) {
//   'use server'

//   console.log('Add to cart:', id)
// }

export default function Preview({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  return (
    <div className="p-20">
      <CompareSection products={products} />
    </div>
  )
}
