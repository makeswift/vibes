/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { type Product } from '@/vibes/soul/primitives/product-card';
import { Filter } from '@/vibes/soul/sections/product-list-section/filter-panel';

import { SoulBrandName } from '../brands';

// Common product type
interface BaseProduct {
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
}

// Brand-specific product types
type ElectricProduct = BaseProduct & {
  features: Array<'air-purifying' | 'indoor' | 'pet-friendly'>;
  light: 'bright-indirect' | 'bright-direct' | 'low-light';
  size: 'sm' | 'md' | 'lg';
};

type LuxuryProduct = BaseProduct & {
  color: Array<'black' | 'brown' | 'red'>;
  size: string[]; // Shoe sizes like '6', '6.5', etc.
};

type WarmProduct = BaseProduct & {
  color: Array<'blue' | 'green' | 'red'>;
  size: 'sm' | 'md' | 'lg';
};

interface ProductCatalog {
  Electric: ElectricProduct[];
  Luxury: LuxuryProduct[];
  Warm: WarmProduct[];
}

const products: ProductCatalog = {
  Electric: [
    {
      id: '1',
      title: 'Philodendron Imperial Red',
      subtitle: 'Indoor Plant',
      badge: 'Popular',
      price: '$44.95',
      image: {
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZToyMTIwYzE1ZC01YzlkLTQ3MDgtOTZhOS1hZDkwYjVmNDAwZWY=/philodendron-imperial-red.jpeg',
        alt: 'Philodendron Imperial Red',
      },
      href: '#1',
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
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowNzAzMzk0Ni01NGNhLTQ3ZDYtODgyYi0wYWI3NTUzNTU4YjQ=/monstera.jpeg',
        alt: 'Monstera',
      },
      href: '#2',
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
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmNjJhNTMyOC1hNzMwLTQxYjQtODE5Ny05ZDdlYWViMjJhMDQ=/pink-caladium.jpeg',
        alt: 'Pink Caladium',
      },
      href: '#3',
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
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmZmRlZDM2MS0yMWMwLTRiYjktOTU2Ny1mNWM0YjcwMGIwZWQ=/hoya-kerrii.jpeg',
        alt: 'Hoya Kerrii',
      },
      href: '#4',
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
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTplYTBhYzExNC1lYWIwLTQyZjAtYmQzZS04NDJlNmRlM2RkNTc=/bird-nest-fern.jpeg',
        alt: 'Bird Nest Fern',
      },
      href: '#5',
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
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTozZWFjZDhlZi1lY2EzLTRiMzYtYTJkNS02ZGJkOWE4MzUwYjQ=/jade-plant.jpeg',
        alt: 'Jade Plant',
      },
      href: '#6',
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
      href: '#7',
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
      href: '#8',
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
      href: '#9',
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
      href: '#10',
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
      href: '#11',
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
      href: '#12',
      rating: 4.3,
      features: ['air-purifying', 'indoor', 'pet-friendly'],
      light: 'low-light',
      size: 'md',
    },
  ],
  Luxury: [
    {
      id: '1',
      title: 'JADA SQUARE TOE BALLET FLAT',
      subtitle: '',
      badge: 'Bestseller',
      price: '$350',
      image: {
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpkZTUwMzNmMy0zYzRlLTQzOTUtYTc3MC1jYWM0OWE1YWMyY2E=/jada-square-toe.webp',
        alt: 'JADA SQUARE TOE BALLET FLAT',
      },
      href: '#1',
      rating: 4.5,
      color: ['black', 'brown'],
      size: ['6', '6.5', '7', '7.5', '8', '8.5', '9'],
    },
    {
      id: '2',
      title: 'Jayla Woven Ballet Heel',
      subtitle: '',
      badge: 'Bestseller',
      price: '$395',
      image: {
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpkZTE5YTQ1Mi1lZDU3LTQ2NDYtODgxMC0yYzU2NjI0NGM3ODk=/jayla-woven.webp',
        alt: 'Jayla Woven Ballet Heel',
      },
      href: '#2',
      rating: 4.8,
      color: ['brown'],
      size: ['5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5'],
    },
    {
      id: '3',
      title: 'Jessie Ballet Flat',
      subtitle: '',
      badge: 'Bestseller',
      price: '$450',
      image: {
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowZWIzNWY2My0yM2Y3LTRmNDAtYTUzOS0zY2JjNmFhYzJkYWQ=/jessie-ballet.webp',
        alt: 'Jessie Ballet Flat',
      },
      href: '#3',
      rating: 4.6,
      color: ['black', 'red'],
      size: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10'],
    },
    {
      id: '4',
      title: 'Leighton Soft Leather Loafer',
      subtitle: '',
      badge: 'Almost Gone',
      price: '$350',
      image: {
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmM2Y1MzJiZi1hYTg0LTQzNzctYTA4NS1hODZkMWI3NGFmOWU=/leighton-soft.jpeg',
        alt: 'Leighton Soft Leather Loafer',
      },
      href: '#4',
      rating: 4.2,
      color: ['brown', 'black'],
      size: ['7', '7.5', '8', '8.5', '9', '9.5', '10'],
    },
    {
      id: '5',
      title: 'JADA SQUARE TOE BALLET FLAT',
      subtitle: '',
      badge: 'Bestseller',
      price: '$350',
      image: {
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmN2Q1MDUxMC03ZGEwLTQ3MGItYTI0Ny1mOTA0ZTNjYTkyZWU=/jada-square-toe.webp',
        alt: 'JADA SQUARE TOE BALLET FLAT',
      },
      href: '#5',
      rating: 4.7,
      color: ['red'],
      size: ['5', '5.5', '6', '6.5', '7', '7.5', '8'],
    },
    {
      id: '6',
      title: 'DARYA LUG SOLE FISHERMAN',
      subtitle: '',
      badge: 'Almost Gone',
      price: '$290',
      image: {
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo3ZjAyMzkyYS1iN2ViLTQ0YzAtYmUxNi1kOThjMjk0MTU0ZGQ=/darya-lug.webp',
        alt: 'DARYA LUG SOLE FISHERMAN',
      },
      href: '#6',
      rating: 4.4,
      color: ['black'],
      size: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5'],
    },
  ],
  Warm: [
    {
      id: '1',
      title: 'Mini Bar Bag',
      subtitle: 'Blue/Green',
      price: '$65',
      image: {
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1YzIwNTljMi04NzcwLTRiM2ItYmIzMy02ZTk0ODNkY2M5MDk=/mini-bar-bag.jpeg',
        alt: 'Mini Bar Bag',
      },
      href: '#1',
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
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTphOTFmNjU3Ny0zMDMxLTQzNjYtOWUzNC02MjRkYWQ4OTkzOWI=/mini-bar-bag-2.jpeg',
        alt: 'Mini Bar Bag',
      },
      href: '#2',
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
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo5NTIxMmU4MC0xY2EwLTQxZjktOTBiYS0yOWFhYmU3ZTNkMzA=/stem-caddy.jpeg',
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
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo0MDcxNDBlYy1jYmIzLTRiNjQtOTUxMS1mMTIyMGUyYWY5MjQ=/hip-slinger.jpeg',
        alt: 'Hip Slinger',
      },
      href: '#4',
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
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowODYwYTY2NC02NjdjLTRhODYtYTUxYy1jOWExNzI5YTdjMDk=/everyday-tote.jpeg',
        alt: 'Everyday Tote',
      },
      href: '#5',
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
        src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo4YzEyMjUyOC0zMWU5LTQyYWYtOTFlYi04YjQzNmRiZGVmNDU=/mini-saddlebag.jpeg',
        alt: 'Mini Saddlebag',
      },
      href: '#6',
      rating: 4.1,
      color: ['green', 'red'],
      size: 'sm',
    },
  ],
};

