import { ProductsHeader } from '@/vibes/soul/components/products-header'

export default function Preview() {
  return (
    <div className="h-screen pt-10">
      <ProductsHeader title="All Plants" numberOfProducts={32} />
    </div>
  )
}
