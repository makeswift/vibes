import { getProducts } from '@/vibes/soul/data';
import { ProductsCarousel } from '@/vibes/soul/primitives/products-carousel';

export default function Preview() {
  const products = getProducts('Electric');

  return (
    <div>
      <section className="group/pending overflow-hidden @container">
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 group-has-[[data-pending]]/pending:animate-pulse @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
          <ProductsCarousel
            emptyStateTitle="No products found"
            emptyStateSubtitle="Try browsing our complete catalog of products."
            products={products}
          />
        </div>
      </section>
      <section className="group/pending overflow-hidden bg-foreground @container">
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 group-has-[[data-pending]]/pending:animate-pulse @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
          <ProductsCarousel
            colorScheme="dark"
            products={products}
            showScrollbar={false}
            emptyStateTitle="No products found"
            emptyStateSubtitle="Try browsing our complete catalog of products."
          />
        </div>
      </section>
    </div>
  );
}
