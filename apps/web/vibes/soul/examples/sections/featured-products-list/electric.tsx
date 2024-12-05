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
        title={featuredProducts.title}
        description={featuredProducts.description}
        cta={{
          label: featuredProducts.cta.label,
          href: featuredProducts.cta.href,
        }}
        products={featuredProducts.products}
      />

      <FeaturedProductsListSkeleton
        title={featuredProducts.title}
        description={featuredProducts.description}
        cta={{
          label: featuredProducts.cta.label,
          href: featuredProducts.cta.href,
        }}
      />
    </>
  );
}
