import { getProducts } from '@/vibes/soul/data';
import { FeaturedProductsCarousel } from '@/vibes/soul/sections/featured-products-carousel';

export default function Preview() {
  const featuredProducts = getProducts('Electric');

  return (
    <>
      <FeaturedProductsCarousel
        cta={{ href: '#', label: 'Shop Now' }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        products={featuredProducts}
        title="Our Plants"
      />

      <FeaturedProductsCarousel
        cta={{ href: '#', label: 'Shop Now' }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        emptyStateSubtitle="Change your filters to see more products"
        emptyStateTitle="No products found"
        products={[]}
        title="Our Plants"
      />
    </>
  );
}
