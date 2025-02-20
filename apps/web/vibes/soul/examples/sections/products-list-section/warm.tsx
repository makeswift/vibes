import { createSearchParamsCache, parseAsArrayOf, parseAsFloat, parseAsString } from 'nuqs/server';

import { ProductsListSection } from '@/vibes/soul/sections/products-list-section';

export default async function Preview({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[]>>;
}) {
  const sortOptions = getSortOptions();
  const filters = getFilters();
  const parsedParams = cache.parse(await searchParams);
  const { [compareParamName]: compare, [sortParamName]: sort, ...filterParams } = parsedParams;

  console.log(sort);

  const productsList = {
    title: 'Handle Bags',
    products: getProducts(filterParams, sort ?? undefined),
    emptyStateSubtitle: 'Change your filters to see more products',
    emptyStateTitle: 'No products found',
  };

  return (
    <div className="p-6">
      <ProductsListSection
        breadcrumbs={breadcrumbs}
        compareParamName={compareParamName}
        compareProducts={productsList.products.then((products) =>
          products.filter((product) => compare?.includes(product.id)),
        )}
        emptyStateSubtitle={productsList.emptyStateSubtitle}
        emptyStateTitle={productsList.emptyStateTitle}
        filters={filters}
        products={productsList.products}
        sortOptions={sortOptions}
        sortParamName={sortParamName}
        title={productsList.title}
        totalCount={productsList.products.then((products) => products.length)}
      />
    </div>
  );
}

export const compareParamName = 'compare';
export const sortParamName = 'sort';

// Common filter parameter names across all brands
export const filterParamNames = {
  // Rating filter
  rating: 'rating',

  // Price filters
  priceMin: 'price_min',
  priceMax: 'price_max',

  // Product-specific filters
  features: 'features',
  light: 'light',
  color: 'color',
  size: 'size',
} as const;

export const parser = {
  // Existing parsers
  [compareParamName]: parseAsArrayOf(parseAsString),
  [sortParamName]: parseAsString,

  // Filter parsers
  [filterParamNames.rating]: parseAsFloat,
  [filterParamNames.priceMin]: parseAsFloat,
  [filterParamNames.priceMax]: parseAsFloat,
  [filterParamNames.features]: parseAsArrayOf(parseAsString),
  [filterParamNames.light]: parseAsArrayOf(parseAsString),
  [filterParamNames.color]: parseAsArrayOf(parseAsString),
  [filterParamNames.size]: parseAsArrayOf(parseAsString),
};

export const cache = createSearchParamsCache(parser);

const breadcrumbs = [
  {
    id: '1',
    label: 'Home',
    href: '#',
  },
  {
    id: '2',
    label: 'Bags',
    href: '#',
  },
  {
    id: '3',
    label: 'Handle Bags',
    href: '#',
  },
];

interface FilterParams {
  color?: string[] | null;
  size?: string[] | null;
  rating?: number | null;
  price_min?: number | null;
  price_max?: number | null;
  limit?: number | null;
}

interface Option {
  label: string;
  value: string;
}

export interface LinkGroupFilter {
  type: 'link-group';
  label: string;
  links: Array<{ label: string; href: string }>;
}

export interface ToggleGroupFilter {
  type: 'toggle-group';
  paramName: string;
  label: string;
  options: Array<{ label: string; value: string; disabled?: boolean }>;
}

export interface RatingFilter {
  type: 'rating';
  paramName: string;
  label: string;
  disabled?: boolean;
}

export interface RangeFilter {
  type: 'range';
  label: string;
  minParamName: string;
  maxParamName: string;
  min?: number;
  max?: number;
  minLabel?: string;
  maxLabel?: string;
  minPrepend?: React.ReactNode;
  maxPrepend?: React.ReactNode;
  minPlaceholder?: string;
  maxPlaceholder?: string;
  disabled?: boolean;
}

export type Filter = ToggleGroupFilter | RangeFilter | RatingFilter | LinkGroupFilter;

async function getSortOptions(): Promise<Option[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
  ];
}

interface Product {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  price: string;
  image: {
    src: string;
    alt: string;
  };
  href: string;
  rating: number;
  color: string[];
  size: string;
}

