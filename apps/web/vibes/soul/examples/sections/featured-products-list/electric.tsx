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
};

export default function Preview() {
  return (
    <>
      <FeaturedProductsList
        cta={{
          label: featuredProducts.cta.label,
          href: featuredProducts.cta.href,
        }}
        description={featuredProducts.description}
        products={featuredProducts.products}
        title={featuredProducts.title}
      />

      <FeaturedProductsList
        cta={{
          label: featuredProducts.cta.label,
          href: featuredProducts.cta.href,
        }}
        description={featuredProducts.description}
        emptyStateSubtitle="Try browsing our complete catalog of products."
        emptyStateTitle="No products found"
        products={[]}
        title={featuredProducts.title}
      />
    </>
  );
}
