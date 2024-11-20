import { getBreadcrumbs, getFilters, getProducts, getSortOptions } from '@/vibes/soul/data'
import { ProductsListSection } from '@/vibes/soul/sections/products-list-section'

import { cache, compareParamName, sortParamName } from './searchParams'

export default async function Preview({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[]>>
}) {
  const parsedParams = cache.parse(await searchParams)
  const { [compareParamName]: compare, [sortParamName]: sort, ...filterParams } = parsedParams

  const productsPromise = getProducts('Luxury', filterParams)
  const filters = getFilters('Luxury')
  const sortOptions = getSortOptions()
  const breadcrumbs = getBreadcrumbs('Luxury')

  return (
    <div className="p-6">
      <ProductsListSection
        title="Shoes"
        breadcrumbs={breadcrumbs}
        products={productsPromise}
        totalCount={productsPromise.then(products => products.length)}
        filters={filters}
        sortOptions={sortOptions}
        paginationInfo={{ startCursor: '1', endCursor: '10' }}
        compareProducts={productsPromise.then(products =>
          products.filter(product => compare?.includes(product.id))
        )}
        compareParamName={compareParamName}
        sortParamName={sortParamName}
      />
    </div>
  )
}
