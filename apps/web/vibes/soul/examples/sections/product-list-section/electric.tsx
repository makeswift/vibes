import { createSearchParamsCache, parseAsArrayOf, parseAsFloat, parseAsString } from 'nuqs/server';

import { ProductListSection } from '@/vibes/soul/sections/product-list-section';

export default async function Preview({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[]>>;
}) {
  const parsedParams = cache.parse(await searchParams);
  const { [compareParamName]: compare, [sortParamName]: sort, ...filterParams } = parsedParams;

  const filters = getFilters();
  const sortOptions = getSortOptions();

  const productsList = {
    title: 'Plants',
    products: getProducts(filterParams, sort ?? undefined),
    emptyStateSubtitle: 'Change your filters to see more products',
    emptyStateTitle: 'No products found',
  };

  return (
    <div className="p-6">
      <ProductListSection
        breadcrumbs={breadcrumbs}
        compareParamName={compareParamName}
        compareProducts={productsList.products.then((products) =>
          products.filter((product) => compare?.includes(product.id) === true),
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
    label: 'Home',
    href: '#1',
  },
  {
    label: 'Bags',
    href: '#2',
  },
  {
    label: 'Handle Bags',
    href: '#3',
  },
];

interface FilterParams {
  features?: string[] | null;
  light?: string[] | null;
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
  light: string;
  size: string;
  features: string[];
}
const defaultProducts: Product[] = [
  {
    id: '1',
    title: 'Philodendron Imperial Red',
    subtitle: 'Indoor Plant',
    badge: 'Popular',
    price: '$44.95',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowNzAzMzk0Ni01NGNhLTQ3ZDYtODgyYi0wYWI3NTUzNTU4YjQ=/kv08IvX08j.jpeg',
      alt: 'Philodendron Imperial Red',
    },
    href: '#',
    rating: 4,
    features: ['air-purifying', 'indoor', 'pet-friendly'],
    light: 'bright-indirect',
    size: 'md',
  },
  {
    id: '2',
    title: 'Monstera',
    subtitle: 'Indoor Plant',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZToyMTIwYzE1ZC01YzlkLTQ3MDgtOTZhOS1hZDkwYjVmNDAwZWY=/n0P83RMnClS%202930x3663.jpeg',
      alt: 'Monstera',
    },
    href: '#',
    rating: 4.4,
    features: ['air-purifying', 'indoor'],
    light: 'bright-indirect',
    size: 'lg',
  },
  {
    id: '3',
    title: 'Pink Caladium',
    subtitle: 'Indoor Plant',
    price: '$19.95',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmNjJhNTMyOC1hNzMwLTQxYjQtODE5Ny05ZDdlYWViMjJhMDQ=/AaZW4j2VTd4%202489x3111.jpeg',
      alt: 'Pink Caladium',
    },
    href: '#',
    rating: 4.8,
    features: ['indoor', 'pet-friendly'],
    light: 'bright-direct',
    size: 'sm',
  },
  {
    id: '4',
    title: 'Hoya Kerrii',
    subtitle: 'Indoor Plant',
    price: '$16.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmZmRlZDM2MS0yMWMwLTRiYjktOTU2Ny1mNWM0YjcwMGIwZWQ=/QSaMw6aC_AN%208600x10750.jpeg',
      alt: 'Hoya Kerrii',
    },
    href: '#',
    rating: 2.2,
    features: ['indoor', 'pet-friendly', 'air-purifying'],
    light: 'bright-direct',
    size: 'sm',
  },
  {
    id: '5',
    title: 'Bird Nest Fern',
    subtitle: 'Indoor Plant',
    price: '$24.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTplYTBhYzExNC1lYWIwLTQyZjAtYmQzZS04NDJlNmRlM2RkNTc=/gfGRQi5pHeJ%203094x3868.jpeg',
      alt: 'Bird Nest Fern',
    },
    href: '#',
    rating: 3.5,
    features: ['indoor', 'pet-friendly', 'air-purifying'],
    light: 'low-light',
    size: 'md',
  },
  {
    id: '6',
    title: 'Jade Plant',
    subtitle: 'Indoor Plant',
    price: '$24.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTozZWFjZDhlZi1lY2EzLTRiMzYtYTJkNS02ZGJkOWE4MzUwYjQ=/lJg081kQqvc.jpeg',
      alt: 'Jade Plant',
    },
    href: '#',
    rating: 5,
    features: ['indoor', 'air-purifying'],
    light: 'bright-direct',
    size: 'sm',
  },
  {
    id: '7',
    title: 'Snake Plant',
    subtitle: 'Indoor Plant',
    price: '$34.95',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTozOTRmNDIyNC0wZDRkLTRmOWMtYjVjNi03ZjljNGE2ZjdiOTU=/snake-plant.jpg',
      alt: 'Snake Plant',
    },
    href: '#',
    rating: 4.9,
    features: ['air-purifying', 'indoor', 'pet-friendly'],
    light: 'low-light',
    size: 'md',
  },
  {
    id: '8',
    title: 'Spider Plant',
    subtitle: 'Indoor Plant',
    price: '$12.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTphNzdlNDQwNS1mNDIxLTRiZTQtOGJkMy0wZTc2OWMyYmEzYjY=/spider-plant.jpg',
      alt: 'Spider Plant',
    },
    href: '#',
    rating: 4.2,
    features: ['air-purifying', 'indoor', 'pet-friendly'],
    light: 'bright-indirect',
    size: 'sm',
  },
  {
    id: '9',
    title: 'African Fig Tree',
    subtitle: 'Indoor Plant',
    price: '$49.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo2YTk0Y2E0Yy0wMjcyLTRkZTItOWQ2Mi0xMTY4OTczYzI1ZWM=/african-fig.jpg',
      alt: 'African Fig Tree',
    },
    href: '#',
    rating: 4.7,
    features: ['indoor', 'air-purifying'],
    light: 'bright-indirect',
    size: 'lg',
  },
  {
    id: '10',
    title: 'Birds of Paradise',
    subtitle: 'Indoor Plant',
    price: '$29.95',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo2MTE4YmY5MC0wOWJlLTRlZDUtYjYyOS0wNzgwOTdiOWNjYTk=/birds-of-paradise.jpg',
      alt: 'Birds of Paradise',
    },
    href: '#',
    rating: 4.5,
    features: ['air-purifying', 'indoor'],
    light: 'bright-direct',
    size: 'lg',
  },
  {
    id: '11',
    title: 'ZZ Plant',
    subtitle: 'Indoor Plant',
    price: '$22.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZToxNTFhZTMwNC0zYWZhLTRiZDgtOWRlYy01ODU1OTZlNjQyZDM=/zz-plant.jpg',
      alt: 'ZZ Plant',
    },
    href: '#',
    rating: 4.6,
    features: ['indoor', 'pet-friendly', 'air-purifying'],
    light: 'low-light',
    size: 'md',
  },
  {
    id: '12',
    title: 'Dracaena',
    subtitle: 'Indoor Plant',
    price: '$18.95',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTozOWNmZThkOC00Y2M0LTQ2ZTAtODUwMy1lZmVhMzhhMWRmN2Y=/dracaena.jpg',
      alt: 'Dracanea',
    },
    href: '#',
    rating: 4.3,
    features: ['air-purifying', 'indoor', 'pet-friendly'],
    light: 'low-light',
    size: 'md',
  },
];

