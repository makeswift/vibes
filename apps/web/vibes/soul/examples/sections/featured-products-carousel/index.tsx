import { getProducts } from '@/vibes/soul/data';
import {
  FeaturedProductsCarousel,
  FeaturedProductsCarouselSkeleton,
} from '@/vibes/soul/sections/featured-products-carousel';

export default async function Preview() {
  const featuredProducts = await getProducts('Electric');
  return (
    <>
      <FeaturedProductsCarousel
        cta={{ href: '#', label: 'Shop Now' }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        products={featuredProducts}
        title="Our Plants"
      />

      <FeaturedProductsCarouselSkeleton
        cta={{ href: '#', label: 'Shop Now' }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        title="Our Plants"
      />
    </>
  );
}
