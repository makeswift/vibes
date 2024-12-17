import { getProducts } from '@/vibes/soul/data';
import { ProductsCarousel } from '@/vibes/soul/primitives/products-carousel';

export default function Preview() {
  const products = getProducts('Warm');

  return (
    <div>
      <section className="overflow-hidden @container">
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
          <ProductsCarousel products={products} />
        </div>
      </section>
      <section className="overflow-hidden bg-foreground @container">
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
          <ProductsCarousel products={products} colorScheme="dark" showScrollbar={false} />
        </div>
      </section>
    </div>
  );
}
