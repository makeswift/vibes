import { Breadcrumbs } from '@/vibes/soul/primitives/breadcrumbs'
import { CompareDrawer } from '@/vibes/soul/primitives/compare-drawer'
import { ProductsList } from '@/vibes/soul/primitives/products-list'
import {
  Breadcrumb,
  Filter,
  Pages,
  ProductCardProduct,
  Option as SortOption,
} from '@/vibes/soul/types'

import { Filters } from './filters'
import { Pagination } from './pagination'
import { Sorting } from './sorting'

interface Props {
  breadcrumbs?: Breadcrumb[]
  title?: Promise<string> | string
  totalCount: Promise<number> | number
  products: Promise<ProductCardProduct[]> | ProductCardProduct[]
  filters: Promise<Filter[]> | Filter[]
  sortOptions: Promise<SortOption[]> | SortOption[]
  compareProducts?: Promise<ProductCardProduct[]> | ProductCardProduct[]
  pagination?: Promise<Pages> | Pages
  compareLabel?: string
  filterLabel?: string
  sortLabel?: string
  sortParam?: string
}

export function ProductsListSection({
  breadcrumbs,
  title = 'Products',
  totalCount,
  products,
  compareProducts,
  sortOptions,
  filters,
  compareLabel,
  pagination,
  filterLabel,
  sortLabel,
  sortParam,
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
            <Sorting options={sortOptions} label={sortLabel} sortParam={sortParam} />
          </div>
        </div>
      </div>
      <ProductsList products={products} compareLabel={compareLabel} showCompare />
      {pagination && <Pagination pages={pagination} />}
      {compareProducts && <CompareDrawer products={compareProducts} />}
    </>
  )
}
