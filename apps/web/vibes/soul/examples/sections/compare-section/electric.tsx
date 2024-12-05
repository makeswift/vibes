import { getProducts } from '@/vibes/soul/data';
import { CompareSection } from '@/vibes/soul/sections/compare-section';

import { addToCartAction } from './actions';

const products = await getProducts('Electric');

export default async function Preview() {
  return <CompareSection products={products} addToCartAction={addToCartAction} />;
}
