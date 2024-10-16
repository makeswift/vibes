import { getBreadcrumbs, getFilters, getProducts, getSortOptions } from '@/vibes/soul/data'
import { ProductsListSection } from '@/vibes/soul/sections/products-list-section'
import { Filter, Option, Product } from '@/vibes/soul/types'

export default function Preview() {
  const products = new Promise<Product[]>(res => {
    setTimeout(() => {
      res(getProducts())
    }, 5000)
  })

  const filters = new Promise<Filter[]>(res => {
    setTimeout(() => {
      res(getFilters())
    }, 5000)
  })

  const sortOptions = new Promise<Option[]>(res => {
    setTimeout(() => {
      res(getSortOptions())
    }, 5000)
  })

  const breadcrumbs = getBreadcrumbs()

  return (
    <div className="py-6">
      <ProductsListSection
        title="Handle Bags"
        breadcrumbs={breadcrumbs}
        products={products}
        totalCount={0}
        filters={filters}
        sortOptions={sortOptions}
      />
    </div>
  )
}