export async function getProducts(filterParams?: FilterParams, sort?: string): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  let products = defaultProducts;

  if (filterParams) {
    products = products.filter((product) => {
      // Filter conditions
      const conditions: boolean[] = [];

      // Only apply filters if they have valid values (not null or empty)
      if (filterParams.features && filterParams.features.length > 0) {
        conditions.push(
          filterParams.features.every((feature) => product.features.includes(feature)),
        );
      }

      if (filterParams.light && filterParams.light.length > 0) {
        conditions.push(filterParams.light.some((light) => product.light === light));
      }

      if (filterParams.size && filterParams.size.length > 0) {
        if (Array.isArray(product.size)) {
          conditions.push(filterParams.size.some((size) => product.size.includes(size)));
        } else {
          conditions.push(filterParams.size.includes(product.size));
        }
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
    acc.features = new Set([...(acc.features ?? []), ...product.features]);
    acc.light = new Set([...(acc.light ?? []), product.light]);

    const sizes = [product.size];
    acc.sizes = new Set([...(acc.sizes ?? []), ...sizes]);

    return acc;
  }, {});

  if (uniqueValues.features?.size != null) {
    filters.push(buildToggleGroupFilter('features', 'Features', uniqueValues.features));
  }
  if (uniqueValues.light?.size != null) {
    filters.push(buildToggleGroupFilter('light', 'Light Requirements', uniqueValues.light));
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
