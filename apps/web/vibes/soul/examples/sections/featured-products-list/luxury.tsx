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
