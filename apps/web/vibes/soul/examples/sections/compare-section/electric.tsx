import { getProducts } from '@/vibes/soul/data'
import { CompareSection } from '@/vibes/soul/sections/compare-section'

const products = getProducts('Electric')

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
