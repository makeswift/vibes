import { ListProduct, ProductsList } from '@/vibes/soul/primitives/products-list';

export default function Preview() {
  const products = new Promise<ListProduct[]>((resolve) => {
    setTimeout(() => resolve(defaultProducts), 1000);
  });

  return (
    <div className="p-6">
      <ProductsList products={products} />
    </div>
  );
}

const defaultProducts: ListProduct[] = [
  {
    id: '1',
    title: 'Mini Bar Bag',
    subtitle: 'Blue/Green',
    price: '$65',
    image: {
      src: 'https://rstr.in/monogram/vibes/mrlTNE1TJfB',
      alt: 'Mini Bar Bag',
    },
    href: '#',
    rating: 4.3,
  },
  {
    id: '2',
    title: 'Mini Bar Bag',
    subtitle: 'Blue/Red',
    price: '$65',
    image: {
      src: 'https://rstr.in/monogram/vibes/LznMEk1GSB1',
      alt: 'Mini Bar Bag',
    },
    href: '#',
    rating: 4.5,
  },
  {
    id: '3',
    title: 'Stem Caddy',
    subtitle: 'Green',
    price: '$60',
    image: {
      src: 'https://rstr.in/monogram/vibes/EpL5yspw4Pc',
      alt: 'Stem Caddy',
    },
    href: '#',
    rating: 4.2,
  },
  {
    id: '4',
    title: 'Hip Slinger',
    subtitle: 'Blue/Red',
    price: '$105',
    image: {
      src: 'https://rstr.in/monogram/vibes/z6b0vDjJv6x',
      alt: 'Hip Slinger',
    },
    href: '#',
    rating: 4.6,
  },
  {
    id: '5',
    title: 'Everyday Tote',
    subtitle: 'Blue/Green/Red',
    price: '$185',
    image: {
      src: 'https://rstr.in/monogram/vibes/1tVm6tBbJq9',
      alt: 'Everyday Tote',
    },
    href: '#',
    rating: 4.8,
  },
  {
    id: '6',
    title: 'Mini Saddlebag',
    subtitle: 'Green/Red',
    price: '$45',
    image: {
      src: 'https://rstr.in/monogram/vibes/MZX8-yya26e',
      alt: 'Mini Saddlebag',
    },
    href: '#',
    rating: 4.1,
  },
];
