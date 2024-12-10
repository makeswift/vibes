import { getProducts } from '@/vibes/soul/data';
import { FeaturedProductsList } from '@/vibes/soul/sections/featured-products-list';

export const featuredProducts = {
  title: 'Discover',
  description:
    'The perfect blend of style and functionality with our bike bags. Each design is thoughtfully crafted to enhance your ride, offering smart storage solutions with a sleek, modern look. Whether you’re commuting or exploring, our bags are designed to fit seamlessly into your cycling lifestyle.',
  cta: {
    label: 'Shop Now',
    href: '#',
  },
  products: getProducts('Warm'),
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
