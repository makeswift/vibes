import { getProducts } from '@/vibes/soul/data';
import { FeaturedProductsList } from '@/vibes/soul/sections/featured-products-list';

export const featuredProducts = {
  title: 'Own Your Journey',
  description:
    'Our shoes are crafted for the independent, fashion-forward woman who walks her own path. Designed with bold style and uncompromising quality, each pair is a statement of confidence and individuality. Elevate your stride—because you don’t just follow trends, you set them.',
  cta: {
    label: 'Shop Now',
    href: '#',
  },
  products: getProducts('Luxury'),
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
