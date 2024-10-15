import { getFilters } from '@/vibes/soul/data/filters'
import { getProducts } from '@/vibes/soul/data/products'
import { getSortOptions } from '@/vibes/soul/data/sort-options'
import { breadcrumbs } from '@/vibes/soul/examples/primitives/breadcrumbs/luxury'
import { ProductsListSection } from '@/vibes/soul/sections/products-list-section'

export default function Preview({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] }
}) {
  const products = getProducts()
  const filters = getFilters()
  const sortOptions = getSortOptions()

  return (
    <div className="py-6">
      <ProductsListSection
        title="Shoes"
        breadcrumbs={breadcrumbs}
        products={products}
        totalCount={products.length}
        filters={filters}
        sortOptions={sortOptions}
        pagination={{ name: 'page', previousPage: '2', nextPage: '3' }}
        compareProducts={
          Array.isArray(searchParams.compare)
            ? products.filter(product => searchParams.compare.includes(product.id))
            : typeof searchParams.compare === 'string'
              ? products.filter(product => product.id === searchParams.compare)
              : []
        }
      />
    </div>
  )
}
