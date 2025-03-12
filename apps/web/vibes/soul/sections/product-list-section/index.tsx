import { Sliders } from 'lucide-react';
import { ComponentProps } from 'react';

import { Stream, Streamable } from '@/vibes/soul/lib/streamable';
import { Button } from '@/vibes/soul/primitives/button';
import { CursorPagination, CursorPaginationInfo } from '@/vibes/soul/primitives/cursor-pagination';
import { ProductCardWithId } from '@/vibes/soul/primitives/product-card';
import * as SidePanel from '@/vibes/soul/primitives/side-panel';
import * as Skeleton from '@/vibes/soul/primitives/skeleton';
import {
  Breadcrumbs,
  BreadcrumbsSkeleton,
  BreadcrumbWithId,
} from '@/vibes/soul/sections/breadcrumbs';
import { ProductList } from '@/vibes/soul/sections/product-list';
import { Filter, FilterPanel } from '@/vibes/soul/sections/product-list-section/filter-panel';
import {
  Sorting,
  SortingSkeleton,
  Option as SortOption,
} from '@/vibes/soul/sections/product-list-section/sorting';

export interface ProductListSectionProps {
  breadcrumbs?: Streamable<BreadcrumbWithId[]>;
  title?: Streamable<string>;
  totalCount: Streamable<number>;
  products: Streamable<ProductCardWithId[]>;
  filters: Streamable<Filter[]>;
  sortOptions: Streamable<SortOption[]>;
  compareProducts?: Streamable<ProductCardWithId[]>;
  paginationInfo?: Streamable<CursorPaginationInfo>;
  compareAction?: ComponentProps<'form'>['action'];
  compareLabel?: Streamable<string>;
  filterLabel?: string;
  filtersPanelTitle?: Streamable<string>;
  resetFiltersLabel?: Streamable<string>;
  rangeFilterApplyLabel?: Streamable<string>;
  sortLabel?: Streamable<string>;
  sortPlaceholder?: Streamable<string>;
  sortParamName?: string;
  sortDefaultValue?: string;
  compareParamName?: string;
  emptyStateSubtitle?: Streamable<string>;
  emptyStateTitle?: Streamable<string>;
  placeholderCount?: number;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --product-list-section-title: hsl(var(--foreground));
 *   --product-list-section-title-font-family: var(--font-heading);
 *   --product-list-section-total-count: hsl(var(--contrast-300));
 *   --product-list-section-filter-label-font-family: var(--font-mono);
 *   --product-list-section-filter-label: hsl(var(--contrast-400));
 *   --product-list-section-filter-link: hsl(var(--contrast-500));
 *   --product-list-section-filter-link-hover: hsl(var(--foreground));
 *   --product-list-section-filter-link-font-family: var(--font-body);
 * }
 * ```
 */
export function ProductListSection({
  breadcrumbs: streamableBreadcrumbs,
  title: streamableTitle = 'Products',
  totalCount: streamableTotalCount,
  products,
  compareProducts,
  sortOptions: streamableSortOptions,
  sortDefaultValue,
  filters,
  compareAction,
  compareLabel,
  paginationInfo,
  filterLabel = 'Filters',
  filtersPanelTitle: streamableFiltersPanelTitle = 'Filters',
  resetFiltersLabel,
  rangeFilterApplyLabel,
  sortLabel: streamableSortLabel,
  sortPlaceholder: streamableSortPlaceholder,
  sortParamName,
  compareParamName,
  emptyStateSubtitle,
  emptyStateTitle,
  placeholderCount = 8,
}: ProductListSectionProps) {
  return (
    <div className="group/product-list-section @container">
      <div className="mx-auto max-w-screen-2xl px-4 py-10 @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-12">
        <div>
          <Stream fallback={<BreadcrumbsSkeleton />} value={streamableBreadcrumbs}>
            {(breadcrumbs) =>
              breadcrumbs && breadcrumbs.length > 1 && <Breadcrumbs breadcrumbs={breadcrumbs} />
            }
          </Stream>
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 pt-6">
            <h1 className="flex items-center gap-2 font-[family-name:var(--product-list-section-title-font-family,var(--font-family-heading))] text-3xl font-medium leading-none text-[var(--product-list-section-title,hsl(var(--foreground)))] @lg:text-4xl @2xl:text-5xl">
              <Stream fallback={<ProductListSectionTitleSkeleton />} value={streamableTitle}>
                {(title) => <span>{title}</span>}
              </Stream>
              <Stream
                fallback={<ProductListSectionTotalCountSkeleton />}
                value={streamableTotalCount}
              >
                {(totalCount) => (
                  <span className="text-[var(--product-list-section-total-count,hsl(var(--contrast-300)))]">
                    {totalCount}
                  </span>
                )}
              </Stream>
            </h1>
            <div className="flex items-center gap-2">
              <Stream
                fallback={<SortingSkeleton />}
                value={Streamable.all([
                  streamableSortLabel,
                  streamableSortOptions,
                  streamableSortPlaceholder,
                ])}
              >
                {([label, options, placeholder]) => (
                  <Sorting
                    defaultValue={sortDefaultValue}
                    label={label}
                    options={options}
                    paramName={sortParamName}
                    placeholder={placeholder}
                  />
                )}
              </Stream>
              <div className="block @3xl:hidden">
                <SidePanel.Root>
                  <SidePanel.Trigger asChild>
                    <Button size="medium" variant="secondary">
                      {filterLabel}
                      <span className="hidden @xl:block">
                        <Sliders size={20} />
                      </span>
                    </Button>
                  </SidePanel.Trigger>
                  <Stream value={streamableFiltersPanelTitle}>
                    {(filtersPanelTitle) => (
                      <SidePanel.Content title={filtersPanelTitle}>
                        <FilterPanel
                          filters={filters}
                          paginationInfo={paginationInfo}
                          rangeFilterApplyLabel={rangeFilterApplyLabel}
                          resetFiltersLabel={resetFiltersLabel}
                        />
                      </SidePanel.Content>
                    )}
                  </Stream>
                </SidePanel.Root>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-stretch gap-8 @4xl:gap-10">
          <aside className="hidden w-52 @3xl:block @4xl:w-60">
            <Stream value={streamableFiltersPanelTitle}>
              {(filtersPanelTitle) => <h2 className="sr-only">{filtersPanelTitle}</h2>}
            </Stream>
            <FilterPanel
              className="sticky top-4"
              filters={filters}
              paginationInfo={paginationInfo}
              rangeFilterApplyLabel={rangeFilterApplyLabel}
              resetFiltersLabel={resetFiltersLabel}
            />
          </aside>

          <div className="flex-1 group-has-[[data-pending]]/product-list-section:animate-pulse">
            <ProductList
              compareAction={compareAction}
              compareLabel={compareLabel}
              compareParamName={compareParamName}
              compareProducts={compareProducts}
              emptyStateSubtitle={emptyStateSubtitle}
              emptyStateTitle={emptyStateTitle}
              placeholderCount={placeholderCount}
              products={products}
              showCompare
            />

            {paginationInfo && <CursorPagination info={paginationInfo} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductListSectionTitleSkeleton() {
  return (
    <Skeleton.Root
      className="group-has-[[data-pending]]/product-list-section:animate-pulse"
      pending
    >
      <Skeleton.Text characterCount={6} className="rounded-lg" data-pending />
    </Skeleton.Root>
  );
}

export function ProductListSectionTotalCountSkeleton() {
  return (
    <Skeleton.Root
      className="group-has-[[data-pending]]/product-list-section:animate-pulse"
      pending
    >
      <Skeleton.Text characterCount={2} className="rounded-lg" data-pending />
    </Skeleton.Root>
  );
}
