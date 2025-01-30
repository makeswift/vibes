import { getProducts } from '@/vibes/soul/data';
import { ProductsCarousel } from '@/vibes/soul/sections/products-carousel';
import { SectionLayout } from '@/vibes/soul/sections/section-layout';

export default function Preview() {
  const products = getProducts('Electric');

  return (
    <div>
      <SectionLayout className="group/products-carousel">
        <ProductsCarousel
          emptyStateSubtitle="Try browsing our complete catalog of products."
          emptyStateTitle="No products found"
          products={products}
        />
      </SectionLayout>
      <SectionLayout className="group/products-carousel bg-foreground">
        <ProductsCarousel
          colorScheme="dark"
          emptyStateSubtitle="Try browsing our complete catalog of products."
          emptyStateTitle="No products found"
          products={products}
          showScrollbar={false}
        />
      </SectionLayout>
    </div>
  );
}
