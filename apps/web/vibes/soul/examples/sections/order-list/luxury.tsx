import { type Order, OrderList } from '@/vibes/soul/sections/order-list';

export default function Preview() {
  const orders = new Promise<Order[]>((resolve) => {
    setTimeout(() => {
      resolve(defaultOrders);
    }, 1000);
  });

  return (
    <div className="p-6">
      <OrderList orders={orders} />
    </div>
  );
}

const products = [
  {
    id: '1',
    title: 'JADA SQUARE TOE BALLET FLAT',
    subtitle: '',
    badge: 'Bestseller',
    price: '$350',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpkZTUwMzNmMy0zYzRlLTQzOTUtYTc3MC1jYWM0OWE1YWMyY2E=/jada-square-toe.webp',
      alt: 'JADA SQUARE TOE BALLET FLAT',
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
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpkZTE5YTQ1Mi1lZDU3LTQ2NDYtODgxMC0yYzU2NjI0NGM3ODk=/jayla-woven.webp',
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
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowZWIzNWY2My0yM2Y3LTRmNDAtYTUzOS0zY2JjNmFhYzJkYWQ=/jessie-ballet.webp',
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
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmM2Y1MzJiZi1hYTg0LTQzNzctYTA4NS1hODZkMWI3NGFmOWU=/leighton-soft.jpeg',
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
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmN2Q1MDUxMC03ZGEwLTQ3MGItYTI0Ny1mOTA0ZTNjYTkyZWU=/jada-square-toe.webp',
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
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo3ZjAyMzkyYS1iN2ViLTQ0YzAtYmUxNi1kOThjMjk0MTU0ZGQ=/darya-lug.webp',
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
