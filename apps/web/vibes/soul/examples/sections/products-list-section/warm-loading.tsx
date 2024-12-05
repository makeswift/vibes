import { getBreadcrumbs, getFilters, getProducts, getSortOptions } from '@/vibes/soul/data';
import { CardProduct } from '@/vibes/soul/primitives/product-card';
import { ProductsListSection } from '@/vibes/soul/sections/products-list-section';
import { Filter } from '@/vibes/soul/sections/products-list-section/filters-panel';
import { Option } from '@/vibes/soul/sections/products-list-section/sorting';

export default function Preview() {
  const productsPromise = new Promise<CardProduct[]>((res) => {
    setTimeout(() => {
      res(getProducts('Warm'));
    }, 5000);
  });

  const filters = new Promise<Filter[]>((res) => {
    setTimeout(() => {
      res(getFilters('Warm'));
    }, 5000);
  });

  const sortOptions = new Promise<Option[]>((res) => {
    setTimeout(() => {
      res(getSortOptions());
    }, 5000);
  });

  const totalCount = new Promise<number>((res) => {
    setTimeout(() => {
      res(getProducts('Warm').then((products) => products.length));
    }, 2000);
  });

  const breadcrumbs = getBreadcrumbs('Warm');

  return (
    <div className="py-6">
      <ProductsListSection
        title="Handle Bags"
        breadcrumbs={breadcrumbs}
        products={productsPromise}
        totalCount={totalCount}
        filters={filters}
        sortOptions={sortOptions}
      />
    </div>
  );
}
