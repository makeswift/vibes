import { Option } from '@/vibes/soul/sections/products-list-section/sorting';

export async function getSortOptions(): Promise<Option[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Newest', value: 'newest' },
  ];
}
