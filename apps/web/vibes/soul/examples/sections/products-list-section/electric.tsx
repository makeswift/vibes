import { getBreadcrumbs, getFilters, getProducts, getSortOptions } from '@/vibes/soul/data'
import { ProductsListSection } from '@/vibes/soul/sections/products-list-section'

import { cache, compareParamName, sortParamName } from './searchParams'

export default async function Preview({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] }>
}) {
  const products = getProducts('Electric')
  const filters = getFilters('Electric')
  const sortOptions = getSortOptions()
  const breadcrumbs = getBreadcrumbs('Electric')
  const { [compareParamName]: compare, [sortParamName]: sort } = cache.parse(await searchParams)

  return (
    <div className="p-6">
      <ProductsListSection
        title="Plants"
        breadcrumbs={breadcrumbs}
        products={products}
        totalCount={products.length}
        filters={filters}
        sortOptions={sortOptions}
        paginationInfo={{ endCursor: '10' }}
        compareProducts={products.filter(product => compare?.includes(product.id))}
        compareParamName={compareParamName}
        sortParamName={sortParamName}
      />
    </div>
  )
}
