import { Breadcrumb, Breadcrumbs } from '@/vibes/soul/components/breadcrumbs'
import { CompareDrawer } from '@/vibes/soul/components/compare-drawer'
import { Product } from '@/vibes/soul/components/product-card'
import { ProductsList } from '@/vibes/soul/components/products-list'

import { Filter, Filters } from './filters'
import { Pagination, Props as PaginationProps } from './pagination'
import { Option as SortOption, Sorting } from './sorting'

interface Props {
  breadcrumbs?: Breadcrumb[]
  title?: Promise<string> | string
  totalCount: Promise<number> | number
  products: Promise<Product[]> | Product[]
  compareProducts: Promise<Product[]> | Product[]
  sortOptions: Promise<SortOption[]> | SortOption[]
  filters: Promise<Filter[]> | Filter[]
  pagination?: Promise<PaginationProps> | PaginationProps
  compareLabel?: string
  filterLabel?: string
  sortLabel?: string
}

export function ProductsListSection({
  breadcrumbs,
  title,
  totalCount,
  products,
  compareProducts,
  sortOptions,
  filters,
  compareLabel,
  pagination,
  filterLabel,
  sortLabel,
}: Props) {
  return (
    <>
      <div className="relative pb-10 @container">
        {breadcrumbs && (
          <Breadcrumbs
            breadcrumbs={breadcrumbs}
            className="px-3 pb-6 pt-24 @xl:px-6 @4xl:pt-32 @5xl:px-20"
          />
        )}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-background text-foreground">
          <h1 className="pl-3 text-xl font-medium leading-none @xl:pl-6 @2xl:text-5xl @5xl:pl-20">
            {title} <span className="text-contrast-200">{totalCount}</span>
          </h1>
          <div className="ml-auto flex gap-2 pr-3 @xl:pr-6 @5xl:pr-20">
            <Filters filters={filters} label={filterLabel} />
            <Sorting options={sortOptions} label={sortLabel} />
          </div>
        </div>
      </div>
      <ProductsList products={products} compareLabel={compareLabel} showCompare />
      <CompareDrawer products={compareProducts} />
    </>
  )
}
