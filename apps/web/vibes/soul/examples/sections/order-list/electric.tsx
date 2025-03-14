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
    title: 'Philodendron Imperial Red',
    subtitle: 'Indoor Plant',
    price: '$44.95',
    image: {
      src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
      alt: 'Philodendron Imperial Red',
    },
    href: '#',
  },
  {
    id: '2',
    title: 'Monstera',
    subtitle: 'Indoor Plant',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/n0P83RMnClS',
      alt: 'Monstera',
    },
    href: '#',
  },
  {
    id: '3',
    title: 'Pink Caladium',
    subtitle: 'Indoor Plant',
    price: '$19.95',
    image: {
      src: 'https://rstr.in/monogram/vibes/AaZW4j2VTd4',
      alt: 'Pink Caladium',
    },
    href: '#',
  },
  {
    id: '4',
    title: 'Hoya Kerrii',
    subtitle: 'Indoor Plant',
    price: '$16.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/QSaMw6aC_AN',
      alt: 'Hoya Kerrii',
    },
    href: '#',
  },
  {
    id: '5',
    title: 'Bird Nest Fern',
    subtitle: 'Indoor Plant',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/gfGRQi5pHeJ',
      alt: 'Bird Nest Fern',
    },
    href: '#',
  },
  {
    id: '6',
    title: 'Jade Plant',
    subtitle: 'Indoor Plant',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/lJg081kQqvc',
      alt: 'Jade Plant',
    },
    href: '#',
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
