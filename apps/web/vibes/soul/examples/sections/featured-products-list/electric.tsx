import { getProducts } from '@/vibes/soul/data';
import { FeaturedProductsList } from '@/vibes/soul/sections/featured-products-list';

export const featuredProducts = {
  title: 'Our plants',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit duat pronto.',
  cta: {
    label: 'Shop Now',
    href: '#',
  },
  products: getProducts('Electric'),
  emptyStateSubtitle: 'Try browsing our complete catalog of products.',
  emptyStateTitle: 'No products found',
};

export default function Preview() {
  return (
    <>
      <FeaturedProductsList
        cta={featuredProducts.cta}
        description={featuredProducts.description}
        products={featuredProducts.products}
        title={featuredProducts.title}
      />

      <FeaturedProductsList
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
