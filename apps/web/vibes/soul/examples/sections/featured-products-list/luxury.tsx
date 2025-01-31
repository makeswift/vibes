import { FeaturedProductsList } from '@/vibes/soul/sections/featured-products-list';

export default function Preview() {
  const products = new Promise<Product[]>((resolve) => {
    setTimeout(() => resolve(defaultProducts), 1000);
  });

  const data = {
    title: 'Our apparel',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit duat pronto.',
    cta: {
      label: 'Shop Now',
      href: '#',
    },
    emptyStateSubtitle: 'Try browsing our complete catalog of products.',
    emptyStateTitle: 'No products found',
  };

  return (
    <>
      <FeaturedProductsList
        cta={data.cta}
        description={data.description}
        products={products}
        title={data.title}
      />

      <FeaturedProductsList
        cta={data.cta}
        description={data.description}
        emptyStateSubtitle={data.emptyStateSubtitle}
        emptyStateTitle={data.emptyStateTitle}
        products={[]}
        title={data.title}
      />
    </>
  );
}
interface Product {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  price: string;
  image: {
    src: string;
    alt: string;
  };
  href: string;
  rating: number;
}

const defaultProducts: Product[] = [
  {
    id: '1',
    title: 'Jada Square Toe Ballet Flat',
    subtitle: '',
    badge: 'Bestseller',
    price: '$350',
    image: {
      src: 'https://rstr.in/monogram/vibes/9vu9tSw1WdA',
      alt: 'Jada Square Toe Ballet Flat',
    },
    href: '#',
    rating: 4.5,
  },
  {
    id: '2',
    title: 'Jayla Woven Ballet Heel',
    subtitle: '',
    badge: 'Bestseller',
    price: '$395',
    image: {
      src: 'https://rstr.in/monogram/vibes/jD25Jjm0zbT',
      alt: 'Jayla Woven Ballet Heel',
    },
    href: '#',
    rating: 4.8,
  },
  {
    id: '3',
    title: 'Jessie Ballet Flat',
    subtitle: '',
    badge: 'Bestseller',
    price: '$450',
    image: {
      src: 'https://rstr.in/monogram/vibes/1ipihAyvRQj',
      alt: 'Jessie Ballet Flat',
    },
    href: '#',
    rating: 4.6,
  },
  {
    id: '4',
    title: 'Leighton Soft Leather Loafer',
    subtitle: '',
    badge: 'Almost Gone',
    price: '$350',
    image: {
      src: 'https://rstr.in/monogram/vibes/YfQW8M1Gv2H/zTWKcqJrdIu',
      alt: 'Leighton Soft Leather Loafer',
    },
    href: '#',
    rating: 4.2,
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
    rating: 4.7,
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
    rating: 4.4,
  },
];

