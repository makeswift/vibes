import { OrderListSection } from '@/vibes/soul/sections/order-list-section';
import { Order } from '@/vibes/soul/sections/order-list-section/order-list-item';

export default function Preview() {
  const orders = new Promise<Order[]>((resolve) => {
    setTimeout(() => {
      resolve(defaultOrders);
    }, 1000);
  });

  return (
    <div className="p-6">
      <OrderListSection orders={orders} />
    </div>
  );
}

const products = [
  {
    id: '1',
    title: 'Mini Bar Bag',
    subtitle: 'Blue/Black/Green',
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
    subtitle: 'Blue/Black/Green',
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
    subtitle: 'Blue/Black/Green',
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
    subtitle: 'Blue/Black/Green',
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
    subtitle: 'Blue/Black/Green',
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
    subtitle: 'Blue/Black/Green',
    price: '$45',
    image: {
      src: 'https://rstr.in/monogram/vibes/MZX8-yya26e',
      alt: 'Mini Saddlebag',
    },
    href: '#',
    rating: 4.1,
  },
];

const defaultOrders: Order[] = [
  {
    id: '1',
    totalPrice: products
      .slice(0, 3)
      .reduce((acc, product) => acc + parseInt(product.price.slice(1), 10), 25)
      .toFixed(2),
    status: 'Delivered',
    href: '#',
    lineItems: products.slice(0, 3),
  },
  {
    id: '2',
    totalPrice: products
      .slice(3, 5)
      .reduce((acc, product) => acc + parseInt(product.price.slice(1), 10), 25)
      .toFixed(2),
    status: 'Delivered',
    href: '#',
    lineItems: products.slice(3, 5),
  },
  {
    id: '3',
    totalPrice: products
      .slice(4, 6)
      .reduce((acc, product) => acc + parseInt(product.price.slice(1), 10), 25)
      .toFixed(2),
    status: 'Delivered',
    href: '#',
    lineItems: products.slice(4, 6),
  },
];
