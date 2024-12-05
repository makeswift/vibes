import { CardProduct } from '@/vibes/soul/primitives/product-card';
import {
  FeaturedProductsList,
  FeaturedProductsListSkeleton,
} from '@/vibes/soul/sections/featured-products-list';

export const featuredProducts: {
  title: string;
  description: string;
  cta: { label: string; href: string };
  products: CardProduct[];
} = {
  title: 'Own Your Journey',
  description:
    'Our shoes are crafted for the independent, fashion-forward woman who walks her own path. Designed with bold style and uncompromising quality, each pair is a statement of confidence and individuality. Elevate your stride—because you don’t just follow trends, you set them.',
  cta: {
    label: 'Shop Now',
    href: '#',
  },
  products: [
    {
      id: '1',
      title: 'JADA SQUARE TOE BALLET FLAT',
      subtitle: '',
      badge: 'Bestseller',
      price: '$350',
      image: {
        src: 'https://rstr.in/monogram/vibes/9vu9tSw1WdA',
        alt: 'JADA SQUARE TOE BALLET FLAT',
      },
      href: '#',
    },
    {
      id: '2',
      title: 'JAYLA WOVEN BALLET HEEL',
      subtitle: '',
      badge: 'Bestseller',
      price: '$395',
      image: {
        src: 'https://rstr.in/monogram/vibes/jD25Jjm0zbT',
        alt: 'JAYLA WOVEN BALLET HEEL',
      },
      href: '#',
    },
    {
      id: '3',
      title: 'JESSIE BALLET FLAT',
      subtitle: '',
      badge: 'Bestseller',
      price: '$450',
      image: {
        src: 'https://rstr.in/monogram/vibes/1ipihAyvRQj',
        alt: 'JESSIE BALLET FLAT',
      },
      href: '#',
    },
    {
      id: '4',
      title: 'LEIGHTON SOFT LEATHER LOAFER',
      subtitle: '',
      badge: 'Almost Gone',
      price: '$350',
      image: {
        src: 'https://rstr.in/monogram/vibes/YfQW8M1Gv2H/zTWKcqJrdIu',
        alt: 'LEIGHTON SOFT LEATHER LOAFER',
      },
      href: '#',
    },
    {
      id: '5',
      title: 'JADA SQUARE TOE BALLET FLAT',
      subtitle: '',
      badge: 'Bestseller',
      price: '$350',
      image: {
        src: 'https://rstr.in/monogram/vibes/5QBR05kyrYo',
        alt: 'JADA SQUARE TOE BALLET FLAT',
      },
      href: '#',
    },
    {
      id: '6',
      title: 'DARYA LUG SOLE FISHERMAN',
      subtitle: '',
      badge: 'Almost Gone',
      price: '$290',
      image: {
        src: 'https://rstr.in/monogram/vibes/yzjuCwK-5tz/vfCehRZDBGk',
        alt: 'DARYA LUG SOLE FISHERMAN',
      },
      href: '#',
    },
  ],
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