// Define the filter types based on search params
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

// Update getFilters function signature
export async function getFilters(brand: SoulBrandName): Promise<Filter[]> {
  await new Promise((resolve) => setTimeout(resolve, 250));

  const brandProducts = products[brand];
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
  const uniqueValues = brandProducts.reduce<Record<string, Set<string>>>((acc, product) => {
    // Handle features (Electric only)
    if ('features' in product) {
      acc.features = new Set([...(acc.features ?? []), ...product.features]);
    }

    // Handle light (Electric only)
    if ('light' in product) {
      acc.light = new Set([...(acc.light ?? []), product.light]);
    }

    // Handle colors (Luxury and Warm)
    if ('color' in product) {
      acc.colors = new Set([...(acc.colors ?? []), ...product.color]);
    }

    // Handle sizes (all brands)
    if ('size' in product) {
      const sizes = Array.isArray(product.size) ? product.size : [product.size];
      acc.sizes = new Set([...(acc.sizes ?? []), ...sizes]);
    }

    return acc;
  }, {});

  // Add brand-specific filters
  if (brand === 'Electric') {
    if (uniqueValues.features?.size != null) {
      filters.push(buildToggleGroupFilter('features', 'Features', uniqueValues.features));
    }
    if (uniqueValues.light?.size != null) {
      filters.push(buildToggleGroupFilter('light', 'Light Requirements', uniqueValues.light));
    }
  }

  if (brand === 'Luxury' || brand === 'Warm') {
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

// Update getProducts function to use FilterParams
export async function getProducts(
  brand: SoulBrandName,
  filterParams?: FilterParams,
): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  let brandProducts = products[brand] as Array<ElectricProduct | LuxuryProduct | WarmProduct>;

  if (filterParams) {
    brandProducts = brandProducts.filter((product) => {
      // Type guards
      const isElectricProduct = (p: any): p is ElectricProduct => 'features' in p && 'light' in p;
      const isColorProduct = (p: any): p is LuxuryProduct | WarmProduct => 'color' in p;

      // Filter conditions
      const conditions: boolean[] = [];

      // Only apply filters if they have valid values (not null or empty)
      if (filterParams.features && filterParams.features.length > 0) {
        if (isElectricProduct(product)) {
          conditions.push(
            filterParams.features.every((feature) =>
              product.features.includes(feature as ElectricProduct['features'][number]),
            ),
          );
        }
      }

      if (filterParams.light && filterParams.light.length > 0) {
        if (isElectricProduct(product)) {
          conditions.push(filterParams.light.some((light) => product.light === light));
        }
      }

      if (filterParams.color && filterParams.color.length > 0) {
        if (isColorProduct(product)) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          conditions.push(filterParams.color.some((color) => product.color.includes(color as any)));
        }
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
      brandProducts = brandProducts.slice(0, filterParams.limit);
    }
  }

  return brandProducts as unknown as Product[];
}
