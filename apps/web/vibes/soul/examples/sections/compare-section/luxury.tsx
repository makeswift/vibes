import { getProducts } from '@/vibes/soul/data';
import { CompareSection } from '@/vibes/soul/sections/compare-section';

export default function Preview() {
  const products = getProducts('Luxury');

  return (
    <CompareSection
      emptyStateSubtitle="Browse our catalog to find products."
      emptyStateTitle="No products to compare"
      products={products}
    />
  );
}
