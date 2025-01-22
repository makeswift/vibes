import { getProducts } from '@/vibes/soul/data';
import { CompareSection } from '@/vibes/soul/sections/compare-section';

import { addToCartAction } from './actions';

export default function Preview() {
  const products = getProducts('Luxury');

  return (
    <CompareSection
      addToCartAction={addToCartAction}
      emptyStateSubtitle="Browse our catalog to find products."
      emptyStateTitle="No products to compare"
      products={products}
    />
  );
}
