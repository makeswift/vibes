import { getProducts } from '@/vibes/soul/data';
import {
  FeaturedProductsList,
  FeaturedProductsListSkeleton,
} from '@/vibes/soul/sections/featured-products-list';

export const featuredProducts = {
  title: 'Our plants',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit duat pronto.',
  cta: {
    label: 'Shop now',
    href: '#',
  },
  products: await getProducts('Electric'),
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

      <FeaturedProductsListSkeleton
        cta={{
          label: featuredProducts.cta.label,
          href: featuredProducts.cta.href,
        }}
        description={featuredProducts.description}
        title={featuredProducts.title}
      />
    </>
  );
}
