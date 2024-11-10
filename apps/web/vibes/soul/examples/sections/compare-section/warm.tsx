import { getProducts } from '@/vibes/soul/data'
import { CompareSection } from '@/vibes/soul/sections/compare-section'

import { addToCartAction } from './actions'

const products = await getProducts('Warm')

export default async function Preview({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] }>
}) {
  return <CompareSection products={products} addToCartAction={addToCartAction} />
}
