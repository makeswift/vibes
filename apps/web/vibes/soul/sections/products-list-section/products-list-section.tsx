import { Sliders } from 'lucide-react'

import { Breadcrumb, Breadcrumbs } from '@/vibes/soul/primitives/breadcrumbs'
import { CompareDrawer } from '@/vibes/soul/primitives/compare-drawer'
import { Product } from '@/vibes/soul/primitives/product-card'
import { ProductsList } from '@/vibes/soul/primitives/products-list'

import { Filter, FiltersPanel } from './filters-panel'
import { MobileFilters } from './mobile-filters'
import { Pagination, PaginationInfo } from './pagination'
import { Option as SortOption, Sorting } from './sorting'

interface Props {
  breadcrumbs?: Breadcrumb[]
  title?: Promise<string> | string
  totalCount: Promise<number> | number
  products: Promise<Product[]> | Product[]
  filters: Promise<Filter[]> | Filter[]
  sortOptions: Promise<SortOption[]> | SortOption[]
  compareProducts?: Promise<Product[]> | Product[]
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
  filterLabel = 'Filter',
  sortLabel,
  sortParamName,
  compareParamName,
}: Props) {
  return (
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
      <div className="flex gap-10">
        <div className="w-[320px]">
          <FiltersPanel filters={filters} />
        </div>
        <div className="flex-1">
          <ProductsList
            products={products}
            compareLabel={compareLabel}
            compareParamName={compareParamName}
            showCompare
          />
          {paginationInfo && <Pagination info={paginationInfo} />}
        </div>
      </div>

      {compareProducts && <CompareDrawer products={compareProducts} />}
    </div>
  )
}
