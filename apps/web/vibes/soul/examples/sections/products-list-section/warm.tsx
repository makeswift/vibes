import { getBreadcrumbs, getFilters, getProducts, getSortOptions } from '@/vibes/soul/data';
import { ProductsListSection } from '@/vibes/soul/sections/products-list-section';

import { cache, compareParamName, sortParamName } from './searchParams';

export default async function Preview({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[]>>;
}) {
  const parsedParams = cache.parse(await searchParams);
  const { [compareParamName]: compare, [sortParamName]: sort, ...filterParams } = parsedParams;

  const productsPromise = getProducts('Warm', filterParams);
  const filters = getFilters('Warm');
  const sortOptions = getSortOptions();
  const breadcrumbs = getBreadcrumbs('Warm');

  return (
    <div className="p-6">
      <ProductsListSection
        breadcrumbs={breadcrumbs}
        compareParamName={compareParamName}
        compareProducts={productsPromise.then((products) =>
          products.filter((product) => compare?.includes(product.id)),
        )}
        filters={filters}
        paginationInfo={{ startCursor: '1', endCursor: '10' }}
        products={productsPromise}
        sortOptions={sortOptions}
        sortParamName={sortParamName}
        title="Handle Bags"
        totalCount={productsPromise.then((products) => products.length)}
      />
    </div>
  );
}
