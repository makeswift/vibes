import { getProducts } from '@/vibes/soul/data';
import { ProductsCarousel } from '@/vibes/soul/primitives/products-carousel';

export default function Preview() {
  const products = getProducts('Warm');
  return <ProductsCarousel products={products} />;
}
