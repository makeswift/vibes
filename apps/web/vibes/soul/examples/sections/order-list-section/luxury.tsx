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