const defaultProducts: Product[] = [
  {
    id: '1',
    title: 'Mini Bar Bag',
    subtitle: 'Blue/Green',
    price: '$65',
    image: {
      src: 'https://rstr.in/monogram/vibes/mrlTNE1TJfB',
      alt: 'Mini Bar Bag',
    },
    href: '#',
    rating: 4.3,
    color: ['blue', 'green'],
    size: 'sm',
  },
  {
    id: '2',
    title: 'Mini Bar Bag',
    subtitle: 'Blue/Red',
    price: '$65',
    image: {
      src: 'https://rstr.in/monogram/vibes/LznMEk1GSB1',
      alt: 'Mini Bar Bag',
    },
    href: '#',
    rating: 4.5,
    color: ['red', 'blue'],
    size: 'sm',
  },
  {
    id: '3',
    title: 'Stem Caddy',
    subtitle: 'Green',
    price: '$60',
    image: {
      src: 'https://rstr.in/monogram/vibes/EpL5yspw4Pc',
      alt: 'Stem Caddy',
    },
    href: '#',
    rating: 4.2,
    color: ['green'],
    size: 'md',
  },
  {
    id: '4',
    title: 'Hip Slinger',
    subtitle: 'Blue/Red',
    price: '$105',
    image: {
      src: 'https://rstr.in/monogram/vibes/z6b0vDjJv6x',
      alt: 'Hip Slinger',
    },
    href: '#',
    rating: 4.6,
    color: ['blue', 'red'],
    size: 'md',
  },
  {
    id: '5',
    title: 'Everyday Tote',
    subtitle: 'Blue/Green/Red',
    price: '$185',
    image: {
      src: 'https://rstr.in/monogram/vibes/1tVm6tBbJq9',
      alt: 'Everyday Tote',
    },
    href: '#',
    rating: 4.8,
    color: ['blue', 'green', 'red'],
    size: 'lg',
  },
  {
    id: '6',
    title: 'Mini Saddlebag',
    subtitle: 'Green/Red',
    price: '$45',
    image: {
      src: 'https://rstr.in/monogram/vibes/MZX8-yya26e',
      alt: 'Mini Saddlebag',
    },
    href: '#',
    rating: 4.1,
    color: ['green', 'red'],
    size: 'sm',
  },
];

async function getProducts(filterParams?: FilterParams, sort?: string): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  let products: Product[] = [];
  if (filterParams) {
    products = defaultProducts.filter((product) => {
      // Filter conditions
      const conditions: boolean[] = [];

      if (filterParams.color && filterParams.color.length > 0) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        conditions.push(filterParams.color.some((color) => product.color.includes(color)));
      }

      if (filterParams.size && filterParams.size.length > 0) {
        conditions.push(filterParams.size.includes(product.size));
      }

      if (filterParams.rating != null) {
        conditions.push(product.rating >= filterParams.rating);
      }

      if (filterParams.price_min != null || filterParams.price_max != null) {
        const productPrice = parseFloat(product.price.replace(/[^0-9.]/g, ''));

        if (filterParams.price_min != null) {
          conditions.push(productPrice >= filterParams.price_min);
        }
        if (filterParams.price_max != null) {
          conditions.push(productPrice <= filterParams.price_max);
        }
      }

      // Only filter if there are active conditions
      return conditions.length === 0 || conditions.every((condition) => condition);
    });

    // Apply limit if provided
    if (filterParams.limit != null) {
      products = products.slice(0, filterParams.limit);
    }
  }
  if (sort === 'price-asc') {
    products = products.sort(
      (a, b) =>
        parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, '')),
    );
  } else if (sort === 'price-desc') {
    products = products.sort(
      (a, b) =>
        parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, '')),
    );
  }
  return products;
}

export async function getFilters(): Promise<Filter[]> {
  await new Promise((resolve) => setTimeout(resolve, 250));

  const products = defaultProducts;
  const filters: Filter[] = [];

  // Common filter builders
  const buildToggleGroupFilter = (
    paramName: string,
    label: string,
    values: Set<string>,
    formatLabel = (s: string) =>
      s
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
  ): Filter => ({
    type: 'toggle-group',
    paramName,
    label,
    options: Array.from(values).map((value) => ({
      value,
      label: formatLabel(value),
    })),
  });

  // Extract unique values from products
  const uniqueValues = products.reduce<Record<string, Set<string>>>((acc, product) => {
    acc.colors = new Set([...(acc.colors ?? []), ...product.color]);
    const sizes: string[] = Array.isArray(product.size) ? product.size : [product.size];
    acc.sizes = new Set([...(acc.sizes ?? []), ...sizes]);
    return acc;
  }, {});

  if (uniqueValues.colors?.size != null) {
    filters.push(
      buildToggleGroupFilter(
        'color',
        'Color',
        uniqueValues.colors,
        (s) => s.charAt(0).toUpperCase() + s.slice(1),
      ),
    );
  }

  // Add size filter for all brands
  if (uniqueValues.sizes?.size != null) {
    filters.push(
      buildToggleGroupFilter('size', 'Size', uniqueValues.sizes, (s) => s.toUpperCase()),
    );
  }

  // Add rating filter for all brands
  filters.push({
    type: 'rating',
    paramName: 'rating',
    label: 'Rating',
  });

  return filters;
}
