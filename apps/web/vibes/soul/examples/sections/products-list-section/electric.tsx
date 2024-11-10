import { Suspense } from 'react'

import { getBreadcrumbs, getFilters, getProducts, getSortOptions } from '@/vibes/soul/data'
import { ProductsListSection } from '@/vibes/soul/sections/products-list-section'

import { cache, compareParamName, sortParamName } from './searchParams'

export default async function Preview({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] }>
}) {
  const parsedParams = cache.parse(await searchParams)
  const { [compareParamName]: compare, [sortParamName]: sort, ...filterParams } = parsedParams

  const filters = getFilters('Electric')
  const products = getProducts('Electric', filterParams)
  const sortOptions = getSortOptions()
  const breadcrumbs = getBreadcrumbs('Electric')

  return (
    <div className="p-6">
      <ProductsListSection
        title="Plants"
        breadcrumbs={breadcrumbs}
        products={products}
        totalCount={products.then(products => products.length)}
        filters={filters}
        sortOptions={sortOptions}
        paginationInfo={{ endCursor: '10' }}
        compareProducts={products.then(products =>
          products.filter(product => compare?.includes(product.id))
        )}
        compareParamName={compareParamName}
        sortParamName={sortParamName}
      />
    </div>
  )
}
