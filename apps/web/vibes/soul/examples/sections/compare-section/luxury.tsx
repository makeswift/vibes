import { getProducts } from '@/vibes/soul/data'
import { CompareSection } from '@/vibes/soul/sections/compare-section'

import { addToCartAction } from './actions'

const products = getProducts('Luxury')

export default async function Preview({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] }>
}) {
  return (
    <div className="p-20">
      <CompareSection products={products} addToCartAction={addToCartAction} />
    </div>
  )
}
