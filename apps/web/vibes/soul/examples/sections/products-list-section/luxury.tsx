import { getBreadcrumbs, getFilters, getProducts, getSortOptions } from '@/vibes/soul/data'
import { ProductsListSection } from '@/vibes/soul/sections/products-list-section'

import { cache, compareParamName, sortParamName } from './searchParams'

export default function Preview({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  const products = getProducts('Luxury')
  const filters = getFilters('Luxury')
  const sortOptions = getSortOptions()
  const breadcrumbs = getBreadcrumbs('Luxury')
  const { [compareParamName]: compare, [sortParamName]: sort } = cache.parse(searchParams)

  return (
    <div className="py-6">
      <ProductsListSection
        title="Shoes"
        breadcrumbs={breadcrumbs}
        products={products}
        totalCount={products.length}
        filters={filters}
        sortOptions={sortOptions}
        paginationInfo={{ startCursor: '1', endCursor: '10' }}
        compareProducts={products.filter(product => compare?.includes(product.id))}
        compareParamName={compareParamName}
        sortParamName={sortParamName}
      />
    </div>
  )
}
