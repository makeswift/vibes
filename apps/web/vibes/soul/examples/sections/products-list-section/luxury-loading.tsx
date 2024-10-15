import { breadcrumbs } from '@/vibes/soul/examples/primitives/breadcrumbs/luxury'
import { ProductsListSection } from '@/vibes/soul/sections/products-list-section'

export default function Preview() {
  return (
    <div className="py-6">
      <ProductsListSection
        title="Shoes"
        breadcrumbs={breadcrumbs}
        products={new Promise(() => [])}
        totalCount={0}
        filters={new Promise(() => [])}
        sortOptions={new Promise(() => [])}
      />
    </div>
  )
}
