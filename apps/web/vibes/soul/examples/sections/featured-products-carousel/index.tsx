import { getProducts } from '@/vibes/soul/data';
import { FeaturedProductsCarousel } from '@/vibes/soul/sections/featured-products-carousel';

export default function Preview() {
  const featuredProducts = {
    title: 'Our plants',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    cta: {
      label: 'Shop Now',
      href: '#',
    },
    products: getProducts('Electric'),
    emptyStateSubtitle: 'Try browsing our complete catalog of products.',
    emptyStateTitle: 'No products found',
  };

  return (
    <>
      <FeaturedProductsCarousel
        cta={featuredProducts.cta}
        description={featuredProducts.description}
        products={featuredProducts.products}
        title={featuredProducts.title}
      />

      <FeaturedProductsCarousel
        cta={featuredProducts.cta}
        description={featuredProducts.description}
        emptyStateSubtitle={featuredProducts.emptyStateSubtitle}
        emptyStateTitle={featuredProducts.emptyStateTitle}
        products={[]}
        title={featuredProducts.title}
      />
    </>
  );
}
