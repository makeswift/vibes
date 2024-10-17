import { Breadcrumbs } from '@/vibes/soul/primitives/breadcrumbs'
import { ProductsList } from '@/vibes/soul/primitives/products-list'
import {
  Breadcrumb,
  Filter,
  Pages,
  ProductCardProduct,
  Option as SortOption,
} from '@/vibes/soul/types'

import { FiltersPanel } from './filters-panel'
import { MobileFilters } from './mobile-filters'
import { Pagination, PaginationInfo } from './pagination'
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
  paginationInfo?: Promise<PaginationInfo> | PaginationInfo
  compareLabel?: string
  filterLabel?: string
  sortLabel?: string
  sortParamName?: string
  compareParamName?: string
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
  paginationInfo,
  filterLabel,
  sortLabel,
  sortParamName,
  compareParamName,
}: Props) {
  return (
    <>
      <div className="m-auto w-[1280px] space-y-5 @container">
        {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-background text-foreground">
          <h1 className="text-xl font-medium leading-none @2xl:text-5xl ">
            {title} <span className="text-contrast-200">{totalCount}</span>
          </h1>
          <div className="flex gap-2">
            {/* Hide on mobile here */}
            <div>
              <MobileFilters filters={filters} label={filterLabel} />
            </div>
            <Sorting options={sortOptions} label={sortLabel} paramName={sortParamName} />
          </div>
        </div>
        <div className="flex gap-20">
          <div className="w-[300px]">
            <FiltersPanel filters={filters} />
          </div>
          <div className="flex-1">
            <ProductsList
              products={products}
              showCompare
              compareLabel={compareLabel}
              compareParamName={compareParamName}
              compareProducts={compareProducts}
            />
            {paginationInfo && <Pagination info={paginationInfo} />}
          </div>
        </div>
      </div>
    </>
  )
}
